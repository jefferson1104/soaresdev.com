"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// HERO COMPONENT
export const Hero = () => {
    /* Hooks */
    const router = useRouter();

    /* Handlers */
    const downloadCVHandler = () => {
        const file = "/documents/JEFFERSON_SOARES_RESUME_EN.pdf";
        router.push(file);
    };

    /* Renders */
    return (
        <section className="lg:py-16" id="hero">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="mb-4 text-white text-2xl sm:text-5xl md:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93d8e2] via-[#4bbcce] to-[#2d727c]">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Jefferson Soares",
                                1000,
                                "Front-end Developer",
                                1000,
                                "Back-end Developer",
                                1000,
                                "Mobile Developer",
                                1000
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="mb-6 text-sm sm:text-lg lg:text-xl text-[#ADB7BE]">
                        I'm a full-stack developer, degraded in Systems Analysis
                        and Development at the Universidade Paulista (UNIP) in
                        Brazil. I have expertise in JavaScript and work with
                        technologies such as React.js, Node.js, React Native,
                        TypeScript, SQL, No-SQL, Unit tests, E2E tests, and many
                        others.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="px-6 py-3 mr-4 inline-block w-full sm:w-fit rounded-full text-white bg-gradient-to-br from-[#93d8e2] via-[#4bbcce] to-[#16393e] hover:opacity-80 transition-all duration-300 ease-out"
                        >
                            Hire Me
                        </Link>
                        <button
                            className="px-1 py-1 mt-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#93d8e2] via-[#4bbcce] to-[#16393e] hover:bg-slate-800 text-white"
                            onClick={downloadCVHandler}
                        >
                            <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2 transition-all duration-300 ease-out">
                                Download CV
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 mt- md:mt-0"
                >
                    <div className="w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] relative">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/jefferson-avatar.svg"
                            alt="Jefferson Soares"
                            width={520}
                            height={520}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
