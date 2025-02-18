import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-screen flex bg-cover bg-center justify-start flex-col">
      <div className="text-white font-mono space-y-4">
        <h1 className="text-5xl font-bold">AI-Based Mental Health and Wellness Coach</h1>
        <p>personalized mental health support using AI chatbots, mood tracking, and therapy recommendations</p>
        <button className="rounded-md bg-[hsl(212,51%,62%)] shadow-md hover:bg-[hsl(212,51%,40%)] transition duration-300">
          <Link to={"/signup"}>Sign Up</Link>
        </button>
      </div>
    </div>
  );
};
export default HeroSection;
