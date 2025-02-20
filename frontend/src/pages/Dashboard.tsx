import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import { mockUser } from "../mocks/user.mock";
import MoodGraph from "../components/MoodGraph";
import { moodGraphMock } from "../mocks/graph.mock";
import Assessment from "../components/Assessment";
import { mockAssessmentData } from "../mocks/assesment.mock";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <UserCard user={mockUser} />
      <div className="flex">
        <MoodGraph data={moodGraphMock} />
        <Assessment assessment={mockAssessmentData} />
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
