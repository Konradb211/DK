import { sitemap } from "@/constant"
import Link from "next/link"
import React from "react"

const Sitemap = () => {
	return (
		<div className=' max-width flex flex-wrap text-center lg:text-left justify-center gap-12 py-10 '>
			<div className='flex flex-col gap-2 space-y-2'>
				{sitemap.slice(0, 4).map(item => (
					<div key={item.href}>
						<Link className={`text-base`} href={item.href}>
							{item.text}
						</Link>
					</div>
				))}
			</div>

			<div className='flex flex-col gap-2 space-y-2'>
				{sitemap.slice(4, 8).map(item => (
					<div key={item.href}>
						<Link className={`text-base`} href={item.href}>
							{item.text}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Sitemap
