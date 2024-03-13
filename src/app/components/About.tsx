"use client";
import { useState } from "react";
import Image from "next/image";

// COMPONENTS
import { TabButton } from "./TabButton";

// ABOUT COMPONENT
export const About = () => {
    /* States */
    const [tab, setTab] = useState("skills");

    /* Handlers */
    const tabChangeHandler = (id: string) => {
        setTab(id);
    };

    /* Utils */
    const technologies = [
        { name: "HTML", path: "/images/technologies/html.svg" },
        { name: "CSS", path: "/images/technologies/css.svg" },
        { name: "Bootstrap", path: "/images/technologies/bootstrap.svg" },
        { name: "TailwindCSS", path: "/images/technologies/tailwindcss.svg" },
        { name: "Sass", path: "/images/technologies/sass.svg" },
        { name: "Git", path: "/images/technologies/git.svg" },

        { name: "JavaScript", path: "/images/technologies/javascript.svg" },
        { name: "TypeScript", path: "/images/technologies/typescript.svg" },
        { name: "React.js", path: "/images/technologies/reactjs.svg" },
        { name: "Redux", path: "/images/technologies/redux.svg" },
        { name: "Node.js", path: "/images/technologies/nodejs.svg" },
        { name: "Nest.js", path: "/images/technologies/nestjs.svg" },

        { name: "MongoDB", path: "/images/technologies/mongodb.svg" },
        { name: "MySQL", path: "/images/technologies/mysql.png" },
        { name: "PostgresSQL", path: "/images/technologies/postgresql.svg" },
        { name: "Redis", path: "/images/technologies/redis.svg" },
        { name: "Sequelize", path: "/images/technologies/sequelize.svg" },
        { name: "Prisma", path: "/images/technologies/prisma.svg" },

        { name: "GraphQL", path: "/images/technologies/graphql.svg" },
        { name: "Jest", path: "/images/technologies/jest.svg" },
        { name: "Cypress.js", path: "/images/technologies/cypress.svg" },
        {
            name: "Testing Library",
            path: "/images/technologies/testinglibrary.svg"
        },
        { name: "Storybook", path: "/images/technologies/storybook.svg" },
        { name: "Swagger", path: "/images/technologies/swagger.svg" },

        { name: "Heroku", path: "/images/technologies/heroku.svg" },
        { name: "Firebase", path: "/images/technologies/firebase.svg" },
        { name: "Strapi", path: "/images/technologies/strapi.svg" },
        { name: "Contentful CMS", path: "/images/technologies/contentful.svg" },
        { name: "Dato CMS", path: "/images/technologies/datocms.svg" },
        { name: "Prismic", path: "/images/technologies/prismic.svg" },

        { name: "AWS", path: "/images/technologies/aws.svg" },
        { name: "Azure", path: "/images/technologies/azure.svg" },
        { name: "GCP", path: "/images/technologies/gcp.svg" },
        { name: "Digital Ocean", path: "/images/technologies/digital.svg" },
        { name: "Vercel", path: "/images/technologies/vercel.svg" },
        { name: "Netlify", path: "/images/technologies/netlify.svg" },

        { name: "Python", path: "/images/technologies/python.svg" },
        { name: "Docker", path: "/images/technologies/docker.svg" },
        { name: "Kubernetes", path: "/images/technologies/kubernetes.svg" },
        { name: "Terraform", path: "/images/technologies/terraform.svg" },
        { name: "GitHub", path: "/images/technologies/github.svg" },
        { name: "GitLab", path: "/images/technologies/gitlab.svg" }
    ];

    const tabOptions = [
        {
            label: "Skills",
            value: "skills",
            id: "skills",
            content: (
                <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
                    {technologies.map((technology, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center cursor-pointer rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 ease-out"
                        >
                            <Image
                                alt={technology.name}
                                src={technology.path}
                                width={35}
                                height={35}
                            />
                        </div>
                    ))}
                </div>
            )
        },
        {
            label: "Education",
            value: "education",
            id: "education",
            content: (
                <ul className="list-disc list-inside">
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
                <ul className="list-disc list-inside">
                    <li>Computer technician</li>
                    <li>Analysis and systems development</li>
                    <li>FullStack training</li>
                    <li>Programming with JavaScript</li>
                    <li>JavaScript course</li>
                    <li>React.js Bootcamp</li>
                    <li>Advanced Next.js Course</li>
                    <li>Gatsby.js and GraphQL Course</li>
                    <li>Scrum Foundations</li>
                    <li>Node.js, React.js and React Native Bootcamp</li>
                </ul>
            )
        }
    ];

    /* Renders */
    return (
        <section className="text-white mt-12">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    className="hidden  sm:block"
                    src="/images/jefferson-avatar-computer.svg"
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
                        have a degree in Systems Analysis and Development and
                        have been working in web development since 2014. I have
                        experience working with JavaScript, React.js, Redux,
                        Node.js, Express.js, PostgreSQL, MongoDB, Sequelize,
                        TypeORM, TailwindCSS, styled-components, Git and many
                        others technologies. I am a quick learner and I am
                        always looking to expand my knowledge and skill set. I
                        am a team player and I am excited to work with others to
                        create amazing applications.
                    </p>
                    <Image
                        className="block sm:hidden mt-8 mb-2 rounded-xl"
                        src="/images/jefferson-avatar-computer.svg"
                        alt="about section"
                        width={700}
                        height={700}
                    />
                    <div className="flex flex-row justify-start mt-4">
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
                    <div className="mt-4 text-sm md:text-base">
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
