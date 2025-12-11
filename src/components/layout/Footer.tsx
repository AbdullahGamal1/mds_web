import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-[#1a150d] border-t border-[#e6e2db] dark:border-[#3d3322] py-12 px-10">
            <div className="layout-content-container max-w-[960px] mx-auto flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#181611] dark:text-white">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                            </svg>
                        </div>
                        <span className="font-bold text-lg">Zoho Partner Solutions</span>
                    </div>
                    <p className="text-[#8a7c60] dark:text-gray-400 text-sm max-w-xs">Empowering businesses with customized Zoho solutions for better efficiency and growth.</p>
                </div>
                <div className="flex gap-12 flex-wrap">
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-[#181611] dark:text-white">Company</h5>
                        <a className="text-[#8a7c60] dark:text-gray-400 text-sm hover:text-primary" href="#">About</a>
                        <a className="text-[#8a7c60] dark:text-gray-400 text-sm hover:text-primary" href="#">Careers</a>
                        <a className="text-[#8a7c60] dark:text-gray-400 text-sm hover:text-primary" href="#">Privacy Policy</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h5 className="font-bold text-[#181611] dark:text-white">Connect</h5>
                        <a className="text-[#8a7c60] dark:text-gray-400 text-sm hover:text-primary" href="#">LinkedIn</a>
                        <a className="text-[#8a7c60] dark:text-gray-400 text-sm hover:text-primary" href="#">Twitter</a>
                        <a className="text-[#8a7c60] dark:text-gray-400 text-sm hover:text-primary" href="#">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="layout-content-container max-w-[960px] mx-auto mt-12 pt-8 border-t border-[#e6e2db] dark:border-[#3d3322] flex justify-between items-center text-xs text-[#8a7c60] dark:text-gray-500">
                <p>© 2023 Zoho Partner Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
