const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createContact = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

const getContact = {
  query: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
    message: Joi.string(),
  }),
};

const updateContact = {
  params: Joi.object().keys({
    contactId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      email: Joi.string(),
      phone: Joi.string(),
      message: Joi.string(),
    })
    .min(1),
};

const deleteContact = {
  params: Joi.object().keys({
    contactId: Joi.string().required().custom(objectId),
  }),
};

const getContactSettings = {
  query: Joi.object().keys({
    phone: Joi.string(),
    email: Joi.string(),
    address: Joi.string(),
  }),
};

const createContactSettings = {
  body: Joi.object().keys({
    phone: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
  }),
};

const updateContactSettings = {
  params: Joi.object().keys({
    contactSettingsId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      phone: Joi.string().required(),
      email: Joi.string().required(),
      address: Joi.string().required(),
    })
    .min(1),
};

module.exports = {
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getContactSettings,
  createContactSettings,
  updateContactSettings,
};
