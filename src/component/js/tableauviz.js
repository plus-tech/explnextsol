//
// Embed a Tablea viz published on Tableau Public

import React, { Component } from 'react';

import {
  TableauEventType,
}from '@tableau/embedding-api';

const vizURL = "https://public.tableau.com/views/AQuickGuideToReferencesForTableau/Main";

class TableauVizComponent extends Component{
  componentDidMount() {
    this.initializeViz();
  }

  initializeViz() {
    const viz = document.getElementById("tableauViz");
    viz.hideTabs = true;
    viz.hideToolbar = true;

    const onFirstInteractive = () => {
    };

    viz.addEventListener(TableauEventType.FirstInteractive, onFirstInteractive);
    viz.src = vizURL;
  }

  render() {
    return (
      <tableau-viz id="tableauViz">
      </tableau-viz>
    )
  }
}

export default TableauVizComponent;
