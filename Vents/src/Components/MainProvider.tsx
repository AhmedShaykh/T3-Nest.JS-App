"use client";
import { ReactNode, useEffect, useState } from "react";

const MainProvider = ({
    children
}: {
    children: ReactNode
}) => {

    const [loading, setLoading] = useState(true);

    const [typedText, setTypedText] = useState("");

    useEffect(() => {

        const text = "WELCOME TO USA VENTS CARE";

        let index = 0;

        const interval = setInterval(() => {

            if (index <= text.length) {

                setTypedText(text.slice(0, index));

                index++;

            } else {

                clearInterval(interval);

                setTimeout(() => {

                    setLoading(false);

                }, 1000);
            }
        }, 200);

        return () => clearInterval(interval);

    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center flex-1 flex-wrap h-screen wrapper">
                <h1 className="border-r-20 border-white max-w-5xl overflow-hidden animate-cursorBlink text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-3">
                    {typedText}
                </h1>
            </div>
        );
    }

    return <>{children}</>

};

export default MainProvider;