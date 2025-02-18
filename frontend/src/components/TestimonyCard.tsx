import { FunctionComponent } from "react";

type Testimony = {
  photo: string;
  opinion: string;
};

type TestimonyCardProps = {
  testimony: Testimony;
};

const TestimonyCard: FunctionComponent<TestimonyCardProps> = ({
  testimony,
}) => {
  return (
    <div>
      <div>
        <img src={testimony.photo} alt="testimony photo" />
      </div>
      <div>
        <p>{testimony.opinion}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
