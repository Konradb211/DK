import Image from "next/image"

const Header = () => {
	return (
		<header className='bg-mainGray pt-[60px] uppercase'>
			<div className='flex flex-col items-center max-width'>
				<h1 className=' text-[27px] font-bold '>twoja wizja nasz kod</h1>
				<h2 className=' text-2xl text-mainGray text-center custom-stroke tracking-widest'>
					kodujemy sukces
				</h2>
				<p className=' text-center pt-2 lowercase'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					facilis quisquam quidem harum illo labore dolorem quibusdam veritatis
					iste hic!
				</p>
			</div>
			<div className='relative w-[85%] h-56 mt-3 rounded-br-[40px] rounded-tr-[40px] overflow-hidden'>
				<Image
					src='/headerLaptopMini.png'
					fill={true}
					style={{ objectFit: "cover" }}
					alt='Image of laptop'
				/>
			</div>
		</header>
	)
}

export default Header
