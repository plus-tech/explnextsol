//
// Embed a Tablea viz published on Tableau Public

import * as React from 'react';
import {VizURL} from '../../common/constant.js';

import {
  TableauEventType,
} from '@tableau/embedding-api';

function TableauVizComponent(){
  React.useEffect( () => {
    const viz = document.getElementById("tableauViz");
    viz.hideTabs = true;
    viz.hideToolbar = true;

    const onFirstInteractive = () => {
    };

    viz.addEventListener(TableauEventType.FirstInteractive, onFirstInteractive);
    viz.src = VizURL;

    return () => {
      viz.removeEventListener(TableauEventType.FirstInteractive, onFirstInteractive);
    }
  }, []);

  return (
    <tableau-viz id="tableauViz">
    </tableau-viz>
  )
}

export default TableauVizComponent;
