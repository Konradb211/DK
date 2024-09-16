"use client"

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className='bg-black text-white fixed bottom-0 w-full flex justify-center py-4 sm:py-2'>
			<p className='max-w-screen-lg text-sm sm:text-base px-4 text-center'>
				Copyright &copy; {currentYear} DK Creative Web Design. All rights
				reserved.
			</p>
		</footer>
	)
}

export default Footer
