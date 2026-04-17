import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>

            <footer className="bg-green-800 text-white py-12 mt-16">
                <div className="max-w-4xl mx-auto text-center space-y-6">


                    <h1 className="text-4xl font-bold">KeenKeeper</h1>


                    <p className="text-sm text-gray-200">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>


                    <div>
                        <p className="mb-3 text-lg">Social Links</p>

                        <div className="flex justify-center gap-4">

                            <button className="bg-white text-black p-3 rounded-full">
                                <RiInstagramFill />
                            </button>


                            <button className="bg-white text-black p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </button>


                            <button className="bg-white text-black p-3 rounded-full">
                                <BsTwitterX />
                            </button>
                        </div>
                    </div>


                    <div className="border-t border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                        <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

                        <div className="flex gap-4 mt-2 md:mt-0">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms of Service</a>
                            <a href="#" className="hover:underline">Cookies</a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );




};

export default Footer;