import { SET_CURRENT_PAGE, SET_DATA } from "../types";

const initialState = {
  posts: [],
  currentPage: 1,
  perPage: 10,
  sortedBy: "id",
  directionSort: true,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, posts: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case "SORTED_BY":
      return { ...state, sortedBy: action.payload };
    case "DIRECTION_SORT":
      return { ...state, directionSort: !state.directionSort };

    default:
      return state;
  }
};
