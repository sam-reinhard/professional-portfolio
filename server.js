// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content
app.use(express.static("Assets"));

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "./Assets/about.html"));
});
  
app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "/Assets/portfolio.html"));
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "/Assets/contact.html")); // not working??? maybe heroku needs to refresh
});

// Starts the server
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });