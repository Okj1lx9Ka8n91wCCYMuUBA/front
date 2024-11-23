import { FC } from 'react'

interface StatusProps {
	type: 'cool' | 'medium' | 'bad'
	title: string
}

export const Status: FC<StatusProps> = ({ type, title }) => {
	let baseStyle: string = 'text-[10px] px-2 py-[6px] rounded-[20px]  '
	if (type === 'cool') {
		baseStyle += 'bg-[#E1FFEA] text-[#07CC49]'
	}
	if (type === 'medium') {
		baseStyle += 'text-[#D88807] bg-[#FFFCE1]'
	}
	if (type === 'bad') {
		baseStyle += 'bg-[#ffd0cc] text-[#ff0000]'
	}
	return <div className={baseStyle}>{title}</div>
}
