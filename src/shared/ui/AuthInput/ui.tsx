import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string
	setValue: Dispatch<SetStateAction<string>>
	label?: string
}

export const AuthInput: FC<AuthInputProps> = ({ value, setValue, label, ...rest }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<>
			{label && <div>{label}</div>}
			<input
				type='text'
				{...rest}
				value={value}
				onChange={handleChange}
				className='bg-[#F1F4FF] p-5 w-full placeholder:text-[#626262] focus:outline-1 focus:outline-[#1F41BB] text-[16px] rounded-[10px]'
			/>
		</>
	)
}
