import { ChartBarIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="hidden w-64 bg-white border-r border-gray-200 lg:flex flex-col">
      <div className="text-2xl font-bold text-green-600 p-5">LOGO</div>
      <nav className="flex-1 px-2 space-y-4">
        <h3 className="text-gray-400 text-sm uppercase">Overview</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-green-600 font-medium">
            <ChartBarIcon className="h-5 w-5" />
            <span>App</span>
          </li>
          {/* Add other nav items */}
          <li>E-Commerce</li>
          <li>Analytics</li>
        </ul>
        <h3 className="text-gray-400 text-sm uppercase">Management</h3>
        <ul>
          <li>User</li>
          <li>Product</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
