import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countires, setCountries] = useState([]);

    useEffect( () => {

    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))

  }, [])
    return (
        <div>
            <h1>All Countries in the world!!!</h1>
            <hr />
            <h4>Available Countries: {countires.length}</h4>
            <div className='country-container'>
                {
                    countires.map(country => <Country country={country} key={Math.random()}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;