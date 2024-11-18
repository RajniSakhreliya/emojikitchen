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
            <Container className={`flex flex-col`}>
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.slug} className="text-lg text-gray-500 hover:text-[#0000ff] p-2">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <span className='mt-2 text-black font-bold'>
                    © 2024 Emoji Kitchen
                </span>
            </Container>
        </footer>
    )
}

export default Footer
