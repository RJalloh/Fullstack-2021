import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'


const App =() => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')


  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log(response)
      setCountries(response.data)
    })
  }, [])

  const filtered = countries.filter( country => country.name.toLowerCase().includes(newFilter.toLowerCase()) )

  return (
    <div>
    <div >find countries <input value ={newFilter} onChange={ event => setNewFilter(event.target.value)} /></div>
    <CountryList countries={filtered} />
    </div>
  )
}

export default App;
