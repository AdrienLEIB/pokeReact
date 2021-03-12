import {combineReducers} from 'redux'

import pokemons from './pokemons'
import favorites from './favorites'

export default combineReducers({
    pokemons,
    favorites
})
