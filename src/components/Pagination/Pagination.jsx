import React from "react";
import s from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/actions/pagesActions";
import { NavLink } from "react-router-dom";

export const Pagination = ({ perPage, totalPosts }) => {
  const { currentPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.paginationBlock}>
      <NavLink
        className={
          currentPage === pageNumbers.length - pageNumbers.length + 1
            ? `${s.button} ${s.disabled}`
            : s.button
        }
        to={`${currentPage - 1}`}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        Назад
      </NavLink>

      <div className={s.numbersPages}>
        {pageNumbers.map((page, index) => (
          <NavLink
            to={`/${page}`}
            key={index}
            className={currentPage === page ? s.active : ""}
            onClick={() => dispatch(setCurrentPage(page))}
          >
            {page}
          </NavLink>
        ))}
      </div>
      <NavLink
        className={
          currentPage === pageNumbers.length
            ? `${s.button} ${s.disabled}`
            : s.button
        }
        to={`${currentPage + 1}`}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        Далее
      </NavLink>
    </div>
  );
};
