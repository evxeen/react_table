import React from "react";
import { Outlet } from "react-router-dom";

import { TableHead } from "../TableHead/TableHead";

export const Table = ({ sorting }) => {
  return (
    <>
      <TableHead sorting={sorting} />
      <Outlet />
    </>
  );
};
