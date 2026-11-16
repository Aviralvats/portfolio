
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve HTML, CSS, JS and images
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Projects page
app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "projects.html"));
});
app.get("/linear_Regression", (req, res) => {
    res.sendFile(path.join(__dirname, "linear.html"));
});

// Research page
app.get("/writing", (req, res) => {
    res.sendFile(path.join(__dirname, "writing.html"));
});




app.listen(PORT, () => {
    console.log(`Portfolio running at http://localhost:${PORT}`);
});
