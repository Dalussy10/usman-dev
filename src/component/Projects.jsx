
const Projects = () => {
    return (

        
<section
    id="project"
    className="relative py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
>
    {/* Background decoration */}
    <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl"></div>

    <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>


    <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">

            <span className="inline-block px-4 py-2 mb-4 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
                My Work
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                Featured Projects
            </h1>

            <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                A selection of projects I've designed and developed,
                focusing on performance, usability and modern web
                technologies.
            </p>

        </div>


        {/* ================= BLUE HOMES ================= */}
        <div className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 border border-gray-200 shadow-lg">

                <div className="absolute top-5 left-5 z-10 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-600 shadow-sm">
                    Featured Project
                </div>

                <img
                    src="/IMG/BH1.png"
                    alt="Blue Homes website"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />

            </div>


            {/* Content */}
            <div>

                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                    Real Estate Platform
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
                    Blue Homes
                    <span className="text-gray-400 text-xl ml-2">
                        (2026)
                    </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-7">
                    A modern real estate platform designed to help users
                    discover, buy, sell and rent properties. The interface
                    focuses on clean navigation, responsive layouts and
                    an easy property browsing experience.
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">

                    <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium">
                        HTML
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
                        CSS
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-yellow-50 text-yellow-600 text-sm font-medium">
                        JavaScript
                    </span>

                </div>


                {/* Links */}
                <div className="flex flex-wrap gap-4">

                    <a
                        href="https://bluehomes.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 transition-all duration-300 no-underline"
                    >
                        Live Demo
                        <span>↗</span>
                    </a>

                    <a
                        href="https://github.com/dalussy10/bluehomes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        Source Code
                        <span>↗</span>
                    </a>

                </div>

            </div>

        </div>


        {/* ================= FUDNEWS ================= */}
        <div className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">

            {/* Content */}
            <div className="lg:order-1">

                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                    News Platform
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
                    FUDNEWS
                    <span className="text-gray-400 text-xl ml-2">
                        (2026)
                    </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-7">
                    A news platform created to provide users with access
                    to news, updates and articles through a clean,
                    responsive and easy-to-navigate interface.
                </p>


                <div className="flex flex-wrap gap-2 mb-8">

                    <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium">
                        HTML
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
                        CSS
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-yellow-50 text-yellow-600 text-sm font-medium">
                        JavaScript
                    </span>

                </div>


                <div className="flex flex-wrap gap-4">

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 transition-all duration-300 no-underline"
                    >
                        Live Demo
                        <span>↗</span>
                    </a>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        Source Code
                        <span>↗</span>
                    </a>

                </div>

            </div>


            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 border border-gray-200 shadow-lg lg:order-2">

                <img
                    src="/IMG/FN1.png"
                    alt="FUDNEWS website"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />

            </div>

        </div>


        {/* ================= BAKERY DELIGHT ================= */}
        <div className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 border border-gray-200 shadow-lg">

                <img
                    src="/IMG/BD1.png"
                    alt="Bakery Delight website"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />

            </div>


            {/* Content */}
            <div>

                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                    Bakery Website
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
                    Bakery Delight
                    <span className="text-gray-400 text-xl ml-2">
                        (2026)
                    </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-7">
                    A modern bakery website created to showcase products,
                    highlight the brand and give customers a simple way
                    to explore the bakery's offerings.
                </p>


                <div className="flex flex-wrap gap-2 mb-8">

                    <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium">
                        HTML
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
                        CSS
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-yellow-50 text-yellow-600 text-sm font-medium">
                        JavaScript
                    </span>

                </div>


                <div className="flex flex-wrap gap-4">

                    <a
                        href="https://bakery-delight.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 transition-all duration-300 no-underline"
                    >
                        Live Demo
                        <span>↗</span>
                    </a>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        Source Code
                        <span>↗</span>
                    </a>

                </div>

            </div>

        </div>


        {/* ================= DALUSSYWEARS ================= */}
        <div className="group grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Content */}
            <div>

                <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                    E-Commerce
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-5">
                    DalussyWears
                    <span className="text-gray-400 text-xl ml-2">
                        (2026)
                    </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-7">
                    A fashion e-commerce website designed to showcase
                    clothing products and provide customers with a smooth
                    and engaging online shopping experience.
                </p>


                <div className="flex flex-wrap gap-2 mb-8">

                    <span className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-sm font-medium">
                        HTML
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
                        CSS
                    </span>

                    <span className="px-3 py-1.5 rounded-lg bg-yellow-50 text-yellow-600 text-sm font-medium">
                        JavaScript
                    </span>

                </div>


                <div className="flex flex-wrap gap-4">

                    <a
                        href="https://dalussywears.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 transition-all duration-300 no-underline"
                    >
                        Live Demo
                        <span>↗</span>
                    </a>

                    <a
                        href="https://github.com/dalussy10/dalussywears"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        Source Code
                        <span>↗</span>
                    </a>

                </div>

            </div>


            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 border border-gray-200 shadow-lg">

                <img
                    src="/IMG/DW1.png"
                    alt="DalussyWears website"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />

            </div>

        </div>

    </div>

</section>


    )
}
export default Projects;