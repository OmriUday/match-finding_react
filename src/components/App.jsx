import React from "react";
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Main addValue={+1} />
      </div>
    )
  }
}

export default App;