import { Link } from "react-router-dom";

const Cont = () => {

    return (
        <section
    id="Home"
    className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-12 lg:px-20 bg-white"
>
    {/* Background Decorations */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>

    <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Available for freelance work
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6">
                I build fast,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
                    beautiful &
                </span>
                accessible interfaces.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10">
                React · JavaScript · Tailwind CSS · Express JS · Performance-obsessed
                frontend developer turning ideas into pixel-perfect web
                experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                <Link
                    to="/project"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 no-underline"
                >
                    View my work

                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                    </span>
                </Link>

                <Link
                    to="/schedule"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border-2 border-gray-200 text-gray-800 font-semibold text-lg hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 transition-all duration-300 no-underline"
                >
                    Let's collaborate
                </Link>

            </div>

            {/* Skills */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center md:justify-start">

                <span className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium">
                    React
                </span>

                <span className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium">
                    JavaScript
                </span>

                <span className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium">
                    Tailwind CSS
                </span>

                <span className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 text-sm font-medium">
                    Express JS
                </span>
            </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">

            <div className="relative">

                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 blur-2xl opacity-30 scale-110"></div>

                {/* Gradient Border */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-2xl">

                    {/* Image Container */}
                    <div className="rounded-full bg-white p-2">

                        <img
                            src="/IMG/PROFILE.jpg"
                            alt="Profile picture"
                            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-center"
                        />

                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-5 sm:-left-10 bg-white px-5 py-3 rounded-2xl shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            💻
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">
                                Currently building
                            </p>

                            <p className="font-semibold text-gray-900">
                                Web Experiences
                            </p>
                        </div>

                    </div>
                </div>

                {/* Floating Code Badge */}
                <div className="absolute -top-5 -right-5 sm:-right-10 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl">
                    <span className="text-sm font-mono">
                        {"<Code />"}
                    </span>
                </div>

            </div>
        </div>

    </div>
</section>
    )
}

export default Cont;

