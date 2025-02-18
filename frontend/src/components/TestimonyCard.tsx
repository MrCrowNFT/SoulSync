import { FunctionComponent } from "react";
import { TestimonyCardProps } from "../types/Testimony.ts";

const TestimonyCard: FunctionComponent<TestimonyCardProps> = ({
  testimony,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center max-w-3xs">
      <div className="mb-4">
        <img
          src={testimony.photo}
          alt="testimony photo"
          className="w-24 h-24 rounded-full object-cover shadow-md border-zinc-600"
        />
      </div>
      <div className="text-center space-y-2">
        <p className="font-bold text-lg text-gray-800">
            {testimony.username}
        </p>
        <p className="text-gray-600 italic">
          <i>"{testimony.opinion}"</i>
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
