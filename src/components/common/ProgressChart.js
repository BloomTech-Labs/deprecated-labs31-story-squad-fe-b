import React from 'react';
import Plot from 'plotly.js';
import { data } from '../../utils/dataTest';

const ProgressChart = () => {
  return (
    <div>
      <h2> Squad Score Over Time:</h2>
      <div>
        <Plot data={data.data} layout={data.layout} />
      </div>
    </div>
  );
};

export default ProgressChart;
