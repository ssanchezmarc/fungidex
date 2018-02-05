import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mushroomActions from "../actions/mushroomActions";
import React, { Component } from "react";
import { MainSection } from "../components/MainSection";

class FungidexApp extends Component {
  render() {
    return (
      <MainSection
        data={this.props.mushroomStore}
        actions={this.props.actions}
      />
    );
  }
}

function mapStateToProps(state) {
  return { mushroomStore: state.mushrooms };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(mushroomActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(FungidexApp);
