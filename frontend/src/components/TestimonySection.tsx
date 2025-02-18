import { TestimonyCardProps } from "../types/Testimony";
import { FunctionComponent } from "react";
import TestimonyCard from "./TestimonyCard";

type TestimonyArray = TestimonyCardProps[];

const TestimonySection: FunctionComponent<TestimonyArray> = (testimonies) => {
  return (
    <div className="flex flex-col gap-1.5 justify-between flex-wrap">
      {testimonies.slice(0, 5).map((testimony) => (
        <TestimonyCard
          key={testimony.id}
          id={testimony.id}
          testimony={testimony.testimony}
        />
      ))}
    </div>
  );
};
export default TestimonySection;
