import { FC } from 'react'

interface ProgressIndicatorProps {
	currentIndex: number
	totalCards: number
}

export const ProgressIndicator: FC<ProgressIndicatorProps> = ({ currentIndex, totalCards }) => {
	return (
		<div className='flex justify-center mt-4'>
			{Array.from({ length: totalCards }).map((_, index) => (
				<div
					key={index}
					className={`w-2 h-2 mx-1 rounded-full ${index <= currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
				/>
			))}
		</div>
	)
}
