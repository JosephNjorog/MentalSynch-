const mongoSanitize = require('mongo-sanitize');

const dataSanitization = (req, res, next) => {
  req.body = mongoSanitize(req.body);
  next();
};

module.exports = dataSanitization;
