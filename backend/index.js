const http = require('http');
const { MongoClient } = require('mongodb');
const hostname = "127.0.0.1";
const mongoose = require('mongoose');
const port = 4000;
const dbUrl = "mongodb+srv://short-links:78275L1aM@cluster0.m8ten.mongodb.net/short-links";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization, x-my-custom-header"
  });
  if (req.method === "OPTIONS") {
    res.end();
  }

  const module = require(`./modules${req.url}`);
  const method = module[req.method];

  if (method) {
    method(req, res);
  }
});

const client = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  });

  client.close();
});

// mongoose
//   .connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(() => {
//     server.listen(port, hostname, () => {
//       console.log(`Server running at http://${hostname}:${port}/`)
//     });
//   })
//   .catch(e => {
//     console.log(e.message);
//     process.exit(1);
//   });