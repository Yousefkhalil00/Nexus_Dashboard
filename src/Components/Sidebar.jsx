import {
  Zap,
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  Package,
  MessagesSquare,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  Settings,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "insights", label: "Insights" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "Orders", label: "Orders" },
      { id: "Customers", label: "Customers" },
    ],
  },
  {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "roles", label: "Roles & Permissions" },
      { id: "activity", label: "User Activity" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "847",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
  },
  {
    id: "messages",
    icon: MessagesSquare,
    label: "Messages",
    count: "12",
  },
  {
    id: "calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expandedItem, setExpandedItem] = useState(new Set(["analytics"]));

  const toggleExpanded = (itemid) => {
    const newExpanded = new Set(expandedItem);
    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }

    setExpandedItem(newExpanded);
  };
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition-all duration-300 ease-in-out bg-white/50 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      <div className="py-6 px-5 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div className="text-xl font-bold text-slate-800 dark:text-white">
              <h1>Nexus</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id} className="dark:text-white">
            <button
              onClick={() => {
                if (item.submenu) {
                  toggleExpanded(item.id);
                } else {
                  onPageChange(item.id);
                }
              }}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-800/50"
              }`}
            >
              <div className="flex">
                <item.icon className="w-5 h-5" />

                <>
                  {!collapsed && (
                    <>
                      <span className="font-medium ml-2">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </>
              </div>
              {!collapsed && item.submenu && (
                <ChevronDown className={`w-4 h-4 transition-transform `} />
              )}
            </button>
            {!collapsed && item.submenu && expandedItem.has(item.id) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.submenu.map((subitem) => {
                  return (
                    <button
                      key={subitem.id}
                      className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                    >
                      {subitem.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src="https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg"
              alt="user"
              className="w-10 h-10 rounded-full ring-2 ring-blue-500 object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                  Alex Johnson
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Adminstrator
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
