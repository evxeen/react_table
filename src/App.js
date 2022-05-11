import { useEffect } from "react";
import { SearchField } from "./components/SearchField/SearchField";

import "./App.scss";
import arrow from "./assets/icons/arrow.svg";

import { TablePage } from "./components/TablePage/TablePage";
import { Pagination } from "./components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "./store/actions/dataActions";

function App() {
  const { posts, currentPage, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentPosts = posts.slice(firstPageIndex, lastPageIndex);

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
        <TablePage data={currentPosts} />
      </table>
      <Pagination perPage={perPage} totalPosts={posts.length} />
    </div>
  );
}

export default App;
