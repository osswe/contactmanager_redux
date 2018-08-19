import * as actions from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({ type: actions.GET_CONTACTS, payload: res.data });
}

export const addContact = (contact) => async dispatch => {
  const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
  dispatch({ type: actions.ADD_CONTACT, payload: res.data });
}

export const deleteContact = (id) => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  } catch (exception) {
    console.log("exception:", exception);
  }
  await dispatch({ type: actions.DELETE_CONTACT, payload: id });
}