console.log('hello world')
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    console.log('request received');
    res.status(200).send("HELLO WORLD!");
});
app.listen(port, () => {
    console.log(`listening to requests on http://localhost:${port}`)
});
