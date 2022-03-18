import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, timezones, currencies} = props.country;

    const currency = Object.keys(currencies ? currencies : 'Empty Currencies')[0];
    return (
        <div className='country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Time Zone: {timezones[0]}</h3>
            <p>Currency: {currency}</p>
        </div>
    );
};

export default Country;