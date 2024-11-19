import { ButtonInfo } from '../config'
import { FC } from 'react'

interface FooterIconProps {
	button: ButtonInfo
	isActive: boolean
	onClick: () => void
}

export const Icon: FC<FooterIconProps> = ({ button, isActive, onClick }) => {
	return (
		<div className={'flex flex-col items-center gap-[2px]'} onClick={onClick}>
			<img
				src={isActive ? button.active : button.inactive}
				alt={button.title}
				width={28}
				height={28}
			/>
			<div className={'text-[11px]'}>{button.title}</div>
		</div>
	)
}
