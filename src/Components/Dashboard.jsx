import ActivityFeed from "/src/Components/ActivityFeed";
import Chart from "/src/Components/Chart";
import StatsGrid from "/src/Components/StatsGrid";
import TableSection from "/src/Components/TableSection";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <Chart />
      <div className="grid gird-cols-1 xl:grid-cols-3 gap-3">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
