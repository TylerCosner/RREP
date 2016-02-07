import React from "react";
import Header from "../components/Header";

class App extends React.Component {
  render() {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));

    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
