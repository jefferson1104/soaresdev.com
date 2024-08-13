"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// COMPONENTS
import { TabButton } from "../TabButton";

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
                // <div className="p-0 grid grid-cols-6 lg:grid-cols-12 gap-2">
                <div className="p-0 m-0 grid grid-cols-12 gap-2">
                    {technologies.map((technology, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-start"
                        >
                            <Image
                                alt={technology.name}
                                src={technology.path}
                                width={20}
                                height={20}
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
                    <li>
                        Analysis and systems development, Universidade Paulista
                    </li>
                    <li>Computer technician, ETEC Camargo Aranha</li>
                </ul>
            )
        },
        {
            label: "Certifications/Courses",
            value: "certifications",
            id: "certifications",
            content: (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <li>JavaScript course, EW.it</li>
                    <li>Ignite React.js Bootcamp, Rocketseat</li>
                    <li>Programming with JavaScript, Meta</li>
                    <li>Ignite Node.js Bootcamp, Meta</li>
                    <li>Advanced Next.js Course, Udemy</li>
                    <li>GoStack Bootcamp, Rocketseat</li>
                    <li>PWA, Gatsby.js, GraphQL Course, Udemy</li>
                </div>
            )
        }
    ];

    /* Renders */
    return (
        <section className="text-white mt-12 py-8 md:py-12" id="about">
            <motion.div
                className="gap-8 items-center py-8 xl:gap-16 sm:py-16 "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex gap-8">
                    <Image
                        className="hidden rounded-xl sm:block"
                        src="/images/jefferson-avatar-computer.svg"
                        alt="about section"
                        width={700}
                        height={700}
                    />

                    <div className="mt-4 md:mt-0 flex flex-col md:gap-2 md:w-[60%] h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            About Me
                        </h2>
                        <p className="text-sm md:text-base">
                            Dynamic Frontend Software Engineer with over 5 years
                            of hands-on experience in web development. Since
                            2017, I have specialized in React.js, building and
                            enhancing applications across diverse domains,
                            including marketplaces, e-commerce platforms,
                            internet banking systems, landing pages, and
                            websites. My expertise also extends to modern
                            technologies like Next.js, TypeScript, Redux.js, and
                            React Native for developing native mobile apps.
                        </p>
                        <p className="text-sm md:text-base">
                            I am adept at ensuring code quality and reliability
                            through comprehensive unit and integration testing
                            with Jest, as well as end-to-end testing with
                            Cypress.js. My strong background also includes CI/CD
                            pipelines, cloud services (AWS), containerization
                            with Docker, and proficiency in SEO, accessibility,
                            and performance optimization.
                        </p>
                        <p className="text-sm md:text-base">
                            My expertise extends to optimizing system
                            performance, designing scalable architectures,
                            developing design systems, and implementing micro
                            frontends. I'm passionate about technology and its
                            potential to transform lives. This passion drives me
                            to continuously learn and seek out new challenges.
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
                                    selectTab={() =>
                                        tabChangeHandler(option.value)
                                    }
                                    active={tab === option.value}
                                >
                                    {option.label}
                                </TabButton>
                            ))}
                        </div>
                        <div className="relative mt-4 text-xs md:text-sm">
                            {
                                tabOptions.find((option) => option.id === tab)
                                    ?.content
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
