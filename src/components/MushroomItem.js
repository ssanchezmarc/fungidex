import React, { Component } from 'react';

export class MushroomItem extends Component {
  render() {
    const {mushroom, caught} = this.props;
    // const {pokemon, caught, actions} = this.props;

    return (
      <tr className={caught ? 'success' : ''}>
        <td>{mushroom.name}</td>
        <td>{mushroom.family}</td>
        <td>{mushroom.edibility}</td>
        <td>
          {caught ?
            'Caught!' :
            <button
              type="button"
              // onClick={() => actions.markCaught(mushroom.name)}
              className="btn btn-primary">
              Catch
            </button>
          }
        </td>
      </tr>
    );
  }
}
