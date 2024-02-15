import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode; // For the content inside the section
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="p-8 bg-darkGray m-5 rounded-lg shadow-custom text-lightGray">
            <h2>{title}</h2>
            {children}
        </section>
    );
};

export default Section;
