import { FunctionComponent } from "react";
import { AssessmentProp } from "../types/Assessment";

const Assessment: FunctionComponent<AssessmentProp> = ({ assessment }) => {
  const formattedTimestamp = new Date(assessment.timestamp).toLocaleString();
  
  return (
    <div className="w-full md:w-1/2 p-4 mr-10">
      <h2 className="text-xl font-bold">AI Assessment</h2>
      <p className="text-gray-700">{assessment.assessment}</p>
      <div>
        <button>New Assessment</button>
        <p>{formattedTimestamp}</p>
      </div>
    </div>
  );
};
export default Assessment;
