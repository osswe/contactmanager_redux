import * as actions from '../actions/types';

const initialState = {
  contacts: [],
  contact: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case actions.ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case actions.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => { return c.id !== action.payload })
      };
    case actions.GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case actions.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact)
      }
    default:
      return state;
  }
}
