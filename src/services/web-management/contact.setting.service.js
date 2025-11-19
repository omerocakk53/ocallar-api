const httpStatus = require('http-status');
const ContactSetting = require('../../models/web-management/contact.setting.model');
const ApiError = require('../../utils/ApiError');

const getContactSettings = async () => {
  const contactSettingsList = await ContactSetting.find().sort({ createdAt: -1 });
  return contactSettingsList;
};

const createContactSetting = async (body) => {
  const contactSetting = new ContactSetting(body);
  return contactSetting.save();
};

const updateContactSetting = async (id, body) => {
  const contactSetting = await ContactSetting.findByIdAndUpdate(id, body, { new: true });
  if (!contactSetting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact setting not found');
  }
  return contactSetting;
};

module.exports = {
  getContactSettings,
  updateContactSetting,
  createContactSetting,
};
