import Image from "next/image"
import React from "react"

const AboutUs = () => {
	return (
		<div className='max-width flex text-white justify-between flex-wrap pb-20'>
			<div className='relative lg:w-[33%] w-[80%] h-60 lg:h-[488px] rounded-br-[40px] lg:rounded-br-[120px] rounded-tr-[40px] lg:rounded-tr-none lg:rounded-bl-[120px] overflow-hidden'>
				<Image
					src='/images/headerLaptopMini.png'
					fill={true}
					style={{ objectFit: "cover" }}
					alt='Image of laptop'
				/>
			</div>
			<div className='flex items-center text-sm sm:text-base md:text-lg secondaryFont leading-relaxed text-center lg:w-1/2'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
					molestiae magnam at dolores corporis asperiores tenetur. Rerum
					assumenda debitis corporis rem itaque. Voluptates, maiores molestiae
					asperiores sit eveniet vero expedita odit ut? Accusantium rem
					voluptates quos corporis, minima quia qui dolor numquam saepe at
					explicabo porro ullam non laborum sed, provident vel. Ducimus qui
					deleniti vel aspernatur unde voluptates optio, veniam veritatis
					perferendis ut culpa assumenda reprehenderit similique excepturi odit.
				</p>
			</div>
		</div>
	)
}

export default AboutUs
