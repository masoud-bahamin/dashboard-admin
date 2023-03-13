import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export function SurveyChart({datalist , labels}) {
const data = {
  labels,
  datasets: [
    {
      label: 'Category',
      data: datalist,
      backgroundColor: [
        '#e6ce61a8',
        '#c0a14580',
        '#ae8c27af',
        '#e2c33c',
        "#c9b69a",
        "#ffc107"
      ],
      borderColor: [
        '#c0a145',
      ],
      borderWidth: 1,
    },
  ],
};


  return <Doughnut data={data} />;
}
