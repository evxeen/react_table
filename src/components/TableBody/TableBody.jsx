import React from "react";

export const TableBody = ({ data }) => {
  return (
    <tbody>
      {data &&
        data.map((el) => (
          <tr style={{ border: "1px solid #E3E6EC" }} key={el.id}>
            <td className="id">{el.id}</td>
            <td className="heading">{el.title}</td>
            <td className="description">{el.body}</td>
          </tr>
        ))}
    </tbody>
  );
};
