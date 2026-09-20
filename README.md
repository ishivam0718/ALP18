# Access Learning Platform (ALP18)

Access Learning Platform, also known as ALP18, is a web-based learning platform created for students and beginners who want to learn and explore different areas of technology from one place.

The main idea behind ALP18 is to make technical learning easier to navigate. Instead of searching for different resources separately, users can explore programming, web development, AI, data science, cybersecurity, DSA, career resources, project ideas, and other useful learning material through a single platform.

---

## 📌 About the Project

ALP18 is designed with a simple and practical approach. The platform provides a personalized dashboard after login where users can access different learning sections, track their learning progress, save personal notes, and explore technical resources.

The project includes user authentication, Google Login, progress tracking, personal notes, and a backend connected with Mon]goDB for storing user-related information.

---

## ✨ Features

### 🔐 User Authentication

- User signup with name, email, and password
- Secure password hashing using bcrypt
- User login
- JWT-based authentication
- Google Login
- Protected dashboard access
- Logout functionality

### 📊 Personalized Dashboard

The dashboard provides a central place for accessing different parts of the platform.

Users can view:

- Their name and email
- Learning progress
- Completed lessons
- Remaining lessons
- Learning resources
- Project ideas
- Personal notes
- Different technical categories

### 📚 Learning Resources

ALP18 provides resources covering different areas of technology:

- Artificial Intelligence and Machine Learning
- Web Development
- Programming Languages
- Coding Practice and DSA
- Career, Internships and Jobs
- DevOps, Cloud and Deployment
- Data Science and Analytics
- Cybersecurity and Networking
- Design, UI/UX and Productivity
- Projects, Open Source and Portfolio

### 📈 Progress Tracking

The platform keeps track of completed lessons for each user.

Users can see:

- Completed lessons
- Remaining lessons
- Overall progress percentage

Completed lesson information is stored in the database and associated with the logged-in user.

### 📝 Personal Notes

The dashboard includes a personal notes section where users can:

- Create notes
- Add a title and content
- View saved notes
- Delete saved notes

Notes are stored locally in the browser.

### 💡 Project Ideas

The platform includes a project ideas section that helps students find ideas for practicing their technical skills and building projects.

### 📱 Responsive Interface

The frontend is designed to provide a clean and usable experience across different screen sizes, including desktop and smaller screens.

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication and Security

- JSON Web Token (JWT)
- bcrypt
- Google OAuth
- Environment Variables

---

## 🔌 Backend API

The backend provides APIs for authentication, user information, and learning progress.

### Test Backend

```text
GET /api/test

#Project Structure:

ALP18/
│
├── Backend/
│   │
│   ├── models/
│   │   └── user.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   │
│   ├── HTML files
│   ├── css/
│   ├── js/
│   ├── images/
│   └── other frontend files
│
├── .gitignore
└── README.md

🗄️ Database

ALP18 uses MongoDB to store user-related information.

The database is used for:

User accounts
Authentication information
Google login information
Learning progress
Completed lessons

Mongoose is used to define the user model and communicate with MongoDB.

The MongoDB database used during development is:

mongodb://127.0.0.1:27017/ALP18

🔒 Security

ALP18 uses several security measures for handling user authentication and application data.

JWT Authentication

JSON Web Token is used to authenticate users when they access protected backend APIs.

Password Hashing

Passwords are hashed using bcrypt before being stored in the database.

Google Authentication

Google Login is used to allow users to authenticate using their Google account.

Environment Variables

Sensitive configuration values are stored inside the .env file instead of being directly written into the source code.

Git Protection

The .env file is included in .gitignore so that sensitive credentials are not uploaded to GitHub.


🎨 Frontend

The frontend is responsible for the user interface and interaction with the platform.

It contains:

HTML pages
CSS files
JavaScript files
Images
Course pages

The main frontend pages include:

Landing page
Login page
Signup page
Dashboard
Course pages

The frontend communicates with the backend APIs to handle authentication, profile information, and learning progress.

⚙️ Backend

The backend is built using Node.js and Express.js.

It handles:

User signup
User login
Google authentication
JWT authentication
User profile information
Learning progress
Lesson completion
MongoDB operations

The main backend entry point is:

backend/server.js
🛡️ Security Folder

The security section represents the security-related functionality used by the project.

The project uses:

JWT authentication
bcrypt password hashing
Google authentication
Environment variables
Protected API routes

These mechanisms help protect user authentication and sensitive configuration data.

🗃️ Database Folder

The database section represents the database part of the project.

ALP18 uses:

MongoDB
Mongoose

MongoDB stores user-related information and learning progress.

The actual MongoDB database runs separately from the project files.

🔗 Frontend and Backend

The frontend and backend are maintained separately.

Frontend

The frontend handles:

User interface
Page navigation
Forms
Dashboard interface
Learning resources
Notes
Client-side interactions
Backend

The backend handles:

Authentication
Database operations
User profiles
Learning progress
Lesson completion
Google authentication

This separation keeps the project organized and makes it easier to maintain.

🚀 How to Run the Project
1. Start MongoDB

Make sure MongoDB is installed and running on your system.

2. Start the Backend

Open the terminal inside the backend folder and run:

npm install

Then start the backend:

node server.js

The backend runs on:

http://localhost:5501
3. Start the Frontend

Open the frontend using VS Code Live Server.

The frontend runs on:

http://127.0.0.1:5500
4. Open the Platform

Open the frontend URL in your browser and use the signup/login system to access the dashboard.

📌 Environment Variables

The backend uses a .env file for configuration.

Example:

MONGO_URI=mongodb://127.0.0.1:27017/ALP18
JWT_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
PORT=5501

The .env file should never be uploaded to GitHub.

🎯 Project Purpose

The purpose of ALP18 is to create a single learning platform where students can find useful technical resources without having to manage everything across multiple places.

The project focuses on making technical learning resources easier to access while providing useful features such as:

Authentication
Learning resources
Progress tracking
Project ideas
Personal notes
Technical categories
📌 Current Project Status

The current version of ALP18 includes the main learning platform functionality.

The project currently has:

Working frontend
Working backend
MongoDB connection
User authentication
Google Login
Protected dashboard
Progress tracking
Personal notes
Learning resources
Project ideas
Responsive interface
🚀 Future Scope

The project can be extended in the future with additional learning content, more detailed course structures, improved progress tracking, and other features as the platform grows.

The current version focuses on the core learning platform, authentication, dashboard, resources, progress tracking, project ideas, and personal notes.

👩‍💻 Author
[Vidhi Yadav]

📌 Project Name
Access Learning Platform (ALP18)

Built as an educational web development project.