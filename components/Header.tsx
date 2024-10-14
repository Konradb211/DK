import Image from "next/image"
import Link from "next/link"

const Header = () => {
	return (
		<header className='lg:flex lg:justify-between pt-[50px] max-width mx-auto'>
			<div className='flex flex-col justify-center items-center text-center gap-[11px] lg:w-1/2 w-full'>
				<h1 className='text-[24px] sm:text-[27px] md:text-[30px] uppercase lg:text-[47.78px] font-bold text-underline z-0'>
					twoja wizja nasz kod
				</h1>
				<h2 className='text-[18px] sm:text-2xl md:text-[24px] uppercase lg:text-[39.81px] text-center lg:text-left custom-stroke secondaryFont text-white'>
					kodujemy sukces
				</h2>
				<p className='secondaryFont w-[90%] text-sm sm:text-base md:text-lg'>
					Jesteśmy dwójką pasjonatów technologii, którzy łączą swoje siły, by
					dostarczać kompleksowe rozwiązania dla Twojego biznesu. Nasza wizja to
					połączenie estetyki z funkcjonalnością, by pomóc Ci wyróżnić się w
					sieci. Z nami Twój pomysł zamieni się w rzeczywistość — niezależnie,
					czy potrzebujesz strony wizytówki, sklepu internetowego czy
					dedykowanej aplikacji.
				</p>
				<Link
					className=' bg-accent aspect-square p-2 text-2xl rounded-full '
					href='/'>
					&darr;
				</Link>
			</div>
			<div className='relative lg:w-[33%] w-[80%] h-60 lg:h-[488px] mt-3 rounded-br-[40px] lg:rounded-br-[120px] rounded-tr-[40px] lg:rounded-tr-none lg:rounded-bl-[120px] overflow-hidden'>
				<Image
					src='/images/headerLaptopMini.png'
					fill={true}
					style={{ objectFit: "cover" }}
					alt='Image of laptop'
				/>
			</div>
		</header>
	)
}

export default Header
