import React, {useState} from 'react'
import InfoPage from './InfoPage'

const CountryList = ({countries}) => {

    const [newInfo, setNewInfo] = useState([''])

    console.log("Countries listassa: ", countries.length)

    if (countries.length === 0) {
        return (
            <p></p>
        )
    } else if (countries.length > 10) {
        return (
        <p>Too many matches, specify another filter</p>
        )
    } else {
        return (
        <div>
        <ul> {countries.map( country => 
        <li key={country.numericCode}>{country.name}
        <button onClick={() => setNewInfo([country])} >show</button>
         </li> ) } </ul>      
        <InfoPage country={(countries.length === 1) ? countries[0] : newInfo[0]}  />
        </div>
        )
    }
}

export default CountryList