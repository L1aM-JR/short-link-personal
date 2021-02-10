const { getBody } = require('../../utils');
const Users = require("../../models/users");

async function POST(req, res) {
  const body = await getBody(req);
  console.log({ body });
  res.setHeader('content-type', 'application/json');
  res.end("check");
}

module.exports = { POST };