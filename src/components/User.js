import React from "react";
import "github-calendar/dist/github-calendar-responsive.css";
import GitHubCalendar from "github-calendar";

const User = props => {
  console.log(props);
  GitHubCalendar(".calendar", "andrewmaddocks", { resposive: true });
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
      <div className="calendar"></div>
    </div>
  );
};
export default User;
