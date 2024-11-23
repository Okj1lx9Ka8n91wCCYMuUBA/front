import React from 'react'
import styled from 'styled-components'

interface CustomOptionProps {
	value: string
	label: string
	onClick: (value: string) => void
}

const OptionContainer = styled.div`
	padding: 8px 12px;
	cursor: pointer;
	height: 30px;
	font-size: 13px;
	background-color: black;
	font-weight: 300;
	transition: background-color 0.2s ease;

	&:not(:first-child) {
		border-top: 1px solid lightgray;
	}
`

export const CustomOption: React.FC<CustomOptionProps> = ({ value, label, onClick }) => {
	return <OptionContainer onClick={() => onClick(value)}>{label}</OptionContainer>
}
