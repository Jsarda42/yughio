// src/components/Navbar.js
import React, { useState } from 'react';
import logo from '../assets/logo.png';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="white p-4">
			<div className="container mx-auto flex items-center justify-between">
				<a href="#home" className="flex">
					<h1 className="text-black text-2xl font-semibold">Yugi-Oh! Map</h1>
				</a>
				<ul className="hidden md:flex text-black">
					<li className="font-semibold text-xs">
						<a href="#signup">Sign Up</a>
					</li>
					<li className="font-semibold text-xs ml-4">
						<a href="#signin">Sign In</a>
					</li>
				</ul>

				<button
					className="md:hidden text-black"
					onClick={toggleMenu}
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>

			<ul className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-2 text-white text-center`}>
				<li className="font-semibold text-xs text-black">
					<a href="#signup">Sign Up</a>
				</li>
				<li className="font-semibold text-xs">
					<a href="#signin">Sign In</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
