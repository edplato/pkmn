import {
  REQUEST_POKEMON_LIST,
  ADD_POKEMON_DETAILS,
  CHANGE_FETCHING_STATUS
} from '../actions/actions.js';

let defaultState = {
  pokemon: [],
  next: null,
  fetching: false
}

// reducers handles get pokemon list, update individual pokemon objects, change fetching status
const mainReducer = (state = defaultState, action) => {
  if (action.type === REQUEST_POKEMON_LIST) {
    let pokemonList = state.pokemon.concat(action.pokemon);
    return {
      ...state,
      pokemon: pokemonList,
      next: action.next
    }
  } else if (action.type === ADD_POKEMON_DETAILS) {
    let pokemonList = state.pokemon;
    return {
      ...state,
      pokemon: updateObjectInArray(pokemonList, action)
    }
  } else if (action.type === CHANGE_FETCHING_STATUS) {
    return {
      ...state,
      fetching: action.fetching
    }
  } else {
    return {
      ...state
    }
  }
}

// helper function to update state array
function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.id - 1) {
      return item;
    }
    return {
      ...item,
      ...action.pokemonDetails
    };
  });
}

export default mainReducer;