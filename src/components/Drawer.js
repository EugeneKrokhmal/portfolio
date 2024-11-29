// components/Drawer.js
import React from 'react';

const Drawer = ({ isOpen, onClose, data }) => {
    return (
        <div
            className={`z-50 fixed top-0 right-0 h-full md:w-1/4 bg-gray-900 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } drawer transition-transform duration-300`}
        >
            <div className="p-4 max-h-screen overflow-auto pb-20">
                <svg
                    onClick={onClose}
                    className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h2 className="text-2xl font-bold mt-4">{data?.title}</h2>
                <h3 className="text-1xl font-bold mt-4">{data?.role}</h3>
                <div className="mt-4 space-y-4">
                    <p><strong>Situation:</strong> {data?.star?.situation}</p>
                    <p><strong>Task:</strong> {data?.star?.task}</p>
                    <div>
                        <strong>Action:</strong>
                        <ul className="list-disc pl-6 mt-2">
                            {data?.star?.action.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <p><strong>Result:</strong> {data?.star?.result}</p>
                </div>

                <div className="flex gap-2">
                    {data?.link && (
                        <a target="_blank" href={data?.link} className="block mt-8">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Website
                                </span>
                            </button>
                        </a>
                    )}
                    {data?.gitHub && (
                        <a target="_blank" href={data?.gitHub} className="block mt-8">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                            >
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    GitHub
                                </span>
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Drawer;