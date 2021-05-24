import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value, unit}) => (
  <tr>
    <td>{text}</td>
    <td>{value}{unit}</td>
  </tr>
)

const Statistics = ({c1, c2, c3}) => {
  const count = c1 + c2 + c3
  if (count === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
  <table>
    <tbody>
      <StatisticLine text = "good" value= {c1} />
      <StatisticLine text = "neutral" value= {c2} />
      <StatisticLine text = "bad" value= {c3} />
      <StatisticLine text = "all" value= {count} />
      <StatisticLine text = "average" value= {(c1 - c3) / count} />
      <StatisticLine text = "positive" value= {c1 / count * 100} unit = "%" />
    </tbody>
  </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
    <h1>give feedback </h1>
    <Button handleClick={handleGoodClick} text={'good'} />
    <Button handleClick={handleNeutralClick} text={'neutral'} />
    <Button handleClick={handleBadClick} text={'bad'} />

    <h1>statistics</h1>
    <Statistics c1={good} c2={neutral} c3={bad} />
    </div>
  )
}

export default App
