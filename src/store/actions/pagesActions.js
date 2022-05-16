import {
  SET_CURRENT_PAGE,
  SET_DIRECTION_SORT,
  SET_LOADING,
  SORTED_BY,
} from "../types";

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setLoadingAction = () => ({
  type: SET_LOADING,
});

export const setDirectionSortAction = () => ({
  type: SET_DIRECTION_SORT,
});

export const sortedByAction = (payload) => ({
  type: SORTED_BY,
  payload: payload,
});
