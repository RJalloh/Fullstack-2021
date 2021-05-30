import React, { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import personService from "./services/phonebook"
import Person from "./Components/Person"
import Notification from "./Components/Notification"
import "./index.css"

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setnewFilter ] = useState('')
  const [ message, setMessage] = useState(null)
  const [ msgType, setMsgType] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [persons] )

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.every( person => person.name !== newName)) {
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })     
      setNewName('')
      setNewNumber('')
      setMsgType("positive")
      setMessage(`Added ${personObject.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
      }
    else { // Update Person
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const previousPerson = persons.find( n => n.name === personObject.name)
      personService
      .update(previousPerson.id, personObject)
      .then(returnedPerson => {
        setPersons(persons.filter( person => person.name !== returnedPerson.name).concat(returnedPerson))
      })
      .catch(error => {
        setMsgType("error")
        setMessage(`Information of ${personObject.name} has already been removed from server`)
      })
      setNewName('')
      setNewNumber('')
      setMsgType("positive")
      setMessage(`Updated ${personObject.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 2000)
    }
  }
  } 

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
      .del(person.id)
      .then(deletedPerson => {
        setPersons(persons.filter( person => person.name !== deletedPerson.name))
      })
      setMsgType("positive")
      setMessage(`Removed ${person.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const entriesToShow = persons.filter( person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={msgType} />
      <Filter value={newFilter} onChange={ event => setnewFilter(event.target.value)} />

      <h2>add a new</h2>
      <PersonForm f1={addPerson} n1={newName} n2={newNumber} h1={handleNameChange} h2={handleNumberChange} />

      <h2>Numbers</h2>
      <ul>
        {entriesToShow.map( person => 
        <Person key={person.name} person={person} handleDelete={() => handleDelete(person) }/>)}
        </ul>
    </div>
  )
}

export default App
