import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="p-8 bg-darkGray m-5 rounded-lg shadow-custom text-lightGray">
            <h2 className="text-2xl font-bold mb-5">{title}</h2>
            {children}
        </section>
    );
};

export default Section;
