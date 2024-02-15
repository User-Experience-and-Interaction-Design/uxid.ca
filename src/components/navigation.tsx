import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-center items-center bg-gray p-2 shadow-md">
            <a href="#research" className="text-lightGray mx-4 hover:bg-teal no-underline">Research</a>
            <a href="#courses" className="text-lightGray mx-4 hover:bg-teal no-underline">Courses</a>
            <a href="#publications" className="text-lightGray mx-4 hover:bg-teal no-underline">Publication</a>
            <a href="#projects" className="text-lightGray mx-4 hover:bg-teal no-underline">Projects</a>
            <a href="#contact" className="text-lightGray mx-4 hover:bg-teal no-underline">Contact</a>
            <a href="#students" className="text-lightGray mx-4 hover:bg-teal no-underline">Students</a>
            <a href="#cv" className="text-lightGray mx-4 hover:bg-teal no-underline">CV</a>
        </nav>
    );
};

export default Navigation;
