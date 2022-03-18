import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {name, flags, timezones, currencies} = props.country;
    return (
        <div>
            <h2>{name.common}</h2>
        </div>
    );
};

export default Country;