import { HANDLE_CHANGE, TOGGLE_INPUT } from './constants';

export const handleChange = (text) => ({
  type: HANDLE_CHANGE,
  text,
});

export const toggleInput = (value) => ({
  type: TOGGLE_INPUT,
  value,
});
