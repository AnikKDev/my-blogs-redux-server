const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

// =========== database configuration =====
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5xaxqzq.mongodb.net/test`
  )
  .then(() => {
    console.log("database is connected");
  });
// ============ server configuration

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
