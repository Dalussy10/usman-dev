import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <>
           
<footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 overflow-hidden">

    {/* Background Glow */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* CTA */}
        <div className="py-20 text-center">

            <span className="inline-block px-4 py-2 mb-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
                Let's work together
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
                Let's build something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400">
                    exceptional.
                </span>
            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                Have an idea, project or business that needs a modern
                web experience? Let's turn it into reality.
            </p>

            <Link
                to="/schedule"
                className="group mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-1 transition-all duration-300 no-underline"
            >
                Get in touch

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                </span>
            </Link>

        </div>


        {/* Divider */}
        <div className="border-t border-white/10"></div>


        {/* Footer Main */}
        <div className="py-12 grid md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>

                <h3 className="text-2xl font-bold text-white">
                    U<span className="text-indigo-500">-</span>Dev
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
                    React-focused frontend developer building fast,
                    accessible and beautiful digital experiences.
                </p>

            </div>


            {/* Navigation */}
            <div>

                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                    Navigation
                </h4>

                <div className="flex flex-col gap-3">

                    <a
                        href="#Home"
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 no-underline"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 no-underline"
                    >
                        About
                    </a>

                    <a
                        href="#project"
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 no-underline"
                    >
                        Projects
                    </a>

                    <Link
                        to="/schedule"
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 no-underline"
                    >
                        Contact
                    </Link>

                </div>

            </div>


            {/* Connect */}
            <div>

                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                    Connect
                </h4>

                <div className="flex flex-wrap gap-3">

                    {/* X */}
                    <a
                        href="https://x.com/Dal_ussy?t=dnkWyyGBzKgJtYW5ADXi3g&s=08"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X / Twitter"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-semibold hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        𝕏
                    </a>


                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/usman.dalhat.142"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-semibold hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        f
                    </a>


                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/ussman-dalhat-b7b4b1270"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-semibold hover:bg-blue-700 hover:border-blue-700 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        in
                    </a>


                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/09014755133"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white font-semibold hover:bg-green-600 hover:border-green-600 hover:-translate-y-1 transition-all duration-300 no-underline"
                    >
                        WA
                    </a>

                </div>

            </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-sm">

            <p className="text-gray-500 text-center md:text-left">
                © 2026 U-Dev. All rights reserved.
            </p>

            <p className="text-gray-500">
                Built with
                <span className="text-gray-300 mx-1">
                    React
                </span>
                &
                <span className="text-gray-300 mx-1">
                    Tailwind CSS
                </span>
            </p>

            <a
                href="#Home"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 no-underline"
            >
                Back to top

                <span className="group-hover:-translate-y-1 transition-transform duration-300">
                    ↑
                </span>
            </a>

        </div>

    </div>

</footer>


        </>
    )
}

export default Footer;


{/* <div>
                        <p className="text-white font-semibold text-lg">U-Dev</p>
                        <p className="mt-2">Frontend engineer crafting fast, delightfull experiences</p>
                    </div> */}

{/* nav
                        <div className="flex flex-col gap-2">
                            <a href="/" className="hover:text-white transition">Home</a>
                            <a href="" className="hover:text-white transition">About</a>
                        </div> */}