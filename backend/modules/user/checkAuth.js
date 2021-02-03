const { getBody } = require('../../utils');
const Users = require("../../models/users");

async function POST(req, res) {
  const body = await getBody(req);
  const users = await Users.find({});

  console.log({ body, users });
  res.end("check");
}

module.exports = { POST };