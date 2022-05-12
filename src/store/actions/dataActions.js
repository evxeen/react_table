import { GET_DATA, SET_DATA } from "../types";

export const setDataAction = (payload) => ({
  type: SET_DATA,
  payload: payload,
});

export const getDataAction = () => ({
  type: GET_DATA,
});
