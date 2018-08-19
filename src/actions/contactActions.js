import * as actions from './types';

export const getContacts = () => {
  return { type: actions.GET_CONTACTS };
}
export const addContact = (contact) => {
  return { type: actions.ADD_CONTACT, payload: contact };
}
export const deleteContact = (id) => {
  return { type: actions.DELETE_CONTACT, payload: id };
}