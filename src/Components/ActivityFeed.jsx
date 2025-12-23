import { Bell, Clock } from "lucide-react";

const activities = [
  {
    id: "ACT-101",
    type: "notification",
    icon: Bell,
    title: "New Message Received",
    description: "You have 3 unread messages in your inbox.",
    time: "2 mins ago",
    color: "text-orange-500",
    bgColor: "bg-orange-100 dark:bg-orange-500/30",
  },
  {
    id: "ACT-102",
    type: "alert",
    icon: Bell,
    title: "Server Downtime",
    description: "Server #3 is currently down. Check immediately.",
    time: "10 mins ago",
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-500/30",
  },
  {
    id: "ACT-103",
    type: "success",
    icon: Bell,
    title: "Payment Completed",
    description: "Payment of $250 was successfully processed.",
    time: "30 mins ago",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-500/30",
  },
  {
    id: "ACT-104",
    type: "warning",
    icon: Bell,
    title: "Low Stock Alert",
    description: "Product 'Gaming Mouse' stock is below 10 units.",
    time: "1 hour ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: "ACT-105",
    type: "info",
    icon: Bell,
    title: "New Feature Available",
    description: "Check out the new dashboard analytics feature.",
    time: "3 hours ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Activity Feed
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recent System Activites
          </p>
        </div>
        <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      {activities.map((activity) => (
        <div key={activity.id} className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className={`p-2 my-5 rounded-lg ${activity.bgColor} `}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0 py-4">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {activity.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                  {activity.description}
                </p>
                <div className="flex items-center-safe space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500 dark:text-slalte-400">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
