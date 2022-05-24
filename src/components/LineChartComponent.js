
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';




function LineChartComponent() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,

        plugins: {
            title: {
                display: true,
                text: 'Active Users By Hours',
            },
            legend: {
                display: false
            }
        },
    };

    const labels = ["09.00", "10.00", "11.00", "12.00", "13.00", "14.00", "15.00"];

    const data = {
        labels,
        datasets: [
            {
                data: [1, 2, 3, 4, 5, 2, 3],
                borderColor: 'rgb(29, 117, 189)',
                backgroundColor: 'rgb(29, 117, 189)',
            },

        ],
    };







    return (
        <div style={{ width: "20vw", height:"150px !important"}} className='mx-5'>
            <Line options={options} data={data} />
        </div>

    );


}


export default LineChartComponent