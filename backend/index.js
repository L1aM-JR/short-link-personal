const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 4000;

app.use('/shorten', require("./routers/shorten"));

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));