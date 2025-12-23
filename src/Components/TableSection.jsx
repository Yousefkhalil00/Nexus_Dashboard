import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    }
  };

  const recentOrders = [
    {
      id: "#ORD-1021",
      customer: "Alice Johnson",
      product: "Wireless Headphones",
      amount: "$129.99",
      status: "Completed",
      date: "2025-12-18",
    },
    {
      id: "#ORD-1022",
      customer: "Michael Smith",
      product: "Smart Watch",
      amount: "$249.00",
      status: "Pending",
      date: "2025-12-19",
    },
    {
      id: "#ORD-1023",
      customer: "Sophia Lee",
      product: "Gaming Mouse",
      amount: "$59.50",
      status: "Completed",
      date: "2025-12-20",
    },
    {
      id: "#ORD-1024",
      customer: "Daniel Brown",
      product: "Laptop Stand",
      amount: "$39.99",
      status: "Cancelled",
      date: "2025-12-21",
    },
    {
      id: "#ORD-1025",
      customer: "Emma Wilson",
      product: "Bluetooth Speaker",
      amount: "$89.00",
      status: "Pending",
      date: "2025-12-22",
    },
  ];

  const topProduct = [
    {
      name: "Wireless Headphones",
      revenue: "$12,500",
      trend: "up",
      sales: 250,
      change: "+15%",
    },
    {
      name: "Smart Watch",
      revenue: "$18,200",
      trend: "down",
      sales: 180,
      change: "-8%",
    },
    {
      name: "Gaming Mouse",
      revenue: "$7,450",
      trend: "up",
      sales: 120,
      change: "+12%",
    },
    {
      name: "Laptop Stand",
      revenue: "$4,800",
      trend: "down",
      sales: 60,
      change: "-5%",
    },
    {
      name: "Bluetooth Speaker",
      revenue: "$9,300",
      trend: "up",
      sales: 95,
      change: "+10%",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest Customers Orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <tr>
              <th className="text-left p-4 text-sm font-semibold text-slate-600">
                Order ID
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600">
                Product
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600">
                Amount
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600">
                Status
              </th>
              <th className="text-left p-4 text-sm font-semibold text-slate-600">
                Date
              </th>
            </tr>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4" key={index}>
                    <span className="text-sm font-medium text-black dark:text-white">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      {order.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.date}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800 dark:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white/800 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800 dark:text-white">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Best Performing Products
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="p-6 space-y-4">
          {topProduct.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.name}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {product.sales}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.revenue}
                </p>
                <div className="flex items-center space-x-1">
                  {product.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      product.trend === "up"
                        ? "text-emerald-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
