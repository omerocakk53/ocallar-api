const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const checkContent =
  (bodyKeys = ['message'], checkFile = true) =>
  (req, res, next) => {
    const hasFile = req.file;
    const hasBody = bodyKeys.every((key) => req.body[key]);

    if (!hasBody) {
      return next(new ApiError(httpStatus.BAD_REQUEST, `Body keys [${bodyKeys.join(', ')}] are required`));
    }

    if (checkFile && !hasFile) {
      return next(new ApiError(httpStatus.BAD_REQUEST, 'File is required'));
    }

    next();
  };

module.exports = checkContent;
