import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  LogIn,
  LogOut,
  Mail,
  Menu,
  Phone,
  RefreshCw,
  ShieldCheck,
  Trash2,
  User,
  X,
  Eye,
  EyeOff,
} from "lucide-react";

const API_URL = "https://usman-backend.onrender.com";

const Admin = () => {
  const [token, setToken] = useState(
    () => sessionStorage.getItem("adminToken") || ""
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [notice, setNotice] = useState("");

  const logout = useCallback(() => {
    sessionStorage.removeItem("adminToken");
    setToken("");
    setRequests([]);
    setPassword("");
    setError("");
    setNotice("");
    setLoginError("");
    setSidebarOpen(false);
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.token) {
        throw new Error(data.message || "Unable to log in.");
      }

      sessionStorage.setItem("adminToken", data.token);
      setToken(data.token);
      setPassword("");
      setLoginError("");
    } catch (err) {
      setLoginError(
        err.message ||
          "Could not connect to the server. Please try again."
      );
    } finally {
      setLoginLoading(false);
    }
  };

  const fetchRequests = useCallback(
    async (isRefresh = false) => {
      if (!token) return;

      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");
      setNotice("");

      try {
        const response = await fetch(`${API_URL}/api/schedule`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json().catch(() => ({}));

        if (response.status === 401 || response.status === 403) {
          logout();
          setLoginError("Your session expired. Please log in again.");
          return;
        }

        if (!response.ok) {
          throw new Error(
            data.message || "Unable to load schedule requests."
          );
        }

        const scheduleData = Array.isArray(data)
          ? data
          : data.requests || data.schedules || data.data || [];

        setRequests(scheduleData);
      } catch (err) {
        setError(
          err.message || "Unable to load schedule requests."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [token, logout]
  );

  useEffect(() => {
    if (token) {
      fetchRequests();
    }
  }, [token, fetchRequests]);

  const handleDelete = async (request) => {
    const id = request.id ?? request._id;

    if (id == null) {
      setError("This request has no usable ID and cannot be deleted.");
      return;
    }

    const confirmed = window.confirm(
      `Delete the schedule request from ${
        request.full_name || "this client"
      }? This cannot be undone.`
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError("");
    setNotice("");

    try {
      const response = await fetch(
        `${API_URL}/api/schedule/${encodeURIComponent(id)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json().catch(() => ({}));

      if (response.status === 401 || response.status === 403) {
        logout();
        setLoginError("Your session expired. Please log in again.");
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete request.");
      }

      setRequests((current) =>
        current.filter(
          (item) => String(item.id ?? item._id) !== String(id)
        )
      );

      setNotice("Schedule request deleted successfully.");
    } catch (err) {
      setError(err.message || "Failed to delete the request.");
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) return "—";

    return parsedDate.toLocaleString("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const recentRequests = requests.filter((request) => {
    const createdAt = request.created_at || request.createdAt;

    if (!createdAt) return false;

    const date = new Date(createdAt);
    if (Number.isNaN(date.getTime())) return false;

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return date >= sevenDaysAgo;
  }).length;

  // Login screen
  if (!token) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
        <section className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-9">
          <Link
            to="/"
            className="text-sm font-medium text-indigo-600 no-underline hover:text-indigo-700"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <ShieldCheck size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Sign in to manage your portfolio schedule requests.
          </p>

          {loginError && (
            <div
              role="alert"
              className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Admin email
              </label>

              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your Admin password"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 hover:text-gray-900"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loginLoading ? (
                <>
                  <RefreshCw size={18} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Sign in securely
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-gray-400">
            Authorized administrators only.
          </p>
        </section>
      </main>
    );
  }

  // Authenticated dashboard
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-gray-950 text-white shadow-xl transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
            <div>
              <p className="text-lg font-bold">U-Dev</p>
              <p className="text-xs text-gray-400">Admin Dashboard</p>
            </div>

            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Close menu"
            >
              <X size={21} />
            </button>
          </div>

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
              Protected Dashboard
            </div>
          </nav>

          <div className="border-t border-white/10 p-4">
            <button
              type="button"
              onClick={logout}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-400 transition hover:bg-red-500/10 hover:text-red-400"
            >
              <LogOut size={19} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="rounded-xl border border-gray-200 p-2.5 text-gray-600 hover:bg-gray-50 lg:hidden"
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
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60"
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
          <section className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-lg sm:p-8">
            <p className="text-sm font-medium text-indigo-100">
              Welcome back
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Manage your client requests
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
              Review and manage messages submitted through your portfolio.
            </p>
          </section>

          <section className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Requests
                  </p>
                  <p className="mt-2 text-3xl font-bold">
                    {requests.length}
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
                  <p className="mt-2 text-3xl font-bold">
                    {recentRequests}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Clock3 size={23} />
                </div>
              </div>
            </div>
          </section>

          {error && (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {notice && (
            <div
              role="status"
              className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700"
            >
              {notice}
            </div>
          )}

          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-5 py-5 sm:px-6">
              <h2 className="font-bold text-gray-900">Client Requests</h2>
              <p className="mt-1 text-sm text-gray-500">
                Only authenticated administrators can view these requests.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-64 items-center justify-center p-12">
                <div className="text-center">
                  <RefreshCw
                    size={28}
                    className="mx-auto animate-spin text-indigo-600"
                  />
                  <p className="mt-4 text-sm text-gray-600">
                    Loading requests...
                  </p>
                </div>
              </div>
            ) : requests.length === 0 ? (
              <div className="px-6 py-16 text-center">
                <CalendarDays
                  size={28}
                  className="mx-auto text-gray-400"
                />
                <h3 className="mt-4 font-semibold">No requests yet</h3>
                <p className="mt-2 text-sm text-gray-500">
                  New Schedule a Call submissions will appear here.
                </p>
              </div>
            ) : (
              <>
                {/* Desktop table */}
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[900px]">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200 text-left">
                        {["Client", "Contact", "Request", "Date", "Action"].map(
                          (heading) => (
                            <th
                              key={heading}
                              className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                            >
                              {heading}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {requests.map((request, index) => (
                        <tr
                          key={
                            request.id ??
                            request._id ??
                            `${request.email}-${index}`
                          }
                          className="hover:bg-gray-50"
                        >
                          <td className="px-5 py-5 align-top font-semibold">
                            {request.full_name || "Unknown"}
                          </td>

                          <td className="space-y-2 px-5 py-5 align-top text-sm">
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
                          </td>

                          <td className="max-w-md whitespace-pre-wrap px-5 py-5 align-top text-sm leading-6 text-gray-600">
                            {request.reason || "No message provided."}
                          </td>

                          <td className="whitespace-nowrap px-5 py-5 align-top text-sm text-gray-500">
                            {formatDate(
                              request.created_at || request.createdAt
                            )}
                          </td>

                          <td className="px-5 py-5 align-top">
                            <button
                              type="button"
                              onClick={() => handleDelete(request)}
                              disabled={
                                deletingId !== null &&
                                String(deletingId) ===
                                  String(request.id ?? request._id)
                              }
                              className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
                            >
                              <Trash2 size={15} />
                              Delete
                            </button>
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
                        request.id ??
                        request._id ??
                        `${request.email}-${index}`
                      }
                      className="p-5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                          <User size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold">
                            {request.full_name || "Unknown"}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500">
                            {formatDate(
                              request.created_at || request.createdAt
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3 text-sm">
                        {request.email && (
                          <a
                            href={`mailto:${request.email}`}
                            className="flex items-center gap-2 break-all text-gray-600 no-underline hover:text-indigo-600"
                          >
                            <Mail size={16} />
                            {request.email}
                          </a>
                        )}

                        {request.phone_number && (
                          <a
                            href={`tel:${request.phone_number}`}
                            className="flex items-center gap-2 text-gray-600 no-underline hover:text-indigo-600"
                          >
                            <Phone size={16} />
                            {request.phone_number}
                          </a>
                        )}
                      </div>

                      <div className="mt-4 rounded-xl bg-gray-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Message
                        </p>
                        <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-600">
                          {request.reason || "No message provided."}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(request)}
                        disabled={
                          deletingId !== null &&
                          String(deletingId) ===
                            String(request.id ?? request._id)
                        }
                        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
                      >
                        <Trash2 size={15} />
                        Delete request
                      </button>
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