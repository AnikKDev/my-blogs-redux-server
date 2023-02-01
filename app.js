const express = require("express");
const app = express();
const cors = require("cors");
// =================================================================

app.use(express.json());
app.use(cors());

// ======routes will be here================
app.get("/", (req, res, next) => {
  res.send("yayyy route is working");
});

// =================================================================
module.exports = app;
