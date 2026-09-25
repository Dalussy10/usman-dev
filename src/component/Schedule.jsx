
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

const Schedule = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    reason: "",
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous message when the user starts editing again
    if (message.text) {
      setMessage({
        type: "",
        text: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({
      type: "",
      text: "",
    });

    try {
      const response = await fetch(
        "https://usman-backend.onrender.com/api/schedule",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to submit your request. Please try again."
        );
      }

      setMessage({
        type: "success",
        text:
          data.message ||
          "Thanks! Your request has been received. I'll get back to you soon.",
      });

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        reason: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.message ||
          "Something went wrong. Please try again or contact me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 no-underline transition hover:text-indigo-600"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left side */}
          <section className="relative overflow-hidden bg-gray-950 px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-600/20">
                <CalendarDays size={27} />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Let's Work Together
              </p>

              <h1 className="max-w-md text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Let's talk about your next project.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-gray-300 sm:text-lg">
                Have an idea, project, or business problem you'd like to
                discuss? Send me a message and let's explore how I can help.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MessageSquare size={19} className="text-indigo-400" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-white">
                      Tell me about your idea
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Share what you're building and what you'd like to achieve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone size={19} className="text-indigo-400" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-white">
                      Choose how we connect
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Leave your phone number so we can discuss the project
                      further.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <CheckCircle2 size={19} className="text-indigo-400" />
                  </div>

                  <div>
                    <h2 className="font-semibold text-white">
                      Get a response
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      I'll review your request and get back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Right side - Form */}
          <section className="px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
                Schedule a Call
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Tell me what you're working on
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
            </div>

            {/* Success / Error message */}
            {message.text && (
              <div
                aria-live="polite"
                className={`mb-6 flex items-start gap-3 rounded-xl border px-4 py-4 text-sm ${
                  message.type === "success"
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                <CheckCircle2
                  size={20}
                  className={
                    message.type === "success"
                      ? "mt-0.5 shrink-0 text-green-600"
                      : "mt-0.5 shrink-0 text-red-600"
                  }
                />

                <p className="leading-6">{message.text}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full name */}
              <div>
                <label
                  htmlFor="full_name"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone_number"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="+234 901 234 5678"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              {/* Project details */}
              <div>
                <label
                  htmlFor="reason"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  What would you like to discuss?
                </label>

                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Tell me briefly about your project, idea, or what you need help with..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 hover:shadow-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Request..." : "Send Request"}

                {!loading && (
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Schedule;

