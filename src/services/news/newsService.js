const News = require('../../models/news/news.model');

const getNews = async () => {
  const newsList = await News.find().sort({ createdAt: -1 });
  return newsList;
};

const createNews = async (body) => {
  const news = new News(body);
  return news.save();
};

const getNewsById = async (id) => {
  return News.findById(id);
};

const updateNews = async (id, body) => {
  return News.findByIdAndUpdate(id, body, { new: true });
};

const deleteNewsById = async (id) => {
  return News.findByIdAndRemove(id);
};

module.exports = {
  getNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNewsById,
};
