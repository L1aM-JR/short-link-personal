function getBody(req) {
  return new Promise((resolve, reject) => {
    let res = '';

    req.on('data', (chunk) => {
      res += chunk;
    });

    req.on('end', () => {
      resolve(JSON.parse(res));
    })
  });
}

module.exports = {
  getBody,
}