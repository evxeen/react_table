import React from "react";
import s from "./SearchField.module.scss";

export const SearchField = () => {
  return <input className={s.searchField} type="text" placeholder="Поиск" />;
};
