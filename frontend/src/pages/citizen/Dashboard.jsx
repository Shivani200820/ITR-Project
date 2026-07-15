import WelcomeCard from "../../components/citizen/dashboard/WelcomeCard";
import SummaryCards from "../../components/citizen/dashboard/SummaryCards";
import QuickActions from "../../components/citizen/dashboard/QuickActions";
import RecentComplaints from "../../components/citizen/dashboard/RecentComplaints";

function Dashboard() {
  return (
    <>
      <WelcomeCard />
      <SummaryCards />
      <QuickActions />
      <RecentComplaints />
    </>
  );
}

export default Dashboard;