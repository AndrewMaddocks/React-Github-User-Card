import React from "react";

const User = props => {
  console.log(props);
  return (
    <div className="userDiv">
      <h1>My Github Account</h1>

      <img
        className="user-img"
        src={props.users.avatar_url}
        alt="img of user"
      />

      <h2>{props.users.login}</h2>

      <h3>{props.users.bio}</h3>
    </div>
  );
};
export default User;
