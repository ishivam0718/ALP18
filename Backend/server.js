require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

const User = require("./models/user");

const app = express();

const PORT = process.env.PORT || 5501;

const MONGO_URI = process.env.MONGO_URI;

const JWT_SECRET = process.env.JWT_SECRET;

const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID;

const googleClient =
  new OAuth2Client(GOOGLE_CLIENT_ID);

app.use(cors());

app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully.");
  })
  .catch(error => {
    console.error(
      "MongoDB connection error:",
      error
    );
  });

function authenticateToken(req, res, next) {

  const authHeader =
    req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({
      success: false,
      message: "Authorization token missing."
    });

  }

  const token =
    authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

  jwt.verify(
    token,
    JWT_SECRET,
    (error, user) => {

      if (error) {

        return res.status(403).json({
          success: false,
          message: "Invalid or expired token."
        });

      }

      req.user = user;

      next();

    }
  );
}

app.get("/api/test", (req, res) => {

  res.json({
    message:
      "ALP18 Backend is running successfully!"
  });

});

app.post("/api/signup", async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    if (!name || !email || !password) {

      return res.status(400).json({
        message:
          "Name, email and password are required."
      });

    }

    const normalizedEmail =
      email.toLowerCase().trim();

    const existingUser =
      await User.findOne({
        email: normalizedEmail
      });

    if (existingUser) {

      return res.status(409).json({
        message:
          "An account with this email already exists."
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      new User({

        name: name.trim(),

        email: normalizedEmail,

        password: hashedPassword

      });

    await user.save();

    res.status(201).json({
      message:
        "User registered successfully."
    });

  } catch (error) {

    console.error(
      "Signup error:",
      error
    );

    res.status(500).json({
      message:
        "Signup failed."
    });

  }

});

app.post("/api/login", async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const normalizedEmail =
      email.toLowerCase().trim();

    const user =
      await User.findOne({
        email: normalizedEmail
      });

    if (!user) {

      return res.status(401).json({
        message:
          "Invalid email or password."
      });

    }

    if (!user.password) {

      return res.status(401).json({
        message:
          "This account uses Google Login. Please continue with Google."
      });

    }

    const passwordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!passwordMatch) {

      return res.status(401).json({
        message:
          "Invalid email or password."
      });

    }

    const token =
      jwt.sign(
        {
          userId: user._id,
          email: user.email
        },

        JWT_SECRET,

        {
          expiresIn: "1d"
        }
      );

    res.json({

      message:
        "Login successful!",

      token,

      user: {
        name: user.name,
        email: user.email
      }

    });

  } catch (error) {

    console.error(
      "Login error:",
      error
    );

    res.status(500).json({
      message:
        "Login failed."
    });

  }

});

app.post("/api/google-login", async (req, res) => {

  try {

    const {
      credential
    } = req.body;

    if (!credential) {

      return res.status(400).json({
        message:
          "Google credential missing."
      });

    }

    const ticket =
      await googleClient.verifyIdToken({

        idToken: credential,

        audience: GOOGLE_CLIENT_ID

      });

    const payload =
      ticket.getPayload();

    const googleId =
      payload.sub;

    const email =
      payload.email?.toLowerCase();

    const name =
      payload.name || "Student";

    let user =
      await User.findOne({
        email: email
      });

    if (!user) {

      user =
        new User({

          name: name,

          email: email,

          googleId: googleId

        });

      await user.save();

    } else {

      if (!user.googleId) {

        user.googleId =
          googleId;

        await user.save();

      }

    }

    const token =
      jwt.sign(

        {
          userId: user._id,
          email: user.email
        },

        JWT_SECRET,

        {
          expiresIn: "1d"
        }

      );

    res.json({

      message:
        "Google login successful!",

      token,

      user: {
        name: user.name,
        email: user.email
      }

    });

  } catch (error) {

    console.error(
      "Google login error:",
      error
    );

    res.status(401).json({
      message:
        "Google login failed."
    });

  }

});

app.get(
  "/api/profile",
  authenticateToken,
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.user.userId
        ).select(
          "name email googleId"
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "User not found."
        });

      }

      res.json({

        success: true,

        user: {
          name: user.name,
          email: user.email,
          googleId:
            user.googleId || null
        }

      });

    } catch (error) {

      console.error(
        "Profile error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Could not load profile."
      });

    }

  }
);

app.get(
  "/api/progress",
  authenticateToken,
  async (req, res) => {

    try {

      const user =
        await User.findById(
          req.user.userId
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "User not found."
        });

      }

      const completedLessonIds =
        user.completedLessonIds || [];

      const totalLessons = 10;

      user.completedLessons =
        completedLessonIds.length;

      user.totalLessons =
        totalLessons;

      await user.save();

      res.json({

        success: true,

        completedLessons:
          completedLessonIds.length,

        totalLessons:
          totalLessons,

        completedLessonIds:
          completedLessonIds

      });

    } catch (error) {

      console.error(
        "Progress error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Could not load progress."
      });

    }

  }
);

app.post(
  "/api/complete-lesson",
  authenticateToken,
  async (req, res) => {

    try {

      const {
        lessonId
      } = req.body;

      const validLessonIds = [
        "html-01",
        "html-02",
        "html-03",
        "html-04",
        "html-05",
        "html-06",
        "html-07",
        "html-08",
        "html-09",
        "html-10"
      ];

      if (!validLessonIds.includes(lessonId)) {

        return res.status(400).json({
          success: false,
          message:
            "Invalid lesson ID."
        });

      }

      const user =
        await User.findById(
          req.user.userId
        );

      if (!user) {

        return res.status(404).json({
          success: false,
          message:
            "User not found."
        });

      }

      if (
        !user.completedLessonIds.includes(
          lessonId
        )
      ) {

        user.completedLessonIds.push(
          lessonId
        );

      }

      user.completedLessons =
        user.completedLessonIds.length;

      user.totalLessons =
        validLessonIds.length;

      await user.save();

      res.json({

        success: true,

        message:
          "Lesson completed successfully!",

        completedLessons:
          user.completedLessons,

        totalLessons:
          user.totalLessons,

        completedLessonIds:
          user.completedLessonIds

      });

    } catch (error) {

      console.error(
        "Complete lesson error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Could not complete lesson."
      });

    }

  }
);

app.listen(PORT, () => {

  console.log(
    `ALP18 Backend running on http://localhost:${PORT}`
  );

});