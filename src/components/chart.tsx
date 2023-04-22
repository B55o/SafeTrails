import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart(
  chartLabels?: string[],
  chartData1?: any[],
  label1?: string,
  chartData2?: any[],
  label2?: string
): JSX.Element {
  const labels = chartLabels;

  const data = {
    labels,
    datasets: [
      {
        label: label1,
        data: chartData1,
        borderColor: "rgb(173, 216, 250)",
        backgroundColor: "rgba(173, 216, 250, 0.5)",
      },
      {
        label: label2,
        data: chartData2,
        borderColor: "rgb(115, 147, 179)",
        backgroundColor: "rgba(115, 147, 179, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
    },
  };

  return <Line options={options} data={data} />;
}
