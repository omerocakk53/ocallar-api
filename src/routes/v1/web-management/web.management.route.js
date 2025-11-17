const express = require('express');
const socialManagementRoute = require('./social.management.route');

const router = express.Router();

router.use('/social', socialManagementRoute);

module.exports = router;
