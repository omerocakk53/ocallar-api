const Social = require('../../models/web-management/social.model');

const getSocial = async () => {
  const socialList = await Social.find().sort({ createdAt: -1 });
  return socialList;
};

const createSocial = async (body) => {
  const social = new Social(body);
  return social.save();
};

const updateSocial = async (id, body) => {
  return Social.findByIdAndUpdate(id, body, { new: true });
};

const deleteSocialById = async (id) => {
  return Social.findByIdAndRemove(id);
};

module.exports = {
  getSocial,
  createSocial,
  updateSocial,
  deleteSocialById,
};
