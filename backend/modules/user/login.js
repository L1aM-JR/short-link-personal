const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require("../../models/users");

const { getBody } = require('../../utils');

async function POST(req, res) {
  const body = await getBody(req);
  const users = await Users.create({ email: body.email, password: body.password })

  console.log({ body, users });
  res.end("check");
}

module.exports = { POST };