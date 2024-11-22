import {
	ChangeEvent,
	CSSProperties,
	Dispatch,
	FC,
	InputHTMLAttributes,
	SetStateAction,
} from 'react'
import { Centered } from '../../layout/Centered'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	label?: string
	labelStyle?: CSSProperties
}

export const AuthInput: FC<AuthInputProps> = ({ value, setValue, label, labelStyle, ...rest }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<div>
			<Centered>{label && <div style={labelStyle}>{label}</div>}</Centered>
			<input
				type='text'
				{...rest}
				value={value}
				onChange={handleChange}
				className='bg-[white] p-5 w-full placeholder:text-[#626262] mt-[10] text-[18px] outline-none h-[52px] border-2 border-[#EAEAEA] rounded-[20px]'
			/>
		</div>
	)
}
