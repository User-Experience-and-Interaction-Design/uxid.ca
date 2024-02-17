import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-between items-center bg-gray p-2 shadow-md">
            <StaticImage src="../images/uxid.png" alt="UXID Lab Logo" height={50}/>
            <div>
                <a href="#about" className="text-lightGray mx-4 font-bold no-underline hover:underline">About</a>
                <a href="#research" className="text-lightGray mx-4 font-bold no-underline hover:underline">Research</a>
                <a href="#publications" className="text-lightGray mx-4 font-bold no-underline hover:underline">Publications</a>
                <a href="#people" className="text-lightGray mx-4 font-bold no-underline hover:underline">People</a>
                <a href="#courses" className="text-lightGray mx-4 font-bold no-underline hover:underline">Courses</a>
                <a href="#contact" className="text-lightGray mx-4 font-bold no-underline hover:underline">Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;
