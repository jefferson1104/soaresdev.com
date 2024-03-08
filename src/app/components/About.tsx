"use client";
import { useState } from "react";
import Image from "next/image";

// COMPONENTS
import { TabButton } from "./TabButton";

// ABOUT COMPONENT
export const About = () => {
    /* States */
    const [tab, setTab] = useState("education");

    /* Handlers */
    const tabChangeHandler = (id: string) => {
        setTab(id);
    };

    /* Utils */
    const tabOptions = [
        {
            label: "Education",
            value: "education",
            id: "education",
            content: (
                <ul>
                    <li>ETEC Camargo Aranha, São Paulo</li>
                    <li>Universidade Paulista, São Paulo</li>
                    <li>Rocketseat, Santa Catarina</li>
                    <li>
                        Instituto de gestão e tecnologia da informação, Belo
                        Horizonte
                    </li>
                </ul>
            )
        },
        {
            label: "Certifications",
            value: "certifications",
            id: "certifications",
            content: (
                <ul>
                    <li>Computer technician</li>
                    <li>Analysis and systems development</li>
                    <li>FullStack training</li>
                    <li>Programming with JavaScript</li>
                    <li>JavaScript course</li>
                    <li>Node.js, React.js and React Native Bootcamp</li>
                    <li>React.js Bootcamp</li>
                    <li>Advanced Next.js Course</li>
                    <li>Gatsby.js and GraphQL Course</li>
                    <li>Scrum Foundations</li>
                </ul>
            )
        },
        {
            label: "Skills",
            value: "skills",
            id: "skills",
            content: (
                <ul>
                    <li>JavaScript • TypeScript</li>
                    <li>React.js • Next.js • Gatsby.js</li>
                    <li>Node.js • Express.js • Nest.js</li>
                    <li>PostgresSQL • MySQL • MongoDB</li>
                    <li>Sequelize • TypeORM • Prisma</li>
                    <li>HTML • CSS • SASS • LESS</li>
                    <li>Bootstrap • TailwindCSS • Radix UI</li>
                    <li>Styled-Components</li>
                    <li>Git • GitHub • GitLab</li>
                    <li>RestFull • GraphQL</li>
                    <li>Redux • React Query • Apollo</li>
                    <li>Unit test • E2E Tests • Integration Tests•</li>
                    <li>Docker • Kubernetes • Terraform</li>
                    <li>AWS • GCP • Azure</li>
                </ul>
            )
        }
    ];

    /* Renders */
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    className="rounded-xl"
                    src="/images/about.jpg"
                    alt="about section"
                    width={700}
                    height={700}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <p className="text-base lg:text-lg ">
                        I am a full stack web developer with a passion for
                        creating interactive and responsive web applications. I
                        have experience working with JavaScript, React, Redux,
                        Node.js, Express, PostgreSQL, MongoDB, Sequelize,
                        TailwindCSS, Styled-components, HTML, CSS, Git and many
                        others technologies. I am a quick learner and I am
                        always looking to expand my knowledge and skill set. I
                        am a team player and I am excited to work with others to
                        create amazing applications.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {tabOptions.map((option, index) => (
                            <TabButton
                                key={index}
                                selectTab={() => tabChangeHandler(option.value)}
                                active={tab === option.value}
                            >
                                {option.label}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8">
                        {
                            tabOptions.find((option) => option.id === tab)
                                ?.content
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
