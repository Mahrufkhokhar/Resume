const express = require("express");
const app = express();
const port = 8000;
const web = require("./routes/web");
const path = require("path");


app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", web);


app.listen(port, () => {
  console.log("success");
});
module.exports=app
