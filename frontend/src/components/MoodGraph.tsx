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
import { LineProp } from "../types/Graph.ts";

const MoodGraph: FunctionComponent<LineProp> = ({ data }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="w-full md:w-1/2 p-4 ml-10 mr-10">
      <Line options={data.options} data={data.data}></Line>
    </div>
  );
};
export default MoodGraph;
