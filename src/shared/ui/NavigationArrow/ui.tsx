import { CSSProperties, FC } from 'react'
import Arrow from '../../../assets/images/BackArrow.svg'

interface ArrowProps {
	direction: 'left' | 'right'
	onClick: () => void
	style?: CSSProperties
}

export const NavigationArrow: FC<ArrowProps> = ({ direction, onClick }) => {
	return (
		<img
			src={Arrow}
			alt={direction === 'left' ? 'Go back' : 'Go forward'}
			style={{ transform: `rotate(${direction === 'left' ? 0 : 180}deg)` }}
			onClick={onClick}
		/>
	)
}
