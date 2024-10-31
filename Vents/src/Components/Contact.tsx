import React from "react";

const Contact = () => {
    return (
        <div className="py-8" id="contact">
            <div className="wrapper my-4">
                <h1 className="text-center text-4xl font-bold">
                    Contact
                </h1>

                <div className="md:w-[70%] mx-auto">
                    <form className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div>
                                <label className="leading-7 text-md font-semibold dark:font-medium font-orbitron dark:text-white">Name</label>
                                <input
                                    className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded my-1 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-white py-1 px-3 leading-8 transition-colors dark:transition-colors duration-200 dark:duration-300 ease-in-out dark:ease-in-out"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-md font-semibold dark:font-medium font-orbitron dark:text-white">Email</label>
                                <input
                                    className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded my-1 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none dark:text-white py-1 px-3 leading-8 transition-colors dark:transition-colors duration-200 dark:duration-300 ease-in-out dark:ease-in-out"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-md font-semibold dark:font-medium font-orbitron dark:text-white">Message</label>
                                <textarea
                                    className="w-full bg-slate-400 dark:bg-gray-600 bg-opacity-40 rounded my-1 border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none dark:text-white py-1 px-3 resize-none leading-6 transition-colors dark:transition-colors duration-200 dark:duration-300 ease-in-out dark:ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            <button
                                className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none text-lg bg-gradient-to-tr rounded shadow hover:bg-gradient-to-tl from-cyan-600 to-blue-900"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;