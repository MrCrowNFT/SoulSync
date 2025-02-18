import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-200">
      <div className="font-mono">
        <h1>AI-Based Mental Health and Wellness Coach</h1>
        <p>personalized mental health support using AI chatbots, mood tracking, and therapy recommendations</p>
        <button className="rounded-xs ">
          <Link to={"/signup"}>Sign Up</Link>
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
