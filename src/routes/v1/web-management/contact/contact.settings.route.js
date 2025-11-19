const express = require('express');
const auth = require('../../../../middlewares/auth');
const contactSettingsController = require('../../../../controllers/web-management/contact.setting.controller');
const validate = require('../../../../middlewares/validate');
const contactSettingsValidation = require('../../../../validations/web-management/contact.validation');

const router = express.Router();

router
  .route('/')
  .get(validate(contactSettingsValidation.getContactSettings), contactSettingsController.getContactSettings)
  .post(
    auth('manageWebManagement'),
    validate(contactSettingsValidation.createContactSettings),
    contactSettingsController.createContactSettings
  );
router.patch(
  '/:contactSettingsId',
  auth('manageWebManagement'),
  validate(contactSettingsValidation.updateContactSettings),
  contactSettingsController.updateContactSettings
);

module.exports = router;
