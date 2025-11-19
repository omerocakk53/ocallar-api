const httpStatus = require('http-status');
const Contact = require('../../models/web-management/contact.model');
const ApiError = require('../../utils/ApiError');

const getContacts = async () => {
  const contactList = await Contact.find().sort({ createdAt: -1 });
  return contactList;
};

const createContact = async (body) => {
  const contact = new Contact(body);
  return contact.save();
};

const updateContact = async (id, body) => {
  const contact = await Contact.findByIdAndUpdate(id, body, { new: true });
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  return contact;
};

const deleteContact = async (id) => {
  return Contact.findByIdAndDelete(id);
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
};
