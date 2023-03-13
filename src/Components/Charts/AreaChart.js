import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    // plugins: {
    //     legend: {
    //         position: 'top' ,
    //     },
    //     title: {
    //         display: true,
    //         text: '',
    //     },
    // },
};
export default function AreaChart({vData , hData}) {
    const labels = hData || ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: '',
                data: vData || [6, 11, 13, 9, 7, 4, 9],
                borderColor: '#ae8c27',
                backgroundColor: 'rgba(255, 255, 255, 0)',
            },
        ],
    };

    return <Line options={options} data={data} />;
}
