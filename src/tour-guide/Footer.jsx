import React from "react";

const Footer = () => (
    <footer className="w-full text-purple-100 py-2 mt-auto">
        <div className="max-w-5xl mx-auto px-2 text-center">
            <p className="text-base">
                &copy; {new Date().getFullYear()}{" "}
                <span className="logo text-purple-400">
                    TourGuide
                </span>
                . All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;