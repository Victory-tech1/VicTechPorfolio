import Image from "next/image";
import Link from "next/link";

// Import Widgets

import { Calendar29 } from "./widgets/scheduleCall"
import { CarouselPlugin } from "./widgets/carousel"
import Animate from "./animate"
import ContactForm from "./widgets/contact-form"
import Skills from "./widgets/skills-carousel"

// Import Accordion from shadcn UI

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Import Icons form React Icons

import { LuMenu } from "react-icons/lu"

export default function LandingPage() {
  return (
    <div className="pt-15 px-2">
			<HireOverlay />
			<Hero />
			<Stats />
			<CarouselPlugin />
			<Services />
			<Work />
			<About />
			<Skills />
			<FaqAccordion />
			<Contact />
    </div>
  );
}

function HireOverlay() {
	return(
		<div><a href="mailto:victorytechsltns@gmail.com?subject=Project%20Inquiry%20–%20Web%20Development&body=Hello%2C%0D%0A%0D%0AI%E2%80%99m%20reaching%20out%20to%20discuss%20a%20potential%20opportunity%20to%20work%20together.%0D%0A%0D%0APlease%20let%20me%20know%3A%0D%0A%E2%80%A2%20A%20brief%20description%20of%20the%20project%20or%20role%0D%0A%E2%80%A2%20Timeline%20and%20expected%20scope%0D%0A%E2%80%A2%20Budget%20range%20(if%20applicable)%0D%0A%0D%0AI%E2%80%99ll%20review%20the%20details%20and%20get%20back%20to%20you%20promptly.%0D%0A%0D%0ABest%20regards%2C%0D%0AVictory%20Chukwuebuka%20Okoye%0D%0AWeb%20Developer
"><button className="fixed box-glow round right-2 bottom-2 glass rounded-full px-4 py-2 text-white link-glow">Hire me</button></a></div>
	)
}

function Hero() {
	return (
		<div id="hero-section" className="font-mont text-white px-2 py-6 lg:py-15 lg:px-40">
			<main className="">
				<center className="lg:text-left lg:grid lg:grid-cols-2">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div>
							<p>Good day, Sir/Madam,</p>
							<h1 className="text-5xl lg:text-7xl font-black my-6 lg:my-4 "><i><span className="text-brand">I'm</span> <span className="text-glowing">Victory,</span><br/><span className="text-4xl font-bold lg:text-3xl"><span className="text-brand">A </span><span className="text-glowing">Front-End Web Developer</span></span></i></h1>
						</div>
					</Animate>
					<Animate className="h-80 w-80 rounded-full bg-white mb-8 lg:row-span-2 lg:m-auto overflow-hidden profile-effect" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<Image
							className="scale-120"
							src="/profile-picture.png"
							alt="Pictur of Victory Chukwuebuka, the founder of VicTech Solutions"
							width={400}
							height={0}
							priority
						/>
					</Animate>
					<Animate className="w-min" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<h3 className="text-glow glass p-2 px-2 font-jura text-center lg:w-112">I design and build websites that convert visitors into clients.</h3>
						<div className="w-full flex justify-evenly lg:justify-between mt-5 font-jura">
							<a href="#portfolio-section"><button className="glass glass-btn box-glow link-glow w-40">View my work</button></a>
							<Link href="cv-page"><button className="glass glass-btn box-glow link-glow w-40">View my CV</button></Link>
						</div>
					</Animate>
				</center>
			</main>
		</div>
	)
}

function Stats() {
	return (
		<div className="font-mont text-white px-2 py-6 lg:px-25">
			<center>
				<ul className="flex flex-col gap-5 px-8 lg:px-0 lg:flex-row lg:gap-15">
					<li className="lg:w-full">
						<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
							<div className="py-3 px-6 rounded-[5px] box-gradient">
								<span className="text-7xl font-black"><i>3</i></span>
								<p className="font-jura">Projects completed</p>
							</div>
						</Animate>
					</li>
					<li className="lg:w-full">
						<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
							<div className="bg-brand py-3 px-6 rounded-[5px] box-gradient">
								<span className="text-7xl font-black"><i>3+</i></span>
								<p className="font-jura">Years experience</p>
							</div>
						</Animate>
					</li>
					<li className="lg:w-full">
						<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
							<div className="bg-brand py-3 px-6 rounded-[5px] box-gradient">
								<span className="text-7xl font-black"><i>50+</i></span>
								<p className="font-jura">Users served</p>
							</div>
						</Animate>
					</li>
				</ul>
			</center>
		</div>
	)
}

