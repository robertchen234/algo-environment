import React, { Component } from "react";
import "./App.css";

// PROBLEM
// Input: "abcde"
// Output: "edcba"
// Explanation: reverse the string.

const solution = input => {
  const revString = [];

  for (let x of input) {
    revString.unshift(x);
  }

  return revString;
};

const input1 = "abcde";
const input2 = "apple";
const input3 = "orange";

// yarn start or npm start

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="input">
          <h1>Input1: {input1}</h1>
          <h1>Input2: {input2}</h1>
          <h1>Input3: {input3}</h1>
        </div>
        <div className="output">
          <h1>Output1: {solution(input1)}</h1>
          <h1>Output2: {solution(input2)}</h1>
          <h1>Output3: {solution(input3)}</h1>
        </div>
      </div>
    );
  }
}

export default App;
