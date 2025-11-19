const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const contactSettingsService = require('../../services/web-management/contact.setting.service');
const ApiError = require('../../utils/ApiError');

const getContactSettings = catchAsync(async (req, res) => {
  const contactSettings = await contactSettingsService.getContactSettings();
  res.send(contactSettings);
});

const createContactSettings = catchAsync(async (req, res) => {
  const contactSettings = await contactSettingsService.createContactSetting(req.body);
  res.status(httpStatus.CREATED).send(contactSettings);
});

const updateContactSettings = catchAsync(async (req, res) => {
  const contactSettings = await contactSettingsService.updateContactSetting(req.params.contactSettingsId, req.body);
  if (!contactSettings) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact settings not found');
  }
  res.send(contactSettings);
});

module.exports = {
  getContactSettings,
  updateContactSettings,
  createContactSettings,
};
