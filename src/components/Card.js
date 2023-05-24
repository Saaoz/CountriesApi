import React from 'react';

const Card = ({country}) => {

    return (
        <li className='card'>
            <img src={country.flags.svg} 
            alt={'flag' + country.translations.fra.common} 
            />
            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital} </h4>
                <p>Pop. {country.population.toLocaleString()} </p>
                {/* toLocaleString used to make in form population */}
            </div>
        </li>

    );
};

export default Card;