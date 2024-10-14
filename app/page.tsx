import {
	AboutUs,
	Contact,
	Faq,
	Header,
	OurServices,
	Sitemap,
	Title,
} from "@/components"

export default function Home() {
	return (
		<>
			<div className='bg-[url("/images/background.png")] bg-no-repeat'>
				<Header />
				<Title>
					Nasze <span className='custom-stroke text-white'>usługi</span>
				</Title>
				<main>
					<OurServices />
					<Title>
						O <span className='custom-stroke text-white'>nas</span>
					</Title>
					<div className='bg-black'>
						<AboutUs />
					</div>
					<div className='mt-20'>
						<Title>faq</Title>
						<Faq />
					</div>
					<div className=' flex flex-wrap items-center secondaryFont text-white bg-black'>
						<Sitemap />
						<Contact />
					</div>
				</main>
			</div>
		</>
	)
}
