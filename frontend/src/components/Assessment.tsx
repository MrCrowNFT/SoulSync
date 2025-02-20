import { FunctionComponent } from "react";
import { AssessmentProp } from "../types/Assessment";

const Assessment: FunctionComponent<AssessmentProp> = ({ assessment }) => {
  const formattedTimestamp = new Date(assessment.timestamp).toLocaleString();

  return (
    <div className="w-full md:w-1/2  bg-white rounded-lg ml-10 mr-10">
      <h2 className="text-2xl font-mono font-semibold mb-2">AI Assessment</h2>
      <p className="text-gray-700 font-mono mb-4">{assessment.assessment}</p>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 font-mono text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          New Assessment
        </button>
        <p className="italic text-sm text-gray-500">{formattedTimestamp}</p>
      </div>
    </div>
  );
};

export default Assessment;
