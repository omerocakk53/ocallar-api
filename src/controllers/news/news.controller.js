const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const newsService = require('../../services/news/newsService');
const ApiError = require('../../utils/ApiError');

const getNews = catchAsync(async (req, res) => {
  const news = await newsService.getNews();
  res.send(news);
});

const createNews = catchAsync(async (req, res) => {
  const news = await newsService.createNews(req.body);
  res.status(httpStatus.CREATED).send(news);
});

const deleteNews = catchAsync(async (req, res) => {
  await newsService.deleteNewsById(req.params.newsId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getNewsById = catchAsync(async (req, res) => {
  const news = await newsService.getNewsById(req.params.newsId);
  if (!news) {
    throw new ApiError(httpStatus.NOT_FOUND, 'News not found');
  }
  res.send(news);
});

const updateNews = catchAsync(async (req, res) => {
  const news = await newsService.updateNews(req.params.newsId, req.body);
  res.send(news);
});

module.exports = {
  getNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
};
