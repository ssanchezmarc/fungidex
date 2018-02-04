import React, { Component, PropTypes } from 'react';
import { MushroomsList } from './MushroomsList';
// import FilterPokemon from './FilterPokemon';

export class MainSection extends Component {
  // static propTypes = {
  //   data: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired
  // };

  render() {
    // const { data : { mushrooms, caughtMushroom, searchTerm }, actions } = this.props;

    return (
      <section className="main">
        <h1>Fingudex in Redux</h1>
        <MushroomsList
          // pokemon={pokemon}
          // caughtPokemon={caughtPokemon}
          // actions={actions}
          />

        {/* <FilterPokemon
          searchTerm={searchTerm}
          actions={actions} />

        <PokemonList
          pokemon={pokemon}
          caughtPokemon={caughtPokemon}
          actions={actions} /> */}

      </section>
    );
  }

}
