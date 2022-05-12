import React from "react";
import s from "./TableBody.module.scss";

export const TableBody = ({ posts }) => {
  return (
    <div className={s.w}>
      <table className={s.table}>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr style={{ border: "1px solid red" }} key={post.id}>
                <td className={s.id}>{post.id}</td>
                <td className={s.title}>{post.title}</td>
                <td className={s.description}>{post.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
