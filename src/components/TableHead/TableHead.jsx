import React from "react";
import s from "./TableHead.module.scss";
import arrow from "../../assets/icons/arrow.svg";
import { useDispatch, useSelector } from "react-redux";

export const TableHead = ({ sorting }) => {
  const { sortedBy, directionSort } = useSelector((state) => state);
  const dispatch = useDispatch();
  const headings = [
    { name: "ID", className: "id", sorted: "ID" },
    { name: "Заголовок", className: "title", sorted: "TITLE" },
    { name: "Описание", className: "body", sorted: "BODY" },
  ];

  const sortHandler = (sorted) => {
    sorting(sorted);
  };
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {headings.map((heading) => (
            <th className={s[heading.className]} key={heading.name}>
              <span
                className={sortedBy === heading.className ? s.sorted : ""}
                onClick={() => sortHandler(heading.sorted)}
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
