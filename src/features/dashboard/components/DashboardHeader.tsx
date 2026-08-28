// // dashboard header

// dashboard/
// └── components/
//     ├── StatsCard.tsx
//     ├── DashboardHeader.tsx
//     ├── RecentTickets.tsx
//     └── TicketOverview.tsx

import { FiLogOut, FiMenu, FiUser } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100"
        >
          <FiMenu size={22} />
        </button>

        <h1 className="text-xl font-bold text-blue-900">
          Ticket<span className="text-blue-500">System</span>
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* User */}
        <div className="hidden items-center gap-2 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 border-2 border-teal-900 ">
            <FiUser size={18} />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800">Juma Qasimi</p>

            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          className="flex items-center gap-2 rounded bg-blue-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          <FiLogOut size={18} />

          <span className="hidden sm:inline">Abmelden</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
