import { FunctionComponent } from "react";
import { TestimonyCardProps } from "../types/Testimony.ts";

const TestimonyCard: FunctionComponent<TestimonyCardProps> = ({
  testimony,
}) => {
  return (
    <div className="shadow-2xs rounded-xs flex justify-center flex-col">
      <div>
        <img
          src={testimony.photo}
          alt="testimony photo"
          className="rounded-4xl"
        />
      </div>
      <div>
        <p>
            <b>{testimony.username}</b>
        </p>
        <p>
          <i>"{testimony.opinion}"</i>
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
