const express = require("express");
const app = express();
app.use("/scripts", express.static(__dirname + "/scripts/"));
app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.listen(5001, () => console.log("server running on port 5001"));
