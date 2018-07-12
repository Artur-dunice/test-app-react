import axios from 'axios';

import { GET_LIST_ITEMS, GET_LIST_ITEMS_SUCCESS } from './constants';
import { wikiUrl } from "../utils";

export const getListItemsStart = () => ({
  type: GET_LIST_ITEMS,
});

export const getListItemsSuccess = (data) => ({
  type: GET_LIST_ITEMS_SUCCESS,
  data,
});

export const getListItems = (text) =>
  (dispatch) => {
    dispatch(getListItemsStart());
    axios.get(wikiUrl(text))
      .then(({data}) => {
        dispatch(getListItemsSuccess(data.query.pages));
      })
      .catch((e) => {
        console.log(e);
      });
  };
