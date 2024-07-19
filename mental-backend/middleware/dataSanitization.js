const mongoSanitize = require('mongo-sanitize');

const sanitize = (req, res, next) => {
    req.body = mongoSanitize(req.body);
    req.query = mongoSanitize(req.query);
    req.params = mongoSanitize(req.params);
    next();
};

module.exports = sanitize;
