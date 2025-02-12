"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TokenAPI, UserAPI } from "@/lib/services";
import Cookies from "js-cookie";

const Session = ({ children }: { children: ReactNode }) => {

    const router = useRouter();

    useEffect(() => {

        FetchProfile();

    }, []);

    const RefreshToken = async () => {

        let refresh_token: any = Cookies.get("refreshToken");

        try {

            const response: any = await TokenAPI(refresh_token);

            Cookies.set("token", response.data.access_token, { secure: true });

        } catch (error) {

            console.log(`Error. ${error}`);

        }

    };

    const FetchProfile = async () => {

        try {

            const response = await UserAPI();

            if (response) {

                RefreshToken();

            }

        } catch (error: any) {

            if (error.response && error.response.status === 401) {

                console.log("Unauthorized! Redirecting to login.");

                Cookies.remove("token");

                Cookies.remove("refreshToken");

            }

            router.push("/login");

        }

    };

    return (
        <>
            {children}
        </>
    )
};

export default Session;