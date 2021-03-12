import React, {} from 'react';
import DisplayTeams from './displayTeams'

const Teams = ({favorites, setFavorites}) => {
    

    const removeFav = (pokemon) => {
        const newFavorites = favorites.filter(h => h.name !==  pokemon.name);
        setFavorites(newFavorites);
        
    }

    return (
        <>
            <DisplayTeams favorites={favorites} removeFav={removeFav} />
        </>
    );
};

export default Teams;