import { HANDLE_CHANGE, TOGGLE_INPUT } from './constants';
import { GET_LIST_ITEMS } from '../List/constants';

const initialState = {
  text: '',
  isOpen: false,
  fullHeight: true,
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE:
      return {
        ...state,
        text: action.text,
      };
    case TOGGLE_INPUT:
      return {
        ...state,
        isOpen: action.value,
        text: '',
        fullHeight: action.value ? state.fullHeight : true,
      };
    case GET_LIST_ITEMS:
      return {
        ...state,
        fullHeight: false,
      };
    default: return state;
  }
};

export default form;
