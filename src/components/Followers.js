import React from "react";

const Followers = props => {
  console.log(props);
  return (
    <div className="followerDiv">
      <div>
        <img
          className="follower-img"
          src={props.item.avatar_url}
          alt="img of user"
        />
      </div>
      <h2>{props.item.login}</h2>
      <div>
        <a href={`https://github.com/${props.item.login}`}>
          <button
            style={{
              fontSize: "4rem",
              color: "#6e5494",
              backgroundColor: "transparent",
              border: "none"
            }}
          >
            <i className="fa fa-github"></i>
          </button>
        </a>
      </div>
    </div>
  );
};
export default Followers;
