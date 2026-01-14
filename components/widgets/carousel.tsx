"use client"
import * as React from "react"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export function CarouselPlugin() {
	
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
	
	const qualities = [
		{
			text: "I design websites that are built to convert visitors into customers.",
		},
		{
			text: "I communicate clearly, meet deadlines, and keep you updated at every stage.",
		},
		{
			text: "I'm transparent about pricing, timelines, and what you actually need - no upselling, no surprises (except the result).",
		},
		{
			text: "Before I build anything, I understand your business goals and design the site around them.",
		},
	]
	
  return (
		<div className="px-15 lg:px-25">
			<h2 className="text-center lg:text-left my-5 text-brand"><i>Why Choose <span className="text-glowing text-white">VicTech</span>?</i></h2>
			<Carousel
				opts={{
					align: "center",
					loop: true,
				}}
				plugins={[plugin.current]}
				className="w-full m-auto"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{qualities.map((quality, index) => (
						<CarouselItem className="m-auto pl-1 md:basis-1/2 lg:basis-1/3 pl-4" key={index}>
							<div className="p-1">
								<QualityCard text={quality.text} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
  );
}

function QualityCard( props ) {
	return (
		<div className='text-white glass font-jura py-2 px-4'>
			<p className="text-justify text-glow">{props.text}</p>
		</div>
	);
}