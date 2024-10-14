"use client"
import { Divide, Fade as Hamburger } from "hamburger-react"
import { navLinks } from "@/constant"
import Link from "next/link"
import { useState } from "react"

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<nav className=' bg-white fixed top-0 left-0 right-0 px-2 z-10 border-b-black border-[1px] '>
			{/* mobileNav */}
			<div className='sm:hidden max-width'>
				<div className='flex items-center justify-between w-full'>
					<h2 className='text-lg font-semibold'>logo</h2>
					<Hamburger duration={0.2} toggled={isOpen} toggle={setIsOpen} />
				</div>
				{isOpen && (
					<div className='flex flex-col mt-4 space-y-4'>
						{navLinks.map(link => (
							<Link
								className='text-lg text-gray-800'
								key={link.title}
								href={link.href}>
								{link.title}
							</Link>
						))}
					</div>
				)}
			</div>

			{/* desktopNav */}
			<div className='hidden sm:flex items-center justify-between w-full max-width group'>
				<h2>logo</h2>
				<div className='flex'>
					{navLinks.map(link => (
						<Link
							key={link.title}
							href={link.href}
							className='text-base lg:text-lg xl:text-xl text-gray-800 hover:bg-accent py-4 px-7 rounded transition-all duration-300 group-hover:scale-95 hover:!scale-100 hover:font-medium scale-100'>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Navigation