function Services() {
	return (
		<div  id="services-section" className="font-mont text-white px-4 py-6 lg:px-25">
			<h2 className="uppercase mb-5 text-center text-glowing lg:text-left"><i>Services</i></h2>
			<ul className="flex flex-col gap-5 lg:flex-row lg:gap-15">
				<li className="lg:w-full">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div className="py-3 font-jura">
							<div className="bg-gray-300 h-30 mb-3 rounded-[5px] image-wrapper box-glow">
								<Image
									src="/web-app.png"
									alt="Web App Development"
									fill
									className="image"
									priority
								/>
							</div>
							<h3 className="uppercase text-glow">Web App Develpopment</h3>
							<p className=" text-glow">I can develop scalable full-stack web applications
							using modern technologies.</p>
						</div>
					</Animate>
				</li>
				<li className="lg:w-full">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div className="py-3 font-jura">
							<div className="bg-gray-300 h-30 mb-3 rounded-[5px] image-wrapper box-glow">
								<Image
									src="/web-dev.png"
									alt="Web Design and Development"
									fill
									className="image"
									priority
								/>
							</div>
							<h3 className="uppercase text-glow">Web Design and Development</h3>
							<p className=" text-glow">I can create modern, responsive websites built 
							for speed and conversions.</p>
						</div>
					</Animate>
				</li>
				<li className="lg:w-full">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div className="py-3 font-jura">
							<div className="bg-gray-300 h-30 mb-3 rounded-[5px] image-wrapper box-glow">
								<Image
									src="/redesign.png"
									alt="Website Redesign"
									fill
									className="image"
									priority
								/>
							</div>
							<h3 className="uppercase text-glow">Website Redesign</h3>
							<p className=" text-glow">I can improve performance, UX and SEO of existing websites.</p>
						</div>
					</Animate>
				</li>
			</ul>
		</div>
	)
}

function Work() {
	return (
		<div  id="portfolio-section" className="font-mont text-white px-4 py-6 lg:py-10 lg:px-25">
			<h2 className="uppercase mb-5 text-center text-glowing lg:text-left"><i>Featured Work</i></h2>
			<ul className="flex flex-col gap-5 lg:flex-row lg:gap-15">
				<li className="lg:w-full">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div className="py-3 font-jura">
							<div className="bg-gray-300 py-3 px-6 h-30 mb-3 rounded-[5px] box-glow"></div>
							<h3 className="uppercase text-glow">Tic Tac Toe</h3>
							<p className=" text-glow">I can develop scalable full-stack web 
							applications using modern technologies.</p>
						</div>
					</Animate>
				</li>
				<li className="lg:w-full">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div className="py-3 font-jura">
							<div className="bg-gray-300 py-3 px-6 h-30 mb-3 rounded-[5px] box-glow"></div>
							<h3 className="uppercase text-glow">Tradesafe E-commerce site</h3>
							<p className=" text-glow">I can create modern, responsive websites built for speed 
							and conversions. </p>
						</div>
					</Animate>
				</li>
				<li className="lg:w-full">
					<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
						<div className="py-3 font-jura">
							<div className="bg-gray-300 py-3 px-6 h-30 mb-3 rounded-[5px] box-glow"></div>
							<h3 className="uppercase text-glow">Digitanotion Landing Page</h3>
							<p className=" text-glow">I can improve performance, UX and SEO of existing websites.</p>
						</div>
					</Animate>
				</li>
			</ul>
				<p className="text-center mt-5"><i>Want similar results? 
					<a
						href="https://wa.me/2348105715843?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20hire%20you%20for%20a%20project"
						target="_blank"
						rel="noopener noreferrer"
						>
						<span className="text-brand link-glow ml-2">Let's Talk</span>
					</a>
				</i></p>
		</div>
	)
}

function About() {
	return (
		<div  id="about-section" className="font-mont text-white px-4 py-6 lg:grid lg:grid-cols-2 lg:px-40">
			<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
				<h2 className="uppercase mb-5 text-center text-glowing lg:text-left lg:w-full"><i>Who is Victory?</i></h2>
			</Animate>
			<Animate className="h-80 w-80 rounded-full bg-gray-400 mb-8 mx-auto lg:row-span-2 bg-white overflow-hidden profile-effect" initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
				<Image
					className="scale-120"
					src="/profile-picture.png"
					alt="Pictur of Victory Chukwuebuka, the founder of VicTech Solutions"
					width={400}
					height={0}
					priority
				/>
			</Animate>
			<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
				<p className="font-jura text-justify text-glow">My name is Okoye Victory Chukwuebuka.<br/>
				I'm from Anambra state, Nigeria and I'm a full-stack web Developer
				focused on building fast, clean, and scalable digital products.
				I care deeply about clarity, performance, and long-term value - not
				just visuals.</p>
			</Animate>
		</div>
	)
}

