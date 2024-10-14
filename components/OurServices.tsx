import React from "react"
import { services } from "@/constant"
import Image from "next/image"
import Button from "./Button"

const OurServices = () => {
	return (
		<div className='max-width'>
			{services.map((service, index) => (
				<div
					key={service.text}
					className='flex flex-col lg:flex-row lg:even:justify-between gap-[50px] items-center lg:even:flex-row-reverse mb-10 px-5 lg:px-0'>
					<div className='w-full max-w-[371px]'>
						<Image
							src={service.src}
							alt={service.alt}
							width={371}
							height={193}
							className={`object-cover ${
								index === 0
									? " lg:rounded-bl-[80px] lg:rounded-br-[80px] lg:rounded-tl-0 lg:rounded-tr-0 "
									: "lg:rounded-[80px]"
							}`}
						/>
					</div>

					<div className='text-center lg:text-left'>
						<h3 className='text-xl md:text-2xl lg:text-[33.18px] uppercase leading-tight'>
							{service.title}
						</h3>
						<p className='mt-4 lg:w-[80%] text-[12px] sm:text-base md:text-lg secondaryFont leading-relaxed'>
							{service.text}
						</p>
						<div className='mt-6'>
							<Button>Dowiedz się więcej</Button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default OurServices
