import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-center items-center bg-gray p-2 shadow-md">
            <a href="#about" className="text-lightGray mx-4 hover:bg-teal no-underline">About</a>
            <a href="#research" className="text-lightGray mx-4 hover:bg-teal no-underline">Research</a>
            <a href="#publications" className="text-lightGray mx-4 hover:bg-teal no-underline">Publications</a>
            <a href="#people" className="text-lightGray mx-4 hover:bg-teal no-underline">People</a>
            <a href="#courses" className="text-lightGray mx-4 hover:bg-teal no-underline">Courses</a>
            <a href="#contact" className="text-lightGray mx-4 hover:bg-teal no-underline">Contact</a>
        </nav>
    );
};

export default Navigation;