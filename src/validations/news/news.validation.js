const Joi = require('joi');
const { objectId } = require('../custom.validation');

const createNews = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
    image: Joi.string(),
  }),
};

const getNews = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getNewsById = {
  params: Joi.object().keys({
    newsId: Joi.string().required().custom(objectId),
  }),
};

const updateNews = {
  params: Joi.object().keys({
    newsId: Joi.string().required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      content: Joi.string(),
      image: Joi.string(),
    })
    .min(1),
};

const deleteNews = {
  params: Joi.object().keys({
    newsId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  createNews,
  getNews,
  getNewsById,
  updateNews,
  deleteNews,
};
