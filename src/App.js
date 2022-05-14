import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";

import { SearchField } from "./components/SearchField/SearchField";
import { Table } from "./components/Table/Table";
import { Pagination } from "./components/Pagination/Pagination";
import { getDataAction } from "./store/actions/dataActions";
import { TableBody } from "./components/TableBody/TableBody";

function App() {
  const { posts, currentPage, perPage } = useSelector((state) => state);
  const [filteredArray, setFilteredArray] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDataAction());
    navigate(`/${currentPage}`, { replace: true });
  }, []);

  useEffect(() => {
    setFilteredArray(posts);
  }, [posts]);

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentPosts = filteredArray.slice(firstPageIndex, lastPageIndex);

  const searchFiltered = (value) => {
    const arrayData = [...posts];
    const newArray = arrayData.filter((item) => item.title.includes(value));
    setFilteredArray((prev) => [...newArray]);
  };

  return (
    <div className="wrapper">
      <SearchField searchFiltered={searchFiltered} />
      <Routes>
        <Route path="/" element={<Table />}>
          <Route path={`/:page`} element={<TableBody posts={currentPosts} />} />
        </Route>
      </Routes>
      <Pagination perPage={perPage} totalPosts={posts.length} />
    </div>
  );
}

export default App;
