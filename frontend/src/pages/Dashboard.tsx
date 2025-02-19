import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserCard from "../components/UserCard";
import { mockUser } from "../mocks/user.mock";


const Dashboard = () => {
    return (
        <>
          <Navbar />
          <UserCard user={mockUser}/>
          <Footer />
        </>
      );
};
export default Dashboard;
