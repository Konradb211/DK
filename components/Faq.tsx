"use client"
import { faq } from "@/constant"
import React, { useState } from "react"

const Faq = () => {
	const [activeItem, setActiveItem] = useState<number | null>(0)

	const handleChangeText = (index: number) => {
		setActiveItem(prev => (prev === index ? null : index))
	}

	return (
		<div className='max-width mx-auto mb-28 flex flex-col bg-[#EDF9FF] rounded-tl-[60px] rounded-tr-[60px] mt-[33px] secondaryFont'>
			<div className='flex flex-col lg:flex-row lg:space-x-2 items-center justify-center gap-2 lg:gap-0 lg:justify-start'>
				{faq.map((item, index) => (
					<div
						key={index}
						className='w-full lg:w-[20%] flex flex-col items-center'>
						<button
							onClick={() => handleChangeText(index)}
							className={`w-[90%] lg:w-full h-[90px] px-4 py-3 text-[13.33px] transition-colors duration-300 ${
								activeItem === index
									? "bg-accent text-black"
									: "bg-black text-white"
							}
							${index === 0 ? "lg:rounded-l-full" : ""}
              				${index === faq.length - 1 ? "lg:rounded-r-full" : ""}`}>
							{item.title}
						</button>
						{activeItem === index && (
							<div className='rounded-[20px] w-[90%] lg:hidden p-4 transition-all duration-500'>
								<p className='text-sm sm:text-base md:text-lg leading-relaxed'>
									{item.text}
								</p>
							</div>
						)}
					</div>
				))}
			</div>
			<div className='hidden lg:block mt-4'>
				{activeItem !== null && (
					<div className='rounded-[20px] p-6 transition-all duration-500'>
						<p className='text-sm'>{faq[activeItem].text}</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Faq
