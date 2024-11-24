import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

interface CheckInfoField {
	data: string
	setData: Dispatch<SetStateAction<string>>
	title: string
}

export const CheckField: FC<CheckInfoField> = ({ data, setData, title }) => {
	return (
		<div className='w-full'>
			<div className='text-[18px] font-light'>{title}</div>
			<input
				type='text'
				className='w-full text-[#7A7A7C] outline-none pb-[5px] mt-[7px] border-b-[1px] border-b-[#EAEAEA]'
				value={data}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setData(e.target.value)
				}}
			/>
		</div>
	)
}