export function FaqAccordion() {
  return (
		<div className='p-4'>
		<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
			<h2 className="text-white text-glowing text-center">Frequently Asked Questions</h2>
		</Animate>
			<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
				<Accordion
					type="single"
					collapsible
					className="w-full text-white glass py-2 px-6 font-jura my-4 lg:w-150 m-auto"
					defaultValue="item-1"
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-glow">What services do you offer, and who are the services for?</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>
								I design and develop modern, high-performing websites that help businesses look professional,
								build trust, and convert visitors into customers.
							</p>
							<b>Services I offer include:</b>
							<ul>
								<li>Custom website design (UI/Ux)</li>
								<li>Front-end & back-end development</li>
								<li>Responsive mobile-first design</li>
								<li>Website redesigns and performance optimization</li>
								<li>Basic SEO setup and analytics integration</li>
							</ul>
							<b>These services are best suited for:</b>
							<ul>
								<li>Entrepreneurs who need a professional online presence</li>
								<li>Small to medium-sized businesses</li>
								<li>Startups and personal brands</li>
							</ul>
							<p>
								I don’t work with templates or one-size-fits-all solutions — every website is built based on your specific goals and audience.
								I also don't work on illegal websites or any website that will be or is use for internet fraud or scam.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger className="text-glow">What is your process for designing and building a website?</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>
								I follow a structured, collaborative process to ensure your website is 
								delivered on time, aligned with your goals, and easy to maintain.
							</p>
							<b>My process typically includes:</b>
							<ul>
								<li><b>Discovery & Planning</b><br/>We discuss your goals, target audience, content, and required features.</li>
								<li><b>Design</b><br/>I create a clean, user-focused design that reflects your brand and guides users effectively.</li>
								<li><b>Development</b><br/>The approved design is turned into a fast, responsive, and functional website.</li>
								<li><b>Review & Revisions</b><br/>You review the site and request adjustments where needed.</li>
								<li><b>Launch & Support</b><br/>After final approval, the site goes live, and I provide post-launch support if required.</li>
							</ul>
							<p>
								You’re involved at every key stage, so there are no surprises — only clear communication and progress.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger className="text-glow">How much does your services cost, and what affects pricing?</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>
								Pricing depends on the scope and requirements of each project, as every website is unique.
							</p>
							<p>
								I typically offer project-based pricing, which ensures you know exactly what you’re paying for upfront.
							</p>
							<b>Factors that affect pricing include:</b>
							<ul>
								<li>Number of pages</li>
								<li>Design complexity</li>
								<li>Custom features or integrations</li>
								<li>Content creation needs</li>
								<li>Timeline and delivery speed</li>
							</ul>
							<b>Every project includes:</b>
							<ul>
								<li>A custom design tailored to your brand</li>
								<li>Responsive mobile optimization</li>
								<li>Basic SEO and performance setup</li>
								<li>Clear communication and revisions</li>
							</ul>
							<p>
								If you’d like an exact quote, feel free to request a free consultation and I’ll provide a detailed estimate based on your needs.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Animate>
		</div>
  )
}


function Contact() {
	return (
		<div id="contact-section" className="font-mont text-white px-4 py-6 flex flex-col gap-10 lg:flex-row lg:px-35 lg:gap-auto">
			<div className="lg:m-auto">
				<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<h3 className="text-center text-glowing"><i>Ready to build something great?</i></h3>
					<p className="font-jura text-center text-glow">Let's discuss your project and 
					see if we're a good fit.</p>
				</Animate>
				<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<div className="w-full flex justify-evenly mt-5 font-jura gap-6">
						<a
							className="glass glass-btn link-glow box-glow text-center w-40 h-10 mt-6"
							href="https://wa.me/2348105715843?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20hire%20you%20for%20a%20project"
							target="_blank"
							rel="noopener noreferrer"
							>Chat me
						</a>
					</div>
				</Animate>
			</div>
			<div className="flex flex-col gap-5 lg:w-100 lg:ml-auto">
				<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<p className="font-jura text-glow">Mailto: victechsltns@gmail.com</p>
				</Animate>
				<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
					<ContactForm />
				</Animate>
			</div>
		</div>
	)
}
