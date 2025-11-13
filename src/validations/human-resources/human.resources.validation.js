const Joi = require('joi');
const { objectId } = require('../custom.validation');

const getHumanResource = {
  query: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    phoneNumber: Joi.string(),
    description: Joi.number().integer(),
  }),
};

const deleteHumanResource = {
  params: Joi.object().keys({
    humanResourceId: Joi.string().required().custom(objectId),
  }),
};

const createHumanResource = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

module.exports = {
  getHumanResource,
  deleteHumanResource,
  createHumanResource,
};
