import React, { useState } from 'react';

const Ecosystem: React.FC = () => {
    const [activeTab, setActiveTab] = useState('All Apps');

    const tabs = ['All Apps', 'Sales & Marketing', 'Finance', 'Collaboration', 'HR'];

    return (
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-background-light dark:bg-background-dark">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-3 text-center mb-10 lg:mb-12 max-w-3xl">
                    <h1 className="text-gray-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
                        The Zoho Ecosystem: A Visual Guide
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg font-normal leading-normal">
                        Discover how over 50 integrated applications can transform your business. Click any app to learn more.
                    </p>
                </div>

                <div className="flex gap-2 sm:gap-3 p-3 flex-wrap justify-center mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex h-9 cursor-pointer shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${activeTab === tab
                                    ? 'bg-primary/20 dark:bg-primary/30 ring-1 ring-primary text-primary dark:text-primary font-medium'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium'
                                }`}
                        >
                            <p className="text-sm leading-normal">{tab}</p>
                        </button>
                    ))}
                </div>

                <div className="w-full grow bg-background-light dark:bg-background-dark @container py-3">
                    <div className="w-full gap-1 overflow-hidden bg-background-light dark:bg-background-dark @[480px]:gap-2 aspect-video flex">
                        <div
                            className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-xl flex-1"
                            data-alt="Abstract network diagram of interconnected app icons"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbimqwi2_62RlILWUCJddICq9XKRMvhC_iREixCkIy60jVosPpIzJnQ5vGLmzgJtVRLRDNaVMOjubNFdxv76V1mINC0A80qyiGjHFF5oHsirywrZ1q_9i2uCRADhzue09cwymEZ1-SSw1Qe-05NutGST4qcJzHekfSDY2jokP3R0txQY42ZD-duDMZQOGv8eRWj5dZzwzy05dQnAWRdXdPa1sWj0_q9duXRX_TK-7wduFtScbt4eqbGSjplVy99AZvUix4p6Ns5HE")',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecosystem;
