import React from "react";

function CountryData({country, onBackClick}){
    return (
        <div>
            <h2>{country.name}</h2>
            <ul>
                <li>Native Name: {country.nativeName}</li>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Subregion: {country.subregion}</li>
                <li>Language: {country.languages.map(language=>language.name).join(', ')}</li>
                <li>Currencies: {country.currencies.map(currency=>currency.name).join(', ')}</li>
                <li>Population: {country.population}</li>
                <li>Numeric Code: {country.numericCode}</li>
                <li>Timezones: {country.timezones.join(", ")}</li>
                <li>Area: {country.area}km²</li>
            </ul>
            <button onClick={onBackClick}>Back</button>
        </div>
    )
}

export default CountryData;