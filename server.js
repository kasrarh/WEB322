var port = process.env.PORT || 3000;

const exp = require("express");
const app = exp();
const path = require("path");

app.use("/pictures", exp.static(path.join(__dirname, "pictures")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "blog.hbs"));
});
app.get("/Blog", function (req, res) {
  res.sendFile(path.join(__dirname, "blog.hbs"));
});
app.get("/article/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "article.hbs"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "login.hbs"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "register.hbs"));
});

app.listen(port);