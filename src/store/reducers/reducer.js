import { SET_CURRENT_PAGE, SET_DATA } from "../types";

const initialState = {
  posts: [],
  currentPage: 1,
  perPage: 10,
  sortedBy: "id",
  directionSort: true,
};

const sortedFields = (state, field) => {
  if (state.directionSort) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  } else {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }
};

const filteredArray = (state, action) =>
  state.posts.filter((item) => item.title.includes(action));

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, posts: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case "SORT_BY_NUMBER":
      return {
        ...state,
        posts: state.posts.sort(sortedFields(state, "id")),
        sortedBy: "id",
        directionSort: !state.directionSort,
      };
    case "SORT_BY_TITLE":
      return {
        ...state,
        posts: state.posts.sort(sortedFields(state, "title")),
        sortedBy: "title",
        directionSort: !state.directionSort,
      };
    case "SORT_BY_DESCRIPTION":
      return {
        ...state,
        posts: state.posts.sort(sortedFields(state, "body")),
        sortedBy: "description",
        directionSort: !state.directionSort,
      };

    default:
      return state;
  }
};
