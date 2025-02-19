import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import { mockUser } from "../mocks/user.mock";
import MoodGraph from "../components/MoodGraph";
import {moodGraphMock} from "../mocks/graph.mock";


const Dashboard = () => {
    return (
        <>
          <Navbar />
          <UserCard user={mockUser}/>
          <MoodGraph data={moodGraphMock}/>
          <Footer />
        </>
      );
};
export default Dashboard;
