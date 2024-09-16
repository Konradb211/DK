import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				mainGray: "#D9D9D9",
			},
		},
	},
	plugins: [],
	extend: {
		scale: {
			95: "0.95",
		},
	},
	variants: {
		extend: {
			scale: ["group-hover"],
		},
	},
}
export default config
