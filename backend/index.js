const http = require('http');
const hostname = "127.0.0.1";
const mongoose = require('mongoose');
const port = 4000;
const dbUrl = "mongodb+srv://l1am:78275L1aM@cluster0.v20q8.mongodb.net/short-links";

const server = http.createServer((req, res) => {
  const module = require(`./modules${req.url}`);
  const method = module[req.method];

  if (method) {
    method(req, res);
  }
});

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`)
    });
  })
  .catch(e => {
    console.log(e.message);
    process.exit(1);
  });