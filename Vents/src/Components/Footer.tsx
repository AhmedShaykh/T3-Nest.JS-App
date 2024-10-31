"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {

        if (window.pageYOffset > 0) {

            setIsVisible(true);

        } else {

            setIsVisible(false);

        }
    };

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <div className="w-full py-4 md:py-6">
            <div className="flex justify-center items-center wrapper">
                <Image
                    className="my-3 cursor-pointer"
                    onClick={scrollToTop}
                    src="/icon.png"
                    width={100}
                    height={100}
                    alt="logo"
                />
            </div>

            <h1 className="text-center text-lg md:text-2xl font-bold my-2">
                USA VENTS CARE.COM
            </h1>
        </div>
    )
};

export default Footer;