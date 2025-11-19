const express = require('express');
const auth = require('../../../../middlewares/auth');
const socialController = require('../../../../controllers/web-management/social.management.controller');
const validate = require('../../../../middlewares/validate');
const socialManagementValidation = require('../../../../validations/web-management/social.management.validation');

const router = express.Router();

router
  .route('/')
  .get(validate(socialManagementValidation.getSocial), socialController.getSocial)
  .post(auth('manageWebManagement'), validate(socialManagementValidation.createSocial), socialController.createSocial);

router
  .route('/:socialId')
  .patch(auth('manageWebManagement'), validate(socialManagementValidation.updateSocial), socialController.updateSocial)
  .delete(auth('manageWebManagement'), validate(socialManagementValidation.deleteSocial), socialController.deleteSocial);

module.exports = router;
