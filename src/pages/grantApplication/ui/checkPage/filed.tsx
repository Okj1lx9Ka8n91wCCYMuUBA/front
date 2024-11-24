import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'

interface CheckInfoField {
	data: string
	setData: Dispatch<SetStateAction<string>>
	title: string
}

export const CheckField: FC<CheckInfoField> = ({ data, setData, title }) => {
	return (
		<div>
			<div>{title}</div>
			<input
				type='text'
				value={data}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setData(e.target.value)
				}}
			/>
		</div>
	)
}
