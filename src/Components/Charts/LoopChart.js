import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [
    {
      label: 'Category',
      data: [17, 10, 19],
      backgroundColor: [
        '#e6ce61a8',
        '#c0a14580',
        '#ae8c27af',
      ],
      borderColor: [
        '#c0a145',
      ],
      borderWidth: 1,
    },
  ],
};

export function LoopChart() {
  return <Doughnut data={data} />;
}
