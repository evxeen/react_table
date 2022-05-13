import React from "react";
import s from "./TableHead.module.scss";
import arrow from "../../assets/icons/arrow.svg";
import { useDispatch, useSelector } from "react-redux";

export const TableHead = () => {
  const { sortedBy, directionSort } = useSelector((state) => state);
  const dispatch = useDispatch();
  const headings = [
    { name: "ID", className: "id", sorted: "NUMBER" },
    { name: "Заголовок", className: "title", sorted: "TITLE" },
    { name: "Описание", className: "description", sorted: "DESCRIPTION" },
  ];
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th className={s[heading.className]} key={heading.name}>
              <span
                className={sortedBy === heading.className ? s.sorted : ""}
                onClick={() => dispatch({ type: `SORT_BY_${heading.sorted}` })}
              >
                {heading.name}
              </span>
              {sortedBy === heading.className && (
                <img
                  className={!directionSort ? s.arrow : ""}
                  src={arrow}
                  alt=""
                />
              )}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};
