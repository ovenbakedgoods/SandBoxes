import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const RenderMessage = (props) => {
  return <h1>{props.message}</h1>;
};

class App extends React.Component {
  state = {
    message: "Hello from App State!!"
  };

  render() {
    return (
      <div>
        <RenderMessage message={this.state.message} />
        <h3>uh huh</h3>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
