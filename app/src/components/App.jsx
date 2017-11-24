import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../actions/actions';

import PokeTable from './PokeTable.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPokemonList();
  }

  render() {
    window.onscroll = () => {
      if (this.props.fetching === false && (window.innerHeight + window.scrollY + 500) >= document.body.offsetHeight) {
        this.props.getPokemonList(this.props.next);
      }
    };
    return (
      <div>
        <h1 className="site-heading"><span><img className="site-heading-pokeball" src='https://vignette.wikia.nocookie.net/mcleodgaming/images/3/3f/PBall_old.png'/></span> pkmn - The Pokedex for Pokemon</h1>
        <hr />
        <PokeTable pokemonList={this.props.pokemon} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(App);

App.propTypes = {
  pokemon: PropTypes.array.isRequired
};
