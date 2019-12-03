import React from "react";
import axios from "axios";
import User from "./components/User";
import Followers from "./components/Followers";
import "./App.css";

class App extends React.Component {
  constructor() {
    // initializes state, and does any explicit bindings
    super();
    this.state = {
      users: {},
      followers: []
    };
    console.log("Constructor is running!");
  }
  fetchFollowers() {
    axios
      .get("https://api.github.com/users/AndrewMaddocks/followers")
      .then(response => {
        console.log(response);
        this.setState({ ...this.state, followers: response.data });
      });
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/AndrewMaddocks").then(response => {
      this.setState({ users: response.data });
    });

    this.fetchFollowers();
  }

  render() {
    console.log(this.state.users);
    console.log(this.state.followers);
    return (
      <div className="components">
        <User users={this.state.users} />

        <div className="follower-components">
          <h1 className="followtitle">My Followers</h1>
          {this.state.followers.map(item => (
            <Followers key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
