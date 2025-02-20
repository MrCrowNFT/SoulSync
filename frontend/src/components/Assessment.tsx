import { FunctionComponent } from "react";

interface AssessmentProp {
  assessment: string;
}

const Assessment: FunctionComponent<AssessmentProp> = ({ assessment }) => {
  return (
    <div className="w-full md:w-1/2 p-4 mr-10">
      <h2 className="text-xl font-bold">AI Assessment</h2>
      <p className="text-gray-700">{assessment}</p>
    </div>
  );
};
export default Assessment;
