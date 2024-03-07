"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// HERO COMPONENT
export const Hero = () => {
    /* Renders */
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="mb-4 text-white text-2xl sm:text-5xl lg:text-6xl font-extrabold">
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
                    <p className="mb-6 text-base sm:text-lg lg:text-xl text-[#ADB7BE]">
                        I have a degree in Systems Analysis and Development and
                        have been working in web development since 2014. I have
                        expertise in the JavaScript programming language and
                        work with technologies such as React, Node.js, React
                        Native, TypeScript, and many others.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#93d8e2] via-[#4bbcce] to-[#16393e] hover:bg-slate-200 text-white">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 mt-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#93d8e2] via-[#4bbcce] to-[#16393e] hover:bg-slate-800 text-white">
                            <span className="block bg-[#181818] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] relative bg-[#181818]">
                        <Image
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/images/avatar.png"
                            alt="Jefferson Soares"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
