import React from 'react';

function Countries({ countries, onCountryClick }) {
  return (
    <div>
        <ul>
      {countries.map(country => (
          <li key={country.alpha2Code}>
          <h2>{country.name}</h2>
          <button onClick={()=>onCountryClick(country)}>Learn more</button>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Countries;
