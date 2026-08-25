import {
  Ticket,
  CircleCheck,
  Clock,
  AlertCircle,
  Users,
  ArrowUpRight,
} from "lucide-react";

const tickets = [
  {
    id: "#TK-1024",
    title: "VPN connection is not working",
    department: "IT Support",
    priority: "High",
    status: "Open",
    user: "John Smith",
  },
  {
    id: "#TK-1023",
    title: "Cannot access company email",
    department: "IT Support",
    priority: "Medium",
    status: "In Progress",
    user: "Sarah Johnson",
  },
  {
    id: "#TK-1022",
    title: "Request for new monitor",
    department: "Hardware",
    priority: "Low",
    status: "Resolved",
    user: "Michael Brown",
  },
];

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

          <p className="mt-1 text-gray-500">
            Welcome back! Here is an overview of your ticket system.
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          + Create Ticket
        </button>
      </div>

      {/* Statistics */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Tickets</p>
              <h2 className="mt-2 text-3xl font-bold">1,248</h2>
            </div>

            <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
              <Ticket size={24} />
            </div>
          </div>

          <p className="mt-4 flex items-center gap-1 text-sm text-green-600">
            <ArrowUpRight size={16} />
            12% from last month
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Open Tickets</p>
              <h2 className="mt-2 text-3xl font-bold">84</h2>
            </div>

            <div className="rounded-lg bg-red-100 p-3 text-red-600">
              <AlertCircle size={24} />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">Requires attention</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <h2 className="mt-2 text-3xl font-bold">36</h2>
            </div>

            <div className="rounded-lg bg-yellow-100 p-3 text-yellow-600">
              <Clock size={24} />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Currently being processed
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Resolved Tickets</p>
              <h2 className="mt-2 text-3xl font-bold">1,128</h2>
            </div>

            <div className="rounded-lg bg-green-100 p-3 text-green-600">
              <CircleCheck size={24} />
            </div>
          </div>

          <p className="mt-4 text-sm text-green-600">90.4% resolution rate</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        {/* Recent Tickets */}
        <div className="rounded-xl bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Recent Tickets
              </h2>

              <p className="text-sm text-gray-500">Latest support requests</p>
            </div>

            <button className="text-sm font-medium text-blue-600 hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex flex-col gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-blue-600">
                      {ticket.id}
                    </span>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      {ticket.department}
                    </span>
                  </div>

                  <h3 className="mt-2 font-semibold text-gray-900">
                    {ticket.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Created by {ticket.user}
                  </p>
                </div>

                <div className="flex gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      ticket.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : ticket.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {ticket.priority}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      ticket.status === "Open"
                        ? "bg-red-100 text-red-600"
                        : ticket.status === "In Progress"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Overview */}
        <aside className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
              <Users size={22} />
            </div>

            <div>
              <h2 className="font-bold text-gray-900">Support Team</h2>

              <p className="text-sm text-gray-500">Team availability</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">Available</span>
                <span className="font-semibold">12</span>
              </div>

              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[75%] rounded-full bg-green-500 " />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">Busy</span>
                <span className="font-semibold">4</span>
              </div>

              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[35%] rounded-full bg-yellow-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">Offline</span>
                <span className="font-semibold">2</span>
              </div>

              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[15%] rounded-full bg-gray-400" />
              </div>
            </div>
          </div>

          <button className="mt-8 w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
            Manage Team
          </button>
        </aside>
      </section>
    </main>
  );
};

export default Dashboard;
