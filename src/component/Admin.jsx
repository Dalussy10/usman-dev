
import { useEffect, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LogOut,
  Mail,
  Menu,
  Phone,
  RefreshCw,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

const API_URL = "https://usman-backend.onrender.com";

const Admin = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fetchRequests = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response = await fetch(`${API_URL}/api/schedule`);

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to load schedule requests."
        );
      }

      // Support either a direct array or a response object
      const scheduleData = Array.isArray(data)
        ? data
        : data.requests || data.schedules || data.data || [];

      setRequests(scheduleData);
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong while loading schedule requests."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleLogout = () => {
    // This will be replaced with real backend logout/authentication
    // when we connect the dashboard to your admin authentication system.
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    window.location.href = "/";
  };

  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleString("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const totalRequests = requests.length;

  const recentRequests = requests.filter((request) => {
    if (!request.created_at && !request.createdAt) {
      return false;
    }

    const date = new Date(request.created_at || request.createdAt);

    if (Number.isNaN(date.getTime())) {
      return false;
    }

    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return date >= sevenDaysAgo;
  }).length;

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-gray-950 text-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <div>
              <p className="text-lg font-bold">U-Dev</p>
              <p className="text-xs text-gray-400">Admin Dashboard</p>
            </div>

            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Close menu"
            >
              <X size={21} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-6">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-600 px-4 py-3 font-medium">
              <CalendarDays size={20} />
              Schedule Requests
            </div>

            <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400">
              <User size={20} />
              Admin Account
            </div>

            <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-400">
              <ShieldCheck size={20} />
              Security
            </div>
          </nav>

          {/* Logout */}
          <div className="border-t border-white/10 p-4">
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <LogOut size={19} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-gray-200 p-2.5 text-gray-600 transition hover:bg-gray-50 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={21} />
              </button>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Administration
                </p>
                <h1 className="text-xl font-bold text-gray-900">
                  Schedule Requests
                </h1>
              </div>
            </div>

            <button
              type="button"
              onClick={() => fetchRequests(true)}
              disabled={refreshing}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                size={17}
                className={refreshing ? "animate-spin" : ""}
              />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </header>

        <main className="px-4 py-8 sm:px-6 lg:px-8">
          {/* Welcome */}
          <section className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-lg sm:p-8">
            <p className="text-sm font-medium text-indigo-100">
              Welcome back
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Manage your client requests
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
              Review the people who have contacted you through the Schedule a
              Call form.
            </p>
          </section>

          {/* Statistics */}
          <section className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Requests
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {totalRequests}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <CalendarDays size={23} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Last 7 Days
                  </p>

                  <p className="mt-2 text-3xl font-bold text-gray-900">
                    {recentRequests}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Clock3 size={23} />
                </div>
              </div>
            </div>
          </section>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              <X size={20} className="mt-0.5 shrink-0" />

              <div>
                <p className="font-semibold">Unable to load requests</p>
                <p className="mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Requests */}
          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-5 py-5 sm:px-6">
              <h2 className="font-bold text-gray-900">
                Client Requests
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Messages submitted through your portfolio.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-64 items-center justify-center px-6 py-12">
                <div className="text-center">
                  <RefreshCw
                    size={28}
                    className="mx-auto animate-spin text-indigo-600"
                  />

                  <p className="mt-4 text-sm font-medium text-gray-600">
                    Loading requests...
                  </p>
                </div>
              </div>
            ) : requests.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <CalendarDays size={25} />
                </div>

                <h3 className="mt-4 font-semibold text-gray-900">
                  No requests yet
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                  When someone submits the Schedule a Call form on your
                  portfolio, their request will appear here.
                </p>
              </div>
            ) : (
              <>
                {/* Desktop table */}
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[800px]">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200 text-left">
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Client
                        </th>

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Contact
                        </th>

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Request
                        </th>

                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Date
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {requests.map((request, index) => (
                        <tr
                          key={
                            request.id ||
                            request._id ||
                            `${request.email}-${index}`
                          }
                          className="transition hover:bg-gray-50"
                        >
                          <td className="px-6 py-5 align-top">
                            <div className="font-semibold text-gray-900">
                              {request.full_name || "Unknown"}
                            </div>
                          </td>

                          <td className="px-6 py-5 align-top">
                            <div className="space-y-2 text-sm">
                              {request.email && (
                                <a
                                  href={`mailto:${request.email}`}
                                  className="flex items-center gap-2 text-gray-600 no-underline hover:text-indigo-600"
                                >
                                  <Mail size={15} />
                                  {request.email}
                                </a>
                              )}

                              {request.phone_number && (
                                <a
                                  href={`tel:${request.phone_number}`}
                                  className="flex items-center gap-2 text-gray-600 no-underline hover:text-indigo-600"
                                >
                                  <Phone size={15} />
                                  {request.phone_number}
                                </a>
                              )}
                            </div>
                          </td>

                          <td className="max-w-md px-6 py-5 align-top">
                            <p className="whitespace-pre-wrap text-sm leading-6 text-gray-600">
                              {request.reason || "No message provided."}
                            </p>
                          </td>

                          <td className="whitespace-nowrap px-6 py-5 align-top text-sm text-gray-500">
                            {formatDate(
                              request.created_at || request.createdAt
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="divide-y divide-gray-100 md:hidden">
                  {requests.map((request, index) => (
                    <article
                      key={
                        request.id ||
                        request._id ||
                        `${request.email}-${index}`
                      }
                      className="p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-gray-900">
                            {request.full_name || "Unknown"}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            {formatDate(
                              request.created_at || request.createdAt
                            )}
                          </p>
                        </div>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                          <User size={17} />
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        {request.email && (
                          <a
                            href={`mailto:${request.email}`}
                            className="flex items-center gap-2 text-sm text-gray-600 no-underline hover:text-indigo-600"
                          >
                            <Mail size={16} />
                            {request.email}
                          </a>
                        )}

                        {request.phone_number && (
                          <a
                            href={`tel:${request.phone_number}`}
                            className="flex items-center gap-2 text-sm text-gray-600 no-underline hover:text-indigo-600"
                          >
                            <Phone size={16} />
                            {request.phone_number}
                          </a>
                        )}
                      </div>

                      <div className="mt-5 rounded-xl bg-gray-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Message
                        </p>

                        <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                          {request.reason || "No message provided."}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
