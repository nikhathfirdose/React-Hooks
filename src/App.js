import React from "react";
class App extends React.Component {
  render() {
    const name = "Nikitasha";

    return (
      <div className="App">
        React
        {name}
        {console.log(<div />)}
      </div>
    );
  }
}

export default App;
