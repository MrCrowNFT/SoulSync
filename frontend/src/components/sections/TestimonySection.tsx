import { TestimonySectionProps } from "../../types/Testimony";
import { FunctionComponent } from "react";
import TestimonyCard from "../TestimonyCard";

const TestimonySection: FunctionComponent<TestimonySectionProps> = ({
  testimonies,
}) => {
  return (
    <div className="flex flex-row gap-10 justify-center flex-wrap p-4 mt-15">
      {testimonies.map((testimony) => (
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
