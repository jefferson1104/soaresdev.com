"use client";

import { FormEvent, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Bounce, toast } from "react-toastify";
import { motion, useInView } from "framer-motion";

// COMPONENTS
import { Input } from "../Input";

// UTILS
import {
    initialValues,
    Validations,
    IContactForm,
    IFieldError
} from "../../utils/contact-form";
import { Textarea } from "../Textarea";

// CONTACTS COMPONENT
export const Contacts = () => {
    /* States */
    const [isLoading, setIsLoading] = useState(false);
    const [fieldError, setFieldError] = useState<IFieldError>({});
    const [formValues, setFormValues] = useState<IContactForm>(initialValues);

    /* Hooks */
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    /* Handlers */
    const inputChangeHandler = async (field: string, value: string) => {
        setFormValues((values) => ({ ...values, [field]: value }));
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        if (isLoading) {
            return;
        }

        const errors = Validations(formValues);
        if (Object.keys(errors).length) {
            setFieldError(errors);
            return;
        }

        setFieldError({});

        try {
            setIsLoading(true);

            const data = {
                email: formValues.email,
                subject: formValues.subject,
                message: formValues.message
            };

            const parsedData = JSON.stringify(data);
            const endpoint = "/api/send-email";

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: parsedData
            };

            const response = await fetch(endpoint, options);

            if (response.status === 200) {
                setFormValues(initialValues);
                successToast();
                return;
            }

            errorToast();
        } catch (error) {
            console.error("Contact Form Error =>", error);
            errorToast();
        } finally {
            setIsLoading(false);
        }
    };

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

    const successToast = () => {
        toast.success("Sent with success", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
        });
    };

    const errorToast = () => {
        toast.error("Send processing error", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce
        });
    };

    const motionVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    };

    /* Renders */
    return (
        <section
            className="grid md:grid-cols-2 mt-12 my-4 md:my-12 md:py-24 gap-4 relative z-0"
            id="contact"
            ref={ref}
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#16393e] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

            {/* Social Media */}
            <motion.div
                className="z-10"
                variants={motionVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 1, delay: 0.5 }}
            >
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
                variants={motionVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <form
                    className="flex flex-col gap-6 mt-4 z-10"
                    onSubmit={submitHandler}
                >
                    <Input
                        placeholder="email@example.com"
                        id="email"
                        name="email"
                        type="email"
                        label="Your email"
                        value={formValues.email}
                        errorMessage={fieldError?.email}
                        onChange={(e) =>
                            inputChangeHandler("email", e.target.value)
                        }
                    />

                    <Input
                        id="subject"
                        label="Subject"
                        name="subject"
                        placeholder="Just saying hi"
                        type="text"
                        value={formValues.subject}
                        errorMessage={fieldError?.subject}
                        onChange={(e) =>
                            inputChangeHandler("subject", e.target.value)
                        }
                    />

                    <Textarea
                        id="message"
                        label="Message"
                        name="message"
                        placeholder="Let's talk about..."
                        value={formValues.message}
                        errorMessage={fieldError?.message}
                        onChange={(e) =>
                            inputChangeHandler("message", e.target.value)
                        }
                    />

                    <button
                        className={`flex items-center justify-center gap-2 py-2.5 px-5 mt-4 w-full font-medium rounded-lg text-white bg-[#4bbcce] hover:bg-[#2d727c] transition-all duration-300 ease-out ${isLoading ? "cursor-not-allowed" : "cursor-pointer"}`}
                        type="submit"
                    >
                        {isLoading && <Loader2 className="animate-spin" />}
                        {!isLoading ? "Send Message" : "Processing..."}
                    </button>
                </form>
            </motion.div>
        </section>
    );
};
