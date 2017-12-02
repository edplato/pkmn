import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.jsx';

export default class PokeTable extends Component {

  render() {
    return (
      <div className="grid">
        {this.props.pokemonList.length === 0 ?
          <div className="table-loading-container">
            <div className="loading loading-site">Loading Pokedex...</div>
            <img className="loading-image" src='http://www.freeiconspng.com/uploads/pokemon-pikachu-png-2.png' />
          </div>
          :
          this.props.pokemonList.map((pokemon, i) => {
            return (
              <Pokemon pokemon={pokemon} key={i} />
            );
          })}
      </div>
    );
  }
}

PokeTable.propTypes = {
  pokemonList: PropTypes.array.isRequired
};
