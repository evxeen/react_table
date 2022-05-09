import "./App.scss";
import arrow from "./assets/icons/arrow.svg";
import { useEffect, useState } from "react";
import { SearchField } from "./components/SearchField/SearchField";

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts ")
      .then((res) => res.json())
      .then((data) => setState(data));
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
        <tbody>
          {state &&
            state.map((el) => (
              <tr style={{ border: "1px solid #E3E6EC" }} key={el.id}>
                <td className="id">{el.id}</td>
                <td className="heading">{el.title}</td>
                <td className="description">{el.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
