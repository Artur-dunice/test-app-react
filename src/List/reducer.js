import { GET_LIST_ITEMS_SUCCESS } from './constants';
import { TOGGLE_INPUT } from '../Form/constants';

const initialState = {
  items: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_ITEMS_SUCCESS: {
      return {
        ...state,
        items: Object
          .keys(action.data)
          .map((id) => ({
            title: action.data[id].title,
            text: action.data[id].extract,
            id: action.data[id].pageid,
          })),
      }
    }
    case TOGGLE_INPUT: {
      return {
        ...state,
        items: [],
      };
    }
    default: return state;
  }
};

export default list;
