import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function Axios() {
  const [weather, setWeather] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        setWeather([...data.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  const weatherButton = (e) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users.data${input}`)
      .then((data) => {
        setWeather([...data]);
      });
  };

  return (
    <div className="container mt-3 table-hover">
      {weather && (
        <>
          <div className="row">
            <div className="col-md-6 offset-3 text-center mb-5">
              <input onChange={weatherInput} type="text" />
              <button onClick={weatherButton} className="btn-primary">
                Search
              </button>
            </div>
          </div>
          <table className="table table-bordered text-center">
            <thead className="table-danger">
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
            </thead>
            {weather.map((data) => (
              <tbody key={data.id}>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      )}
    </div>
  );
}

export default Axios;
