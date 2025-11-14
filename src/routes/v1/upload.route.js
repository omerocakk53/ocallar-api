const express = require('express');
const auth = require('../../middlewares/auth');
const upload = require('../../utils/upload');
const checkContent = require('../../middlewares/checkContent');
const uploadController = require('../../controllers/upload.controller');

const router = express.Router();

router.post('/', auth(), upload.single('file'), checkContent([], true), uploadController.uploadFile);

module.exports = router;
