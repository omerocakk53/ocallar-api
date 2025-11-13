const HumanResource = require('../../models/human-resources/human.resources.model');

const getHumanResources = async () => {
  const humanResources = await HumanResource.find().sort({ createdAt: -1 });
  return humanResources;
};

const createHumanResource = async (body) => {
  const humanResource = await HumanResource.create(body);
  return humanResource;
};

const deleteHumanResourceById = async (id) => {
  return HumanResource.findByIdAndDelete(id);
};

module.exports = {
  getHumanResources,
  createHumanResource,
  deleteHumanResourceById,
};
