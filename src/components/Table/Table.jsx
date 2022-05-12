import React from "react";
import { Outlet } from "react-router-dom";

import { TableHead } from "../TableHead/TableHead";

export const Table = () => {
  return (
    <table className="table" border="1">
      <TableHead />
      <Outlet />
    </table>
  );
};
