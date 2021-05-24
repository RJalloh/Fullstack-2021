import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  
  function getRandomIndex () {
    return Math.floor(Math.random() * 6)
  }
   
  const [selected, setSelected] = useState(0)

  let idx = getRandomIndex()
  while (idx === selected) {
    idx = getRandomIndex()
  }

  const [points, setPoints] = useState(new Array(6).fill(0))

  const handleAnecdoteClick = () => {
    setSelected(idx)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[idx] += 1
    setPoints(copy)
  }

  return (
    <div>
      <p>{anecdotes[idx]}</p>
      <p>has {points[idx]} votes</p>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={handleAnecdoteClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>has {Math.max(...points)} votes</p>
    </div>
  )
}

export default App
