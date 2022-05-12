import React from "react";
import s from "./TableHead.module.scss";
import arrow from "../../assets/icons/arrow.svg";

export const TableHead = () => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.id}>
            <span>ID</span>
            <img src={arrow} alt="" />
          </th>
          <th className={s.title}>
            <span>Заголовок</span>
            <img src={arrow} alt="" />
          </th>
          <th className={s.description}>
            <span>Описание</span>
            <img src={arrow} alt="" />
          </th>
        </tr>
      </thead>
    </table>
  );
};
