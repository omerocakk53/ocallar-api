const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const contactSettingsService = require('../../services/web-management/contact.management.service');
const ApiError = require('../../utils/ApiError');

const getContact = catchAsync(async (req, res) => {
  const contact = await contactSettingsService.getContacts(req.params.contactId);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  res.send(contact);
});

const createContact = catchAsync(async (req, res) => {
  const contact = await contactSettingsService.createContact(req.body);
  res.status(httpStatus.CREATED).send(contact);
});

const updateContact = catchAsync(async (req, res) => {
  const contact = await contactSettingsService.updateContact(req.params.contactId, req.body);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  res.send(contact);
});

const deleteContact = catchAsync(async (req, res) => {
  const contact = await contactSettingsService.deleteContact(req.params.contactId);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getContact,
  updateContact,
  deleteContact,
  createContact,
};
