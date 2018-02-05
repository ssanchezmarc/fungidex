import React, { Component } from "react";

export class FilterMushrooms extends Component {
  render() {
    const { searchTerm, actions } = this.props;

    return (
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Search Fungidex"
            value={searchTerm}
            onChange={e => actions.searchTermChanged(e.target.value)}
          />
        </div>
      </form>
    );
  }
}
