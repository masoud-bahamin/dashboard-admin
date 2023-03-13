import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: 'Sells in year',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: '#c0a14580',
      borderColor: '#c0a145',
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  return <Radar data={data} />;
}
