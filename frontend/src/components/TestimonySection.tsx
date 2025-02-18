import { TestimonyArray } from "../types/Testimony";
import { FunctionComponent } from "react";
import TestimonyCard from "./TestimonyCard";

const TestimonySection: FunctionComponent<TestimonyArray> = (testimonies) => {
  //need this because typescript just does not trust me
  const testimoniesToShow = Array.isArray(testimonies)
    ? testimonies.slice(0, 5)
    : [];
  return (
    <div className="flex flex-col gap-1.5 justify-between flex-wrap">
      {testimoniesToShow.slice(0, 5).map((testimony) => (
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
