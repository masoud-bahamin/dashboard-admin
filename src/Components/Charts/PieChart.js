import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Sells', 'Orders', 'Costs'],
    datasets: [
        {
            label: 'State',
            data: [17, 19, 28],
            backgroundColor: [
                '#c0a145',
                '#e3b778',
                '#e6ce61a8',
            ],
            borderColor: [
                '#c0a145',
            ],
            borderWidth: 1,
        },
    ],
};

export default function PieChart() {
    return <Pie data={data}  />;
}
