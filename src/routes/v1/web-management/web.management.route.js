const express = require('express');
const socialManagementRoute = require('./social/social.management.route');
const contactManagementRoute = require('./contact/contact.management.route');

const router = express.Router();

router.use('/social', socialManagementRoute);
router.use('/contact', contactManagementRoute);

module.exports = router;
