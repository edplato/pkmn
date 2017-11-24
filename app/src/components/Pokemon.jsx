import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.handleClick = () => {
      this.setState({
        show: !this.state.show
      });
    };
  }

  render() {
    return (
      <div className="pokemon-container">
        <div>
          <img onClick={() => this.handleClick()} className="pokemon-image" src={this.props.pokemon.sprites ? this.props.pokemon.sprites.front_default : 'https://vignette.wikia.nocookie.net/mcleodgaming/images/3/3f/PBall_old.png'}/>
          <h4 className="pokemon-header-name">{this.props.pokemon.name}</h4>
        </div>

        {this.state.show ?
          this.props.pokemon.id ?
            <div className="pokemon-details-box box-outline">
              <div className="pokemon-details-box-name">{this.props.pokemon.name}</div>
              <div><span className="pokemon-details-label">weight:</span> {(this.props.pokemon.weight * 0.1).toFixed(2)} kg</div>
              <div><span className="pokemon-details-label">abilities:</span> {this.props.pokemon.abilities.map((ability, i) => {
                return (
                  <span key={i}>{ability.ability.name}
                    {this.props.pokemon.abilities.length > 1 && i !== this.props.pokemon.abilities.length - 1 ? ', ' : ''}
                  </span>
                );
              })}
              </div>
            </div>
            :
            <div className="pokemon-details-box box-outline">
              <div className="loading loading-pokemon">Catching Pokemon...</div>
            </div>
          :
          <div className="pokemon-details-box">
          </div>
        }
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};
