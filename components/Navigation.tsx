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
			<div className='hidden sm:flex justify-between w-full'>
				<h2 className='text-lg font-semibold'>logo</h2>
				<div className='flex gap-8'>
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
