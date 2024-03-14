"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// COMPONENTS
import { Card } from "../Card";
import { TabButton } from "../TabButton";

// PROJECTS COMPONENT
export const Projects = () => {
    /* States */
    const [tab, setTab] = useState("All");

    /* Hooks */
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    /* Handlers */
    const tabChangeHandler = (id: string) => {
        setTab(id);
    };

    /* Utils */
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    const projectsData = [
        {
            id: 1,
            title: "GoBarber",
            image: "/images/projects/gobarber.png",
            tag: ["All", "Web", "Mobile"],
            github: "https://github.com/jefferson1104/goBarber",
            description:
                "GoBarber is an app for scheduling appointments with your barber. You can create barber profiles on the web, and users utilize the mobile application to register and schedule appointments with their chosen barbers"
        },
        {
            id: 2,
            title: "WonGames",
            image: "/images/projects/wongames.png",
            tag: ["All", "Web"],
            github: "https://github.com/jefferson1104/wongames",
            description:
                "WonGames is an e-commerce platform designed for purchasing your favorite video games for both consoles and PCs."
        },
        {
            id: 3,
            title: "Proffy",
            image: "/images/projects/proffy.png",
            tag: ["All", "Web", "Mobile"],
            github: "https://github.com/jefferson1104/Proffy",
            description:
                "It's a platform where you can study or teach. A teacher putting his data, the subject he wants to teach, and choosing the best time to teach his class."
        },
        {
            id: 4,
            title: "Personal Notes",
            image: "/images/projects/personal-notes.png",
            tag: ["All", "Web"],
            github: "https://github.com/jefferson1104/personal-notes",
            preview: "https://the-personal-notes.netlify.app",
            description:
                "A tool for creating personal notes via typing or speech transcription, utilizing browser resources like the Speech Recognition API. Built with Vite, ReactJS, Tailwind CSS, and TypeScript for efficient organization of ideas."
        },
        {
            id: 5,
            title: "AppHelp",
            image: "/images/projects/app-help.png",
            tag: ["All", "Mobile"],
            github: "https://github.com/jefferson1104/appHelp-reactNative",
            description:
                "it's a mobile application for android and iOS on technical support demands, it was developed with react-native technology."
        },
        {
            id: 6,
            title: "EsportsDuo",
            image: "/images/projects/esports-duo.png",
            tag: ["All", "Web", "Mobile"],
            github: "https://github.com/jefferson1104/esports-duo",
            description:
                "Esports Duo is a project where online game players create in-game ads to connect with other gamers and play together."
        }
        // {
        //     id: 7,
        //     title: "LetMeAsk",
        //     image: "/images/projects/letmeask.png",
        //     tag: ["All", "Web"],
        //     github: "https://github.com/jefferson1104/letmeask-reactjs",
        //     preview: "https://letmeask-reactjs.vercel.app",
        //     description:
        //         "An online platform for you to better organize questions and answers in a live."
        // },
    ];

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tab)
    );

    const tabOptions = [
        {
            id: 1,
            label: "All",
            value: "All"
        },
        {
            id: 2,
            label: "Web",
            value: "Web"
        },
        {
            id: 3,
            label: "Mobile",
            value: "Mobile"
        }
    ];

    /* Renders */
    return (
        <section className="py-20 md:py-12 " id="projects" ref={ref}>
            <h2 className="text-left md:text-center text-4xl font-bold text-white mt-12 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-start md:justify-center mt-8 mb-8">
                {tabOptions.map((option) => (
                    <TabButton
                        key={option.id}
                        selectTab={() => tabChangeHandler(option.value)}
                        active={tab === option.value}
                    >
                        {option.label}
                    </TabButton>
                ))}
            </div>
            <ul className="grid md:grid-cols-3 gap-8 md:gap-12" ref={ref}>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <Card
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            githubUrl={project.github}
                            previewUrl={project.preview}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};
