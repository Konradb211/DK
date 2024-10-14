import { pagesData } from "@/constant"
import Image from "next/image"
const GrafficProjects = () => {
	return (
		<div className='max-width'>
			<div className='pb-10'>
				<h2 className='text-[39.81px] pb-5'>Jak możemy ci pomóc?</h2>
				<p className='secondaryFont max-w-[723px]'>
					Zajmiemy się wszystkim, od logotypów po grafiki na social media – bo
					Twoja marka zasługuje na to, żeby wyglądać świetnie i przyciągać
					uwagę. Z nami nie ma miejsca na nudę, tylko kreatywne, skrojone na
					miarę projekty, które idealnie oddadzą charakter Twojej firmy!
				</p>
			</div>
			<div className='flex flex-wrap justify-between pb-20'>
				{pagesData.map(data =>
					data.helpContainer?.map(items => (
						<div key={items.alt}>
							<Image src={items.src} alt={items.alt} width={240} height={175} />
							<div
								key={items.text}
								className=' flex items-center justify-center w-[240px] h-[75px] bg-[#F3F0F0] rounded-b-[40px] shadow-[0_5px_25px_rgba(0,0,0,0.3)]'>
								<p className='secondaryFont'>{items.text}</p>
							</div>
						</div>
					))
				)}
			</div>
			<div className='mb-20'>
				{pagesData.map(data =>
					data.questionContainer?.map((items, index) => (
						<div key={index} className={`flex pb-5 w-full`}>
							<div className='shadow-[0_5px_25px_rgba(0,0,0,0.3)] w-ful'>
								<Image
									src={items.src}
									alt={items.alt}
									width={451}
									height={209}
									className='w-[900px] h-[250px] object-cover'
								/>
							</div>
							<div className=' w-full shadow-[0_5px_25px_rgba(0,0,0,0.3)] pl-8 pr-24 bg-[#F3F0F0]'>
								<h2 className='pt-6 pb-5 text-2xl'>{items.title}</h2>
								<p className=' max-w-[800px] secondaryFont'>{items.text}</p>
							</div>
							<div className='bg-accent px-6 ' />
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default GrafficProjects
