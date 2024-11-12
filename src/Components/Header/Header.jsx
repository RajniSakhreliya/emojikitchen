import React from 'react'
import logo from "../../assets/images/logo.png";
import "../../Styles/header.css";
import Container from '../container/Container';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navItems = [
        {
            name: 'Home',
            slug: "/",
        },
        {
            name: "Kitchen Combos",
            slug: "/emoji-kitchen-combinations",
        },
        {
            name: "About Us",
            slug: "/about",
        },
        {
            name: "Contact Us",
            slug: "/contact",
        },
        {
            name: "Blog",
            slug: "/blogs",
        },
    ]

    return (
        <header className="w-full">
            <Container className="w-full">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img
                                loading="lazy"
                                src={logo} alt="Emoji Kitchen Logo" />
                        </Link>
                    </div>

                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            <li key={item.name}>
                                <Link
                                    to={item.slug}
                                    className='mx-2.5 p-2.5 text-lg font-bold rounded-lg
                                    inline-bock bold duration-200 text-[#2c2c54] 
                                    hover:bg-[#d1e8ff] hover:text-[#0000ff] cursor-pointer'>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
