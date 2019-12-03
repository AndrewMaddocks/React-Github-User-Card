import React from "react";

const Followers = props => {
  console.log(props);
  return (
    <div className="followerDiv">
      <img
        className="follower-img"
        src={props.item.avatar_url}
        alt="img of user"
      />
      <h2>{props.item.login}</h2>
    </div>
  );
};
export default Followers;
