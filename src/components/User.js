import React from "react";

const User = props => {
  console.log(props);
  return (
    <div className="userDiv">
      <img
        className="user-img"
        src={props.users.avatar_url}
        alt="img of user"
      />

      <h2>{props.users.login}</h2>
      <div>
        <input
          type="text"
          value={props.userText}
          onChange={props.handleChanges}
        />
        <button onClick={props.fetchUser}>Search For User</button>
      </div>
      <h3>{props.users.bio}</h3>
      <h3>Followers: {props.users.followers}</h3>
      <h3>Following: {props.users.following}</h3>
    </div>
  );
};
export default User;
