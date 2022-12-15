const express = require("express");
const app = express();
const web = require("./routes/web");
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", web);


app.listen(8000, () => {
  console.log("success");
});
