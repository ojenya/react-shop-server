

const allowedCors = [
  'https://vk.com',
  'localhost:3000',
  'http://localhost:10888'
];
// module.exports.allowOrigin = (req, res, next) => {
//   const { origin } = req.headers;
//   if (allowedCors.includes(origin)) {
//       res.header('Access-Control-Allow-Origin', origin);
//       res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//       res.header('Access-Control-Allow-Methods', 'GET, PUT, HEAD, PATCH, POST, DELETE')
//   }
//   next();
// }

module.exports.allowOrigin = (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, HEAD, PATCH, POST, DELETE')

  next();
}