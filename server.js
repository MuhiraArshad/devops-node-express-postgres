const express = require("express");
const app = express();
const db = require("./app/models");
const userRoutes = require("./app/routes/user.routes");

app.use(express.json());

// ✅ API routes
app.use("/api/users", userRoutes);

// ✅ Root route (for quick testing)
app.get("/", (req, res) => {
  res.send("🚀 Node.js + PostgreSQL + Docker is running successfully!");
});

// ✅ Sync database and start server
const PORT = process.env.PORT || 3000;
db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
});
