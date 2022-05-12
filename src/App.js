import { useEffect } from "react";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentPosts = posts.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    dispatch(getDataAction());
    navigate(`/${currentPage}`, { replace: true });
  }, []);

  return (
    <div className="wrapper">
      <SearchField />
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
