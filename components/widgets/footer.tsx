import Image from "next/image";

import Animate from "../animate"

// Import Icons
import { LuMenu } from "react-icons/lu"

export default function Navbar() {
  return (
		<footer className="text-white p-2 font-mont lg:my-10">
			<Animate initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} >
				<div className="glass p-4 px-8 lg:mx-25">
					<h2 className="mb-3 text-glowing lg:text-center"><i>Let's Connect</i></h2>
					<div className="flex flex-col gap-5 mb-5 font-jura lg:flex-row lg:gap-20">
						<div className="lg:w-[50%]">
							<div className="flex items-center gap-1 mb-3">
								<Image
									className="dark:invert text-3xl"
									src="/logo.svg"
									alt="Victory Tech logo"
									width={50}
									height={20}
									priority
								/>
								<h3 className="text-glow">VicTech Solutions</h3>
							</div>
							<p className="text-justify">
								VicTech Solutions offer innovative solutions to business and individual
								problems through web design, re-design and development. We build websites 
								that convert visitors to customers. We care deeply about the value our product 
								offer to you. Let's discuss your project and see if we're a good fit.</p>
						</div>
						<div className="lg:w-[50%] box-border flex">
							<nav className="lg:w-[50%]">
								<h3 className="mb-3">Navigation</h3>
								<ul className="flex flex-col gap-2">
									<li><a className="link-glow" href="#hero-section">Introduction</a></li>
									<li><a className="link-glow" href="#testimonials-section">Testimonial</a></li>
									<li><a className="link-glow" href="#portfolio-section">Portfolio</a></li>
									<li><a className="link-glow hidden" href="">How it works</a></li>
									<li><a className="link-glow" href="#about-section">About me</a></li>
									<li><a className="link-glow hidden" href="">Tools</a></li>
									<li><a className="link-glow" href="#contact-section">Contact</a></li>
								</ul>
							</nav>
							<div className="lg:w-[50%]">
								<h3 className="mb-3">Contact</h3>
								<ul className="flex flex-col gap-2 lg:w-max">
									<li><a className="link-glow" href="mailto:victorytechsltns@gmail.com">Gmail: victechsltns@gmail.com</a></li>
									<li><a className="link-glow" href="tel:+2348105715843">Phone: +234 810 571 5843</a></li>
									<li><a className="link-glow" 
												href="https://wa.me/2348105715843?text=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20hire%20you%20for%20a%20project"
												target="_blank"
												rel="noopener noreferrer"
												>Whatsapp: +234 810 571 5843
											</a>
									</li>
									<li><a className="link-glow"
												href="https:www.linkedin.com/in/victory-okoye"
												target="_blank"
												rel="noopener noreferrer"
											>LinkedIn</a>
									</li>
									<li><a className="link-glow"
												href="https://x.com/victechsltns?s=09"
												target="_blank"
												rel="noopener noreferrer"
											>X</a>
									</li>
									<li><a className="link-glow"
												href="https://www.instagram.com/victechsolutions?igsh=MTgzaDNhaWRqeHh3"
												target="_blank"
												rel="noopener noreferrer"
											>Instagram</a>
									</li>
									<li><a className="link-glow hidden" href="">Schedule a call</a></li>
								</ul>
							</div>
						</div>
					</div>
					<hr className=""/>
					<div className="mt-4 text-glow"><center>Copyright &copy; Victory Tech 2025.</center></div>
				</div>
			</Animate>
		</footer>
  );
}
