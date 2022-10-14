import React, { useState, useEffect } from "react";
import User from "./User";

function ListUser() {
  const [users, setUsers] = useState([]);
  const URL = "https://randomuser.me/api/?results=4";

  useEffect(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((userData) => {
        setUsers(userData.results);
      });
  }, []);

  return <div
    className="row">
    {users.map(({ ...user }, index) => (
      <div className="col"
        style={{ width: "150px" }}
        key={index}>
        <User {...user} />
      </div>
    ))}</div>;
}

export default ListUser;