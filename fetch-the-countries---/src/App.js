import './App.css';
import React, { useState, useEffect } from 'react';
import Countries from './Components/Countries.js';
import CountryData from "./Components/CountryData.js"

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedCountries, setSortedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const sorted = [...countries].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setSortedCountries(sorted);
  }, [countries, sortOrder]);

  console.log(countries)

  function handleCountryClick(country){
    setSelectedCountry(country)
  }

  function handleBackClick(){
    setSelectedCountry(null);
  }

  function handleSortClick() {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);

  }

  return (
    <div>
      {selectedCountry ? null:<button onClick={handleSortClick}>{`Sort by name (${sortOrder})`}</button>}
      {selectedCountry ? (
        <CountryData country={selectedCountry} onBackClick={handleBackClick} />
      ) : (
        <Countries countries={sortedCountries} onCountryClick={handleCountryClick} />
      )}
    </div>
  );
}

export default App;



