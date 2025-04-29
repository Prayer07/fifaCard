import React, { Component } from "react";
import Messi from "./images/messi.jpg"

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "A passionate software developer.",
        imgSrc: Messi,
        profession: "Software Engineer",
      },
      shows: false,
      lastMountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        lastMountedTime: prevState.lastMountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { Person, shows, lastMountedTime } = this.state;
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <img src={Person.imgSrc} alt="Profile" width="150" />
            <p>Profession: {Person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {lastMountedTime} seconds</p>
      </div>
    );
  }
}

export default App;