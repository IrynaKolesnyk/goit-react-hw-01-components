import React from "react";

import friends from "./data-base/friends.json";
import statistic from "./data-base/statistical-data.json";
import transactions from "./data-base/transactions.json";
import user from "./data-base/user.json";


function App() {
  return (
    <div className="App">
      <div className="profile">

      </div>
      <div className="statistics">

      </div>
      <div className="friends">

      </div>
      <div className="transactions">

      </div>
      <header className="App-header">
        {/* <img src="" className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
