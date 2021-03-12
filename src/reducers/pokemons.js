import {
    DISPLAY_POKEMON,
  } from '../actions/pokemons';
  
  const initialState = {
    list: []
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_POKEMON:
        return {
          ...state,
          list: action.payload
        }
      default:
        return state
    }
  }