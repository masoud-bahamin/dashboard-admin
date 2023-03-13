import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export function BarChart({chartTitle}) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: chartTitle,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

     const data = {
        labels,
        datasets: [
            {
                label: 'Cakes',
                data: [500, 150, 300, 900, 600, 300, 1000],
                backgroundColor: '#c0a145',
            },
            {
                label: 'Desserts',
                data: [150, 300, 500, 300, 150, 900, 500],
                backgroundColor: '#c9b69a',
            },
        ],
    };


    return <Bar options={options} data={data} />;
}
