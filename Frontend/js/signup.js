function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters");
    return;
  }

  fetch("http://https://alp18-backend.onrender.com/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(async res => {
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `Status ${res.status}`);
      }

      alert("Signup successful");

      window.location.href = "02-login.html";
    })
    .catch(err => {
      alert("Signup error: " + err.message);
      console.log(err);
    });
} 