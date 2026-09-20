function login() {

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  fetch("http://https://alp18-backend.onrender.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then(async (response) => {

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error("Non-JSON response from backend:", text);

        throw new Error(
          "Backend returned an invalid response. Check the server and API route."
        );
      }

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      return data;
    })
    .then((data) => {

      console.log("Login successful:", data);

      localStorage.setItem("token", data.token);

      if (data.user) {
        localStorage.setItem("userName", data.user.name || "");
        localStorage.setItem("userEmail", data.user.email || "");
      }

      alert("Login successful!");

      window.location.href = "04-dashboard.html";
    })
    .catch((error) => {

      console.error("Login error:", error);

      alert("Login error: " + error.message);
    });
}


function handleGoogleCredential(response) {

  if (!response || !response.credential) {
    alert("Google login failed. No credential received.");
    return;
  }

  fetch("http://https://alp18-backend.onrender.com/api/google-login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      credential: response.credential
    })
  })
    .then(async (response) => {

      const text = await response.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch (error) {

        console.error("Non-JSON response from backend:", text);

        throw new Error(
          "Backend returned an invalid response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Google login failed."
        );
      }

      return data;
    })
    .then((data) => {

      console.log("Google login successful:", data);

      localStorage.setItem("token", data.token);

      if (data.user) {
        localStorage.setItem(
          "userName",
          data.user.name || ""
        );

        localStorage.setItem(
          "userEmail",
          data.user.email || ""
        );
      }

      alert("Google login successful!");

      window.location.href = "04-dashboard.html";
    })
    .catch((error) => {

      console.error("Google login error:", error);

      alert(
        "Google login error: " + error.message
      );
    });
}