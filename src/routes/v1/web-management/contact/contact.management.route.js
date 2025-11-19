const express = require('express');
const auth = require('../../../../middlewares/auth');
const validate = require('../../../../middlewares/validate');
const contactValidation = require('../../../../validations/web-management/contact.validation');
const settingRoute = require('./contact.settings.route');
const contactManagementController = require('../../../../controllers/web-management/contact.management.controller');

const router = express.Router();

router.use('/settings', settingRoute);
router
  .route('/')
  .get(auth('manageWebManagement'), validate(contactValidation.getContact), contactManagementController.getContact)
  .post(validate(contactValidation.createContact), contactManagementController.createContact);
router
  .route('/:contactId')
  .patch(auth('manageWebManagement'), validate(contactValidation.updateContact), contactManagementController.updateContact)
  .delete(auth('manageWebManagement'), validate(contactValidation.deleteContact), contactManagementController.deleteContact);

module.exports = router;
