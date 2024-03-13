import { Code, Eye } from "lucide-react";
import Link from "next/link";

// UTILS
import { textLimited } from "../utils/string";

// PROJECT CARD UTILS
interface IProjectCard {
    imgUrl: string;
    title: string;
    description: string;
    githubUrl?: string;
    previewUrl?: string;
}

// PROJECT CARD COMPONENT
export const ProjectCard = ({
    imgUrl,
    title,
    description,
    githubUrl,
    previewUrl
}: IProjectCard) => {
    /* Renders */
    return (
        <div>
            <div
                className="h-52 md:h-72 rounded-t-xl relative group"
                style={{
                    background: `url(${imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80">
                    {githubUrl && (
                        <Link
                            className="h-14 w-14 border-4 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 ease-out"
                            href={githubUrl}
                            target="_blank"
                        >
                            <Code className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                        </Link>
                    )}

                    {previewUrl && (
                        <Link
                            className="h-14 w-14 ml-4 border-4 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 ease-out"
                            href={previewUrl}
                            target="_blank"
                        >
                            <Eye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                        </Link>
                    )}
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 h-[220px] md:h-[150px]">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">
                    {textLimited(description, 152)}
                </p>
            </div>
        </div>
    );
};
