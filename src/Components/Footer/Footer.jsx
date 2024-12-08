import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems = [
        { name: "About Us", slug: "/about-us" },
        { name: "Contact Us", slug: "/contact" },
        { name: "Disclaimer", slug: "/disclaimer" },
        { name: "Privacy Policy", slug: "/privacy-policy" },
    ];

    return (
        <footer className="w-full bg-[#EDF2F7] relative py-4">
            <div className={`flex flex-col w-full`}>
                <div className='grid grid-cols-2 tablet:grid-cols-4 w-full justify-start'>
                    {navItems.map((item) => (
                        <Link to={item.slug} key={item.name} 
                        className="w-full text-center tablet:text-center text-lg text-gray-500 hover:text-[#0000ff] p-2">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <span className='mt-2 text-black font-bold text-2xl self-center'>
                    © 2024 Emoji Kitchen
                </span>
            </div>
        </footer>
    )
}

export default Footer
