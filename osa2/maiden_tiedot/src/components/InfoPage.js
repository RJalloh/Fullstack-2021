import React from 'react'
import Weather from './Weather'

const InfoPage = ({country}) => {
    console.log("Country infossa: ", country)
    if (country === '') {
        console.log("pippeli")
        return (
            <p></p>
        )
    }
    else {
        console.log(country)
        console.log("peppu")
        return (
            <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>languages</h2>
            <ul>{ country.languages.map( language => <li key={language.name} >{language.name}</li>)}</ul>
            <img width="200" height="200" src={country.flag} alt="iunno"/>
            <Weather capital={country.capital} />
            </div>
        )
    }
}

export default InfoPage