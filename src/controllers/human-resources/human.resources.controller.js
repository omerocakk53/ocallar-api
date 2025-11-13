const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const humanResourcesService = require('../../services/human-resource/human.resource.service');

const getHumanResources = catchAsync(async (req, res) => {
  const humanresources = await humanResourcesService.getHumanResources();
  res.send(humanresources);
});

const createHumanResource = catchAsync(async (req, res) => {
  const humanresources = await humanResourcesService.createHumanResource(req.body);
  res.status(httpStatus.CREATED).send(humanresources);
});

const deleteHumanResourceById = catchAsync(async (req, res) => {
  await humanResourcesService.deleteHumanResourceById(req.params.humanResourceId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getHumanResources,
  deleteHumanResourceById,
  createHumanResource,
};
