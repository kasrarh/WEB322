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
    res.render("blog", { layout: false });
});
app.get("/Blog", function (req, res) {
    res.render("blog", { layout: false });
});
app.get("/article/:id", function (req, res) {
    res.render("article", { layout: false });
});
app.get("/login", function (req, res) {
    res.render("login", { layout: false });
});
app.get("/register", function (req, res) {
    res.render("register", { layout: false });
});

app.post("/login", function (req, res) {
    let body = req.body;
    console.log(body.username)
    if (body.username && body.password && specialChars(body.username) == false) {
      res.render("blog", { layout: false });
    } else {
      var loginErrorMsg = "The username contains special characters";
      res.render("login", { layout: false, loginErrorMsg: loginErrorMsg , username: String(body.username)});
    }
  });

app.listen(port);