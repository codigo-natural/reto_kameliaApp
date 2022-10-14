import React from 'react'

function User(user) {
  return (
    <div className="card" style={{ width: "150px" }}>
      <img src={user.picture.medium} alt="" />
      <div className="card-body">
        <p>{user.name.first}</p>
      </div>
    </div>
  );
}

export default User;