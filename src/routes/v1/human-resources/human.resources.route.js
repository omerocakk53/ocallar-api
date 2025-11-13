const express = require('express');
const humanResourcesController = require('../../../controllers/human-resources/human.resources.controller');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const humanResourcesValidation = require('../../../validations/human-resources/human.resources.validation');

const router = express.Router();

router
  .route('/')
  .get(validate(humanResourcesValidation.getHumanResource), humanResourcesController.getHumanResources)
  .post(
    validate(humanResourcesValidation.createHumanResource),
    auth('manageHumanResources'),
    humanResourcesController.createHumanResource
  );

router
  .route('/:humanResourceId')
  .delete(
    validate(humanResourcesValidation.deleteHumanResource),
    auth('manageHumanResources'),
    humanResourcesController.deleteHumanResourceById
  );

module.exports = router;
