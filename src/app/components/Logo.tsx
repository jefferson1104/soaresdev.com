import Link from "next/link";
import Image from "next/image";

// LOGO COMPONENT
export const Logo = () => {
    return (
        <Link
            className="text-2xl md:text-5xl text-white font-semibold"
            href={"/"}
        >
            <Image
                src="/images/logo.svg"
                alt="Soares Dev"
                width={150}
                height={50}
            />
        </Link>
    );
};
