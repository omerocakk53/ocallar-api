const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createSocial = {
  body: Joi.object().keys({
    socialName: Joi.string().required(),
    socialLink: Joi.string().required(),
    socialIcon: Joi.string().required(),
  }),
};

const getSocial = {
  query: Joi.object().keys({
    socialName: Joi.string(),
    socialLink: Joi.string(),
    socialIcon: Joi.string(),
  }),
};

const updateSocial = {
  params: Joi.object().keys({
    socialId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      socialName: Joi.string(),
      socialLink: Joi.string(),
      socialIcon: Joi.string(),
    })
    .min(1),
};

const deleteSocial = {
  params: Joi.object().keys({
    socialId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  createSocial,
  getSocial,
  updateSocial,
  deleteSocial,
};
