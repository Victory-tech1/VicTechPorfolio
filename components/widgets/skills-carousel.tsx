"use client"
import React from "react"

import { motion } from "framer-motion"

const skills: Array = [
	'HTML',
	'CSS',
	'Javascript',
	'Web design with Figma',
	'Adobe Illustrator Basis',
	'React JS',
	'Next.js',
	'TailwindCSS',
	'Bootstrap CSS',
	'Typescript',
	'Node JS',
	'SEO',
	'Express',
	'MongoDB',
]

export default function Skills() {
  return (
		<div className="overflow-hidden w-full pb-22 pt-8">
		<h2 className="text-center mb-15 text-brand"><i>My Tech <span className="text-glowing text-white">Stack</span></i></h2>
			<motion.div
				className="whitespace-nowrap w-max"
				animate={{ x: ["0%", "-50%"] }}
				transition={{
					repeat: Infinity,
					duration: 20,
					ease: "linear",
				}}
			>
				{skills.map((skill, index) => (
					<h5 key={index} className="w-max mx-6 font-jura box-glow inline-block px-4 py-1 text-jura text-white text-glowing glass round text-center">
					 {skill}
					</h5>
				))}
				{skills.map((skill, index) => (
					<h5 key={index} className="w-max mx-6 font-jura box-glow inline-block px-4 py-1 text-jura text-white text-glowing glass round text-center">
					 {skill}
					</h5>
				))}
			</motion.div>
		</div>
  )
}
