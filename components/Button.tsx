import React, { ReactNode } from "react"
import { text } from "stream/consumers"

interface ButtonProps {
	children: ReactNode
	color?: string
	textColor?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	color = "bg-black",
	textColor = "text-white",
}) => {
	return (
		<button
			className={`${color} ${textColor} text-xs px-[27px] py-[15px] secondaryFont rounded-[80px]`}>
			{children}
		</button>
	)
}

export default Button
