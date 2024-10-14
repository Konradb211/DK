import React from "react"
interface Title {
	children: React.ReactNode
}
const Title = ({ children }: Title) => {
	return <h2 className='text-[39.81px] uppercase max-width'>{children}</h2>
}

export default Title
