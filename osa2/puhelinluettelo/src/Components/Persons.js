import React from 'react'
import Person from "./Person"

const Persons = ({entriesToShow}) => {
    return (
        <ul>
    {entriesToShow.map( person => 
    <Person key={person.name} person={person} />)}
        </ul>
    )
}
export default Persons