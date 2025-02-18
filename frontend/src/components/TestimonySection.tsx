import { TestimonyCardProps } from "../types/Testimony";
import { FunctionComponent } from "react";
import TestimonyCard from "./TestimonyCard";

type TestimonyArray = TestimonyCardProps[];

const TestimonySection: FunctionComponent<TestimonyArray> = (testimonies) => {
  return (
    <div>
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
