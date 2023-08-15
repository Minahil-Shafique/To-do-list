const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

let array = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItems: array });
});


app.post("/", function (req, res) {
  let item = req.body.newItem;
  array.push(item);
  res.redirect("/")
});

app.listen(3000, function () {
  console.log("The server is running on port 3000.");
});
