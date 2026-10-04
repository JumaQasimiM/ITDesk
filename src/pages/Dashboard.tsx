import DashboardHeader from "../features/dashboard/components/DashboardHeader";
import RecentTickets from "../features/dashboard/components/RecentTikits";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* header */}
      <DashboardHeader />
      {/* recent tekits */}
      <div className="max-w-7xl mx-auto">
        <RecentTickets />
      </div>
    </div>
  );
};
export default Dashboard;
