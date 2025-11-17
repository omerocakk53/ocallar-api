const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const socialService = require('../../services/web-management/social.management.service');
const ApiError = require('../../utils/ApiError');

const getSocial = catchAsync(async (req, res) => {
  const social = await socialService.getSocial();
  res.send(social);
});

const createSocial = catchAsync(async (req, res) => {
  const social = await socialService.createSocial(req.body);
  res.status(httpStatus.CREATED).send(social);
});

const deleteSocial = catchAsync(async (req, res) => {
  const social = await socialService.deleteSocialById(req.params.socialId);
  if (!social) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Social not found');
  }
  res.status(httpStatus.NO_CONTENT).send();
});

const updateSocial = catchAsync(async (req, res) => {
  const social = await socialService.updateSocial(req.params.socialId, req.body);
  if (!social) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Social not found');
  }
  res.send(social);
});

module.exports = {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial,
};
