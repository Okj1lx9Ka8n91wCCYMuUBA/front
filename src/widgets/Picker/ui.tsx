import { FC, ReactNode, useState } from 'react'
import './style.css'

interface PickerProps {
	blocks: { title: string; elements: ReactNode }[]
}

export const Picker: FC<PickerProps> = ({ blocks }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	return (
		<>
			<div className={'flex px-1 gap-x-6 items-center overflow-x-auto py-1'}>
				{blocks.map((block, index) => {
					return (
						<div
							style={{ whiteSpace: 'nowrap' }}
							className={index === activeIndex ? 'active_tab' : 'tab'}
							onClick={() => setActiveIndex(index)}>
							{block.title}
						</div>
					)
				})}
			</div>
			{blocks[activeIndex].elements}
		</>
	)
}
