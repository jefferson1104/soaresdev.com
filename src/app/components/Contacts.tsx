import Image from "next/image";
import Link from "next/link";

// COMPONENTS
import { Input } from "./Input";

// CONTACTS COMPONENT
export const Contacts = () => {
    /* Utils */
    const socialMedias = [
        {
            id: 1,
            name: "GitHub",
            icon: "/images/social/github.svg",
            url: "https://github.com/jefferson1104"
        },
        {
            id: 2,
            name: "Linkedin",
            icon: "/images/social/linkedin.svg",
            url: "https://www.linkedin.com/in/jeffersonsjunior"
        },
        {
            id: 3,
            name: "X Social",
            icon: "/images/social/x-social.svg",
            url: "https://twitter.com/jeffersonjr1104"
        },
        {
            id: 4,
            name: "Instagram",
            icon: "/images/social/instagram.svg",
            url: "https://www.instagram.com/jeffersonsjunior/"
        }
    ];

    /* Renders */
    return (
        <section className="grid md:grid-cols-2 mt-12 my-4 md:my-12 md:py-24 gap-4 relative">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#16393e] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className="text-left text-4xl font-bold text-white mt-4 mb-4">
                    Let'ts Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-4">
                    {socialMedias.map((social) => (
                        <Link key={social.id} href={social.url} target="_blank">
                            <Image
                                className="hover:opacity-25 transition-all duration-300 ease-out"
                                alt={social.name}
                                src={social.icon}
                                width={50}
                                height={50}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <form className="flex flex-col gap-6 mt-4 z-10">
                <Input
                    placeholder="email@example.com"
                    id="email"
                    type="email"
                    label="Your email"
                />
                <Input
                    placeholder="Just saying hi"
                    id="subject"
                    type="text"
                    label="Subject"
                />

                <div className="mb-6">
                    <label
                        className="text-white block mb-2 text-sm font-medium"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-[#4bbcce] h-24 resize-none overflow-auto"
                        name="message"
                        id="message"
                        placeholder="Let's talk about..."
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#4bbcce] hover:bg-[#2d727c] transition-all duration-300 ease-out text-white font-medium py-2.5 px-5 rounded-lg w-full"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};
