import React from "react";

import user from "./data-base/user.json";
import statisticalData from "./data-base/statistical-data.json";
import friends from "./data-base/friends.json";
import transactions from "./data-base/transactions.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const colors = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
        colors={colors}
      />
      ;
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
