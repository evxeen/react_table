import React from "react";
import s from "./SearchField.module.scss";
import { useDispatch } from "react-redux";

export const SearchField = ({ searchFiltered }) => {
  const searchInputHandler = (e) => {
    searchFiltered(e.target.value);
  };

  return (
    <input
      className={s.searchField}
      type="text"
      placeholder="Поиск"
      onChange={searchInputHandler}
    />
  );
};
