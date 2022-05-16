import {
  SET_CURRENT_PAGE,
  SET_DATA,
  SET_DIRECTION_SORT,
  SET_LOADING,
  SORTED_BY,
} from "../types";

const initialState = {
  posts: [],
  currentPage: 1,
  perPage: 10,
  sortedBy: "id",
  directionSort: true,
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, posts: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SORTED_BY:
      return { ...state, sortedBy: action.payload };
    case SET_DIRECTION_SORT:
      return { ...state, directionSort: !state.directionSort };
    case SET_LOADING:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
