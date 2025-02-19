import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FunctionComponent } from "react";
import { LineProps } from "../types/Graph.ts";

const MoodGraph: FunctionComponent<LineProps> = (data) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return <Line options={data.options} data={data.data}></Line>;
};
export default MoodGraph;
