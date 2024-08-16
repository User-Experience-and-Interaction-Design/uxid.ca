import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-between items-center bg-gray p-2 shadow-md">
            <StaticImage src="../images/uxid.png" alt="UXID Lab Logo" height={50}/>
            <div>
                <a href="#background" className="text-lightGray mx-4 font-bold no-underline hover:underline">Background</a>
                <a href="#research_interests" className="text-lightGray mx-4 font-bold no-underline hover:underline">Research Interests</a>
                <a href="#news" className="text-lightGray mx-4 font-bold no-underline hover:underline">News</a>
                <a href="#publications" className="text-lightGray mx-4 font-bold no-underline hover:underline">Publications</a>
                <a href="#students" className="text-lightGray mx-4 font-bold no-underline hover:underline">Students</a>
                <a href="#teaching" className="text-lightGray mx-4 font-bold no-underline hover:underline">Teaching</a>
                <a href="#awards" className="text-lightGray mx-4 font-bold no-underline hover:underline">Awards</a>
                <a href="#talks" className="text-lightGray mx-4 font-bold no-underline hover:underline">Talks</a>
                <a href="#service" className="text-lightGray mx-4 font-bold no-underline hover:underline">Service</a>
                <a href="#contact" className="text-lightGray mx-4 font-bold no-underline hover:underline">Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;
