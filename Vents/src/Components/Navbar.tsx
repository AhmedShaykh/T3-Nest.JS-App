"use client";
import { useState } from "react";
import { NAV_ITEMS } from "@/static";
import { Menu as MenuIcon, X } from "lucide-react";
import { Link as Links } from "react-scroll/modules";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    return (
        <div className="bg-background w-full mx-auto px-8 sm:px-20 fixed top-0 z-50 shadow shadow-gray-900">
            <div className="justify-between md:items-center md:flex wrapper">
                <div className="flex items-center justify-between py-5 md:block">
                    <div className="flex justify-center items-center gap-3">
                        <Link href={"/"}>
                            <Image
                                src="/icon.png"
                                width={60}
                                height={60}
                                alt="logo"
                            />
                        </Link>

                        <Link href={"/"}>
                            <h1 className="text-xl font-bold cursor-pointer">
                                UVC
                            </h1>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? <X className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
                        </button>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-8 pb-4 md:pb-0 md:flex-row md:space-x-12 md:space-y-0 font-medium">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Links
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-white hover:text-blue-600 cursor-pointer"
                                        }
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={300}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Links>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;