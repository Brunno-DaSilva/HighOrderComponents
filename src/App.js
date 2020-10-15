import React, { Component } from "react";

import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";

import "./App.scss";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data.slice(0, 12) }));
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>

        <div>
          <h2>Posts: </h2>
          {this.state.posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
