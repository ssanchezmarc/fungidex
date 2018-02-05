import React, { Component } from "react";
import { MushroomsList } from "./MushroomsList";
import { FilterMushrooms } from "./FilterMushrooms";

export class MainSection extends Component {
  render() {
    const {
      data: { mushrooms, caughtMushrooms, searchTerm },
      actions
    } = this.props;

    return (
      <section className="main">
        <h1>Fungidex in Redux</h1>
        <FilterMushrooms searchTerm={searchTerm} actions={actions} />
        <MushroomsList
          mushrooms={mushrooms}
          caughtMushrooms={caughtMushrooms}
          actions={actions}
        />
      </section>
    );
  }
}
