import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";

import { SearchField } from "./components/SearchField/SearchField";
import { Table } from "./components/Table/Table";
import { Pagination } from "./components/Pagination/Pagination";
import { getDataAction } from "./store/actions/dataActions";
import { TableBody } from "./components/TableBody/TableBody";
import { sortedFields } from "./helpers/helpers";

function App() {
  const { posts, currentPage, perPage, directionSort } = useSelector(
    (state) => state
  );
  const [filteredArray, setFilteredArray] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentPosts = filteredArray.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    dispatch(getDataAction());
    navigate(`/${currentPage}`, { replace: true });
  }, []);

  useEffect(() => {
    setFilteredArray([...posts]);
  }, [posts]);

  const sorting = (field) => {
    setFilteredArray((prev) => prev.sort(sortedFields(directionSort, field)));
    dispatch({ type: "DIRECTION_SORT" });
    dispatch({ type: "SORTED_BY", payload: field.toLowerCase() });
  };

  const searchFiltered = (value) => {
    const newArray = posts.filter((item) => item.title.includes(value));
    setFilteredArray((prev) => [...newArray]);
  };

  return (
    <div className="wrapper">
      <SearchField searchFiltered={searchFiltered} />
      <Routes>
        <Route path="/" element={<Table sorting={sorting} />}>
          <Route path={`/:page`} element={<TableBody posts={currentPosts} />} />
        </Route>
      </Routes>
      <Pagination perPage={perPage} totalPosts={filteredArray.length} />
    </div>
  );
}

export default App;
