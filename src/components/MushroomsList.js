import React, { Component } from "react";

import { MushroomItem } from "./MushroomItem";

export class MushroomsList extends Component {
  render() {
    const { mushrooms, caughtMushrooms, actions } = this.props;
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
          {mushrooms.map(mushroomObject => (
            <MushroomItem
              key={mushroomObject.name}
              mushroom={mushroomObject}
              caught={false}
              caught={caughtMushrooms.indexOf(mushroomObject.name) > -1}
              actions={actions}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
