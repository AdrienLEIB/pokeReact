/* eslint-disable import/no-anonymous-default-export */
import {
    SET_UNSET_FAVORITE,
  } from '../actions/favorites';
  
  const initialState = {
    pokemons: []
  }

  const set_unset_favorite = (state, payload) => {
    const checkId =  state.pokemons.filter(e => e.name === payload.name)
    if (state.pokemons.length >= 6 && checkId.length === 0){
      alert("Attention !! Votre équipe est déjà complète.");
      return state.pokemons
  }

  if (checkId.length === 0 && state.pokemons.length < 6) {
    console.log('pay', payload)
      return [...state.pokemons, 
        {'name': payload.name, 'sprites': payload.sprites, 'life': payload?.stats[0]?.base_stat, 'maxLife':payload?.stats[0]?.base_stat, "power": payload?.stats[1]?.base_stat}]
} else{
    const newFavorites = state.pokemons.filter(h => h.name !==  payload.name);
    return [...newFavorites]
        
}}

  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_UNSET_FAVORITE:
        return {
          ...state,
          pokemons: set_unset_favorite(state, action.payload)
        }
      default:
        return state
    }
  }