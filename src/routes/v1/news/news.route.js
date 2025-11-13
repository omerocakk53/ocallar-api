const express = require('express');
const newsController = require('../../../controllers/news/news.controller');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const newsValidation = require('../../../validations/news/news.validation');

const router = express.Router();

router.get('/', validate(newsValidation.getNews), newsController.getNews);
router.post('/', validate(newsValidation.createNews), auth('manageNews'), newsController.createNews);

router
  .route('/:newsId')
  .get(validate(newsValidation.getNewsById), newsController.getNewsById)
  .patch(validate(newsValidation.updateNews), auth('manageNews'), newsController.updateNews)
  .delete(validate(newsValidation.deleteNews), auth('manageNews'), newsController.deleteNews);

module.exports = router;
