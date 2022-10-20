var port = process.env.PORT || 3000;

const exp = require("express");
const app = exp();
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

function specialChars(data) {
    const chars = /[ `~!@#$%^&*()_+=\-?]/;
    return chars.test(data)
  }

app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use("/pictures", exp.static(path.join(__dirname, "pictures")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/blog.hbs"));
});
app.get("/Blog", function (req, res) {
  res.sendFile(path.join(__dirname, "views/blog.hbs"));
});
app.get("/article/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "views/article.hbs"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.hbs"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.hbs"));
});

app.post("/login", function (req, res) {
    let body = req.body;
    if (body.username && body.password && specialChars(body.username) == false) {
      res.render("blog", { layout: false });
    } else {
      var loginErrorMsg =
        "the username or the password is inccorect(username can not conatin special charcters)";
      res.render("login", { loginErrorMsg: loginErrorMsg, layout: false });
    }
  });

app.listen(port);