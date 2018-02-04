import React, { Component, PropTypes } from 'react';

import { MushroomItem } from './MushroomItem';

import { Mushrooms } from '../data/mushrooms';

export class MushroomsList extends Component {
  render() {
    // const {pokemon, caughtPokemon, actions} = this.props;

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Family</th>
            <th>Edibility</th>
            <th>Caught?</th>
          </tr>
        </thead>
        <tbody>
          {Mushrooms.map(mushroomObject =>
            <MushroomItem
              key={mushroomObject.name}
              mushroom={mushroomObject}
              caught={false}
              // caught={caughtPokemon.indexOf(mushroomObject.name) > -1}
              // actions={actions}
            />
          )}
        </tbody>
      </table>
    );
  }
}
