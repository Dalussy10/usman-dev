
const About = () => {
    return (

        
<section
    id="about"
    className="relative py-24 px-6 md:px-12 lg:px-20 bg-gray-50 overflow-hidden"
>
    {/* Background Decoration */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                About Me
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Skills & Experience
            </h1>

            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Building modern, responsive and high-performance web experiences
                with clean and scalable code.
            </p>

        </div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* LEFT — About */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">

                <div className="flex items-center gap-4 mb-8">

                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-2xl">
                        👨‍💻
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Frontend Engineer
                        </h2>

                        <p className="text-indigo-600 font-medium">
                            React-focused Developer
                        </p>
                    </div>

                </div>


                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                    Hey, I'm Usman Dalhat, a React-focused Frontend Developer
                    based in Kaduna. I specialize in building high-performance,
                    responsive, and maintainable user interfaces that feel great
                    to use on any device.
                </p>

                <p className="text-lg leading-relaxed text-gray-600 mb-6">
                    With {new Date().getFullYear() - 2025}+ years of experience
                    turning complex designs and product requirements into clean,
                    scalable code, I care deeply about performance,
                    accessibility, developer experience, and writing code that
                    is easy for teams to understand and extend.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                    When I'm not coding, you'll find me exploring Kaduna's food
                    scene, reading about web performance optimization, or
                    tweaking my mechanical keyboard setup.
                </p>


                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100">

                    <div>
                        <h3 className="text-3xl font-bold text-indigo-600">
                            5+
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Projects
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-indigo-600">
                            2+
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Years Learning
                        </p>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-indigo-600">
                            100%
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Commitment
                        </p>
                    </div>

                </div>

            </div>


            {/* RIGHT — Skills */}
            <div className="space-y-8">

                {/* Core Stack */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Core Stack
                    </h3>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="group p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                            <p className="font-semibold text-gray-900">
                                React
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Frontend
                            </p>
                        </div>

                        <div className="group p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                            <p className="font-semibold text-gray-900">
                                JavaScript
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Programming
                            </p>
                        </div>

                        <div className="group p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                            <p className="font-semibold text-gray-900">
                                Tailwind CSS
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Styling
                            </p>
                        </div>

                        <div className="group p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                            <p className="font-semibold text-gray-900">
                                React Query
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Data Fetching
                            </p>
                        </div>

                    </div>

                </div>


                {/* Currently Exploring */}
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 text-white shadow-xl">

                    <div className="absolute -right-16 -top-16 w-40 h-40 bg-indigo-600/30 rounded-full blur-2xl"></div>

                    <div className="relative">

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                                🚀
                            </div>

                            <h3 className="text-2xl font-bold">
                                Currently Exploring
                            </h3>

                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            React Server Components, backend development,
                            scalable design systems, and improving Core Web
                            Vitals on large applications.
                        </p>


                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-6">

                            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-sm">
                                React Server Components
                            </span>

                            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-sm">
                                Node.js
                            </span>

                            <span className="px-3 py-1.5 rounded-lg bg-white/10 text-sm">
                                Web Performance
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>


    )
}
export default About;