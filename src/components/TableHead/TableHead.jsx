import React from "react";
import arrow from "../../assets/icons/arrow.svg";

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <span>ID</span>
          <img src={arrow} alt="" />
        </th>
        <th>
          <span>Заголовок</span>
          <img src={arrow} alt="" />
        </th>
        <th>
          <span>Описание</span>
          <img src={arrow} alt="" />
        </th>
      </tr>
    </thead>
  );
};
