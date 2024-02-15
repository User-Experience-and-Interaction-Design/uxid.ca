import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
    description: string;
    logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, description, logoUrl }) => {
    return (
        <header className="bg-gray text-lightGray text-center p-4 shadow-md flex items-center justify-center">
            <div>
                <img src={logoUrl} alt="Lab Logo" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <p>{description}</p>
            </div>
        </header>
    );
};

export default Header;
