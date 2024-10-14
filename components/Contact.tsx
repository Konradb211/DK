import React from "react"

const Contact = () => {
	return (
		<div className='max-width'>
			<form className='flex flex-wrap items-center justify-center'>
				<div className='flex flex-col gap-2'>
					<label>Skontaktuj się z nami</label>
					<input
						className='bg-mainGray rounded-3xl text-black py-2'
						type='text'
					/>
					<input
						className='bg-mainGray rounded-3xl text-black py-2'
						type='text'
					/>
				</div>
				<div className='flex flex-col'>
					<textarea className='bg-mainGray rounded-3xl text-black h-28 p-2' />
					<button>wyślij</button>
				</div>
			</form>
		</div>
	)
}

export default Contact
