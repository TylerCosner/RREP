import React from "react";
import Header from "../components/Header";
import {connect} from "react-redux";
import {userLogin} from "../actions/user";
 
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(userLogin());
  }

  render() {
    fetch("/api/todos");

    console.log(this.props);
    return (
      <div>
        <Header user={this.props.user} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(state => ({user: state.user}))(App);
