import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { CustomOption } from './custom.option.ui'

interface CustomSelectProps {
	options: { value: string; label: string }[]
	value: string
	onChange: (value: string) => void
	style?: React.CSSProperties
	placeholder?: string
}

const SelectContainer = styled.div`
	position: relative;
	font-size: 13px;
	width: 100%;
`

const OptionsList = styled.div`
	position: absolute;
	top: 100%;
	margin-top: 10px;
	border: 1px solid gray;
	left: 0;
	width: 100%;
	background-color: white;
	z-index: 10;
`

const SelectedOption = styled.div`
	border-radius: 22px;
	display: flex;
	align-items: center;
	padding-left: 25px;
	color: gray;
	font-size: 18px;
	height: 52px;
	border: 1px solid lightgray;
	cursor: pointer;
`

export const CustomSelect: React.FC<CustomSelectProps> = ({
	options,
	value,
	onChange,
	style,
	placeholder,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement | null>(null) // Create a ref for the select

	const selectedOption = options.find(option => option.value === value)

	const handleOptionClick = (value: string) => {
		onChange(value)
		setIsOpen(false)
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<SelectContainer ref={selectRef} style={style}>
			<SelectedOption onClick={() => setIsOpen(!isOpen)}>
				{selectedOption ? selectedOption.label : placeholder || 'Не указано'}
			</SelectedOption>
			{isOpen && (
				<OptionsList>
					{options.map(option => (
						<CustomOption
							key={option.value}
							value={option.value}
							label={option.label}
							onClick={handleOptionClick}
						/>
					))}
				</OptionsList>
			)}
		</SelectContainer>
	)
}
