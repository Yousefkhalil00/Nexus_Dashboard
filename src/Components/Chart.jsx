import RevenueChart from "/src/Components/RevenueChart";
import SalesChart from "/src/Components/SalesChart";

const Chart = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div className="col-span-2">
        <RevenueChart />
      </div>
      <div className="space-y-6">
        <SalesChart />
      </div>
    </div>
  );
};

export default Chart;
