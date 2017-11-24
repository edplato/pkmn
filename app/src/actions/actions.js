import axios from 'axios';

// ACTION TYPES

export const REQUEST_POKEMON_LIST = 'REQUEST_POKEMON_LIST';
export const ADD_POKEMON_DETAILS = 'ADD_POKEMON_DETAILS';
export const CHANGE_FETCHING_STATUS = 'CHANGE_FETCHING_STATUS';

// ACTION CREATORS

export function addPokemonDetails(pokemonDetails) {
  return {
    type: 'ADD_POKEMON_DETAILS',
    pokemonDetails: pokemonDetails,
    id: pokemonDetails.id
  };
}

export function requestPokemonList(input) {
  return {
    type: 'REQUEST_POKEMON_LIST',
    pokemon: input.results,
    next: input.next
  };
}

export function changeFetchingStatus(fetching) {
  return {
    type: 'CHANGE_FETCHING_STATUS',
    fetching: fetching
  };
}

// API FUNCTIONS

function getPokemonData(url) {
  return axios.get(url);
}

function getPokemonDetails(url, dispatch) {
  return axios.get(url)
    .then((response) => {
      dispatch(addPokemonDetails(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

// CLIENT SIDE POKEMON REQUEST ENTRY POINT

export function getPokemonList(next) {
  let listUrl;
  if (!next) {
    listUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
  } else {
    listUrl = next;
  }
  return (dispatch) => {
    dispatch(changeFetchingStatus(true));
    return axios.get(listUrl)
      .then((response) => {
        dispatch(requestPokemonList(response.data));
        return response;
      })
      .then((response) => {
        var results = response.data.results.map((pokemon) => {
          return getPokemonDetails(pokemon.url, dispatch);
        });
        return Promise.all(results).then((data) => {
          return data;
        })
          .then(() => {
            dispatch(changeFetchingStatus(false));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}