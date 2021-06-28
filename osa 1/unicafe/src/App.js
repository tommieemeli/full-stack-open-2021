import React, { useState } from "react";
import "./App.css";

const Stats = ({ totalVotes, avg, positive, good, bad, neutral }) => {
  if (totalVotes === 0) {
    return(
      <div>
        <p>No feedback to give</p>
      </div>
    )
  } else {
  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatsLine text="Good" votes={good}/>
          <StatsLine text="Neutral" votes={neutral}/>
          <StatsLine text="Bad" votes={bad}/>
          <StatsLine text="All votes" votes={totalVotes}/>
          <StatsLine text="Average votes" votes={avg}/>
          <StatsLine text="Positive votes" votes={positive}/>
        </tbody>
      </table>
    </div>
  )
  }
}

const Button = ({ text, clickmissio }) => <button onClick={clickmissio}>{text}</button>
const StatsLine = ({ text, votes }) => <tr><td>{text}: {votes}</td></tr>

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalVotes = good + neutral + bad;
  const avg = (good * 1 + neutral * 0 + bad * -1 / totalVotes);
  const positive = (good/totalVotes) * 100 + "%";

  const handleGood = () => setGood(good + 1);

  const handleNeutral = () => setNeutral(neutral + 1);

  const handleBad = () => setBad(bad + 1);

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button clickmissio={handleGood} text="Good"/>
      <Button clickmissio={handleNeutral} text="Neutral"/>
      <Button clickmissio={handleBad} text="Bad"/>
      <Stats totalVotes={totalVotes} avg={avg} positive={positive} good={good} bad={bad} neutral={neutral}/>
    </div>
  );
}

export default App;
