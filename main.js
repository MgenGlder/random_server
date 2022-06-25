console.log('hello world')
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
    // TODO: Add observability and TextMetrics
    // TODO: Add some testing
    // TODO: Add error capturing with a third part service
    console.log('request received');
    // TODO: ^ Measure the amount of time the above takes to run
    res.status(200).send("HELLO WORLD!");
});
app.listen(port, () => {
    console.log(`listening to requests on http://localhost:${port}`)
});
