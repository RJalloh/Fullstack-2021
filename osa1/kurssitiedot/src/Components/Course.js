import React from 'react'

const Header = ({course}) => {
    return (
        <header><h2>{course}</h2></header>
    )
  }

const Content = ({parts}) => {
    console.log(parts)
    return (
      //parts.map( part => <Part name={part.name} ex={part.exercises} />)
      parts.map( part => <Part key={part.id} name={part.name} ex={part.exercises} />)
    )
}

const Part = ({name, ex}) => {
    return (
        <p> {name} {ex}</p>
    )
}
const Course = ({course}) => {
    console.log(course)
    return (
    <div key = {course.id}>
        <Header course={course.name} />
        <Content key={course.id} parts={course.parts} />
        <Total course={course} />
    </div>
    )
}

const Total = ({course}) => {
    return (
      <b>total of {course.parts.reduce( (s, p) => s + p.exercises, 0 )} excercises</b>
    )
  }

export default Course