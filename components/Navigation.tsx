"use client"
import { Divide, Fade as Hamburger } from "hamburger-react"
import { navLinks } from "@/constant"
import Link from "next/link"
import { useState } from "react"

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<nav className='max-w-screen-xl mx-auto px-4 py-4'>
			{/* mobileNav */}
			<div className='sm:hidden'>
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
			<div className='hidden sm:flex items-center justify-center w-full'>
				<div className='flex gap-8 bg-[#b5e3ff] border-[2.8px] border-solid border-[#0AA3FF] rounded-full px-12 py-1'>
					{navLinks.map(link => (
						<Link
							key={link.title}
							href={link.href}
							className='text-base lg:text-lg xl:text-xl text-gray-800'>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</nav>
	)
}

export default Navigation
