"use client"
import React, { useState } from 'react';
import Image from "next/image";

import Animate from "../animate"

// Import Icons
import { LuMenu } from "react-icons/lu"
import { LuSun } from "react-icons/lu"

export default function Navbar() {
	
	const [ displayMenu, setDisplayMenu ] = useState(false);
	
	const toggleMenu = () => {
		setDisplayMenu(!displayMenu)
	}
	
  return (
		<div className="p-2 fixed w-full z-5">
			<nav className="glass round flex items-center justify-between w-full px-2">
				<Animate className="flex items-center gap-1" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<Image
						className=""
						src="/logo.svg"
						alt="VicTech logo"
						width={40}
						height={20}
						priority
					/>
					<h1 className="text-white text-glowing font-jura font-bold">VicTech Solutions</h1>
				</Animate>
				<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<ul className="bg-black/30 hover:bg-black/40 rounded-full p-1 box-border text-white hidden lg:flex cursor-pointer">
						<li className="uppercase font-jura font-bold link-glow"><a className="rounded-full py-1 px-4 hover:text-white" href="#hero-section">Home</a></li>
						<li className="uppercase font-jura font-bold link-glow"><a className="rounded-full py-1 px-4 hover:text-white" href="#services-section">Services</a></li>
						<li className="uppercase font-jura font-bold link-glow"><a className="rounded-full py-1 px-4 hover:text-white" href="#testimonials-section">Testimonials</a></li>
						<li className="uppercase font-jura font-bold link-glow"><a className="rounded-full py-1 px-4 hover:text-white" href="#portfolio-section">Portfolio</a></li>
						<li className="uppercase font-jura font-bold link-glow"><a className="rounded-full py-1 px-4 hover:text-white" href="#about-section">About</a></li>
					</ul>
				</Animate>
				<Animate className="hidden lg:flex items-center" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<div>
						<a href="#contact-section"><button className="uppercase font-jura rounded-full py-1 px-4 h-[100%] bg-black/30 hover:bg-black/40 text-white link-glow font-bold">Contact me</button></a>
						<LuSun className="text-white text-2xl w-[40px] hidden"/>
					</div>
				</Animate>
				<Animate className="lg:hidden" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<div>
						<LuMenu onClick={() => { toggleMenu() }} className="text-white text-2xl w-[40px]"/>
					</div>
				</Animate>
				<Animate className={`${displayMenu ? "" : "hidden"}`} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<ul className={"flex flex-col gap-2 top-15 right-2 glass absolute p-4 w-50 box-border text-white"}>
						<li className="uppercase text-white font-jura"><a className="py-1 link-glow" href="#hero-section">Home</a></li><hr/>
						<li className="uppercase text-white font-jura"><a className="py-1 link-glow" href="#services-section">Services</a></li><hr/>
						<li className="uppercase text-white font-jura"><a className="py-1 link-glow" href="#testimonials-section">Testimonials</a></li><hr/>
						<li className="uppercase text-white font-jura"><a className="py-1 link-glow" href="#portfolio-section">Portfolio</a></li><hr/>
						<li className="uppercase text-white font-jura"><a className="py-1 link-glow" href="#about-section">About</a></li>
					</ul>
				</Animate>
			</nav>
		</div>
  );
}
