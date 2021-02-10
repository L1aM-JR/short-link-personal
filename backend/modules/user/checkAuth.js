const { getBody } = require('../../utils');
const Users = require("../../models/users");

async function POST(req, res) {
  const body = await getBody(req);
  res.end(JSON.stringify("check"));
}

module.exports = { POST };