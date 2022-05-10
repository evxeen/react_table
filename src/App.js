import { useEffect, useState } from "react";
import { SearchField } from "./components/SearchField/SearchField";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import arrow from "./assets/icons/arrow.svg";

import { TablePage } from "./components/TablePage/TablePage";
import { Pagination } from "./components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "./store/actions/dataActions";

function App() {
  const { posts } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  return (
    <div className="wrapper">
      <SearchField />
      <table className="table" border="1">
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
        <Routes>
          <Route path="/" element={<TablePage data={posts} />} />
        </Routes>
      </table>
      <Pagination />
    </div>
  );
}

export default App;
