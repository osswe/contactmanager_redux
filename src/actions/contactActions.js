import * as actions from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({ type: actions.GET_CONTACTS, payload: res.data });
}
export const addContact = (contact) => {
  return { type: actions.ADD_CONTACT, payload: contact };
}
export const deleteContact = (id) => {
  return { type: actions.DELETE_CONTACT, payload: id };
}