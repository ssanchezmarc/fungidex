import React, { Component, PropTypes } from "react";
import { MushroomsList } from "./MushroomsList";
import { FilterMushrooms } from "./FilterMushrooms";

export class MainSection extends Component {
  // static propTypes = {
  //   data: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired
  // };

  render() {
    // const { data : { mushrooms, caughtMushroom, searchTerm }, actions } = this.props;

    return (
      <section className="main">
        <h1>Fungidex in Redux</h1>
        <FilterMushrooms
        // searchTerm={searchTerm}
        // actions={actions}
        />
        <MushroomsList
        // pokemon={pokemon}
        // caughtPokemon={caughtPokemon}
        // actions={actions}
        />
      </section>
    );
  }
}
