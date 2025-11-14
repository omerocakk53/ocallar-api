const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const uploadFile = catchAsync(async (req, res) => {
  const { file } = req;

  if (!file) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No file uploaded');
  }

  const data = {};

  if (file) {
    data.file = `/${file.path}`;
    data.filename = file.originalname;
  }

  res.send(data);
});

module.exports = {
  uploadFile,
};
