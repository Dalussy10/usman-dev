import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import ScheduleCall from "./component/Schedule";
import Admin from "./component/Admin";

/* =========================
   Public Layout
========================= */

const PublicLayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

/* =========================
   404 Page
========================= */

const NotFound = () => {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          404 Error
        </p>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white no-underline transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
};

/* =========================
   App
========================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/schedule" element={<ScheduleCall />} />
        </Route>

        {/* Admin page */}
        <Route path="/admin" element={<Admin />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;