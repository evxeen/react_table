import React from "react";
import s from "./TableBody.module.scss";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";

export const TableBody = ({ posts }) => {
  const { isLoading } = useSelector((state) => state);

  if (!isLoading) {
    return <Loader />;
  }
  return (
    <div className={s.tableBodyWrap}>
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
