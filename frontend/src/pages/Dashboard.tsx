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
      <MoodGraph data={moodGraphMock} />
      <Assessment assessment={mockAssessmentData} />
      <Footer />
    </>
  );
};
export default Dashboard;
