import { SET_CURRENT_PAGE, SET_DATA } from "../types";

const initialState = {
  posts: [],
  currentPage: 1,
  perPage: 10,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, posts: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
