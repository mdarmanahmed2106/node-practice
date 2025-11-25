const express = require("express");
const session = require("cookie-session");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Simple session
app.use(
  session({
    name: "user_session",
    keys: ["secret1"],
  })
);

app.get("/", (req, res) => {
  if (req.session.user) {
    const u = req.session.user;
    return res.send(`
      <h1>Welcome, ${u.name}</h1>
      <p>Username: ${u.username}</p>
      <p>Email: ${u.email}</p>

      <form method="post" action="/profile">
        <button>Profile</button>
      </form>

      <form method="post" action="/logout">
        <button>Logout</button>
      </form>
    `);
  }

  res.send(`
    <h1>Home</h1>
    <form method="post" action="/register">
      <button>Register</button>
    </form>
  `);
});

// Registration form (GET to show form)
app.get("/register", (req, res) => {
  res.send(`
    <h1>Register</h1>
    <form method="post" action="/register">
      <input name="name" placeholder="Full name" required><br><br>
      <input name="username" placeholder="Username" required><br><br>
      <input name="email" placeholder="Email" required><br><br>
      <input name="password" placeholder="Password" type="password" required><br><br>
      <button>Create</button>
    </form>
  `);
});

// Handle registration (POST)
app.post("/register", (req, res) => {
  const { name, username, email } = req.body;

  req.session.user = { name, username, email };

  res.redirect("/");
});

// Profile (now POST)
app.post("/profile", (req, res) => {
  if (!req.session.user) return res.redirect("/");

  const u = req.session.user;
  res.send(`
    <h1>${u.name}'s Profile</h1>
    <p>Username: ${u.username}</p>
    <p>Email: ${u.email}</p>

    <form method="get" action="/">
      <button>Home</button>
    </form>
  `);
});

// Logout (now POST)
app.post("/logout", (req, res) => {
  req.session = null;
  res.send(`
    Logged out.
    <form method="get" action="/">
      <button>Home</button>
    </form>
  `);
});

app.listen(port, () => console.log(`Running at http://localhost:${port}`));
