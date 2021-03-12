import {combineReducers} from 'redux'

import pokemons from './pokemons'
import favorites from './favorites'
import modal from './modal'

export default combineReducers({
    pokemons,
    favorites,
    modal
})
