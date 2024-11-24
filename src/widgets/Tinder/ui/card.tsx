import { FC } from 'react'
import { AxeleratorInfo } from '../types'

export const TinderCard: FC<{ axelerator: AxeleratorInfo }> = ({ axelerator }) => {
	return (
		<div className={'bg-white rounded-[10px] p-3'}>
			<img src={axelerator.img} alt={axelerator.title} />
			<div className='flex justify-between mt-3'>
				<div className='text-[14px] max-w-[50%] font-medium'>{axelerator.title}</div>
				<div className='text-[10px]'>{axelerator.time}</div>
			</div>
			<div className='mt-1 text-[#7A7A7C] text-[10px]'>{axelerator.title_description}</div>
			<div className='text-[10px] text-[#7A7A7C] mt-3'>
				Тип: <span className='text-black'>{axelerator.type}</span>
			</div>
			<div className='text-[10px] text-[#7A7A7C] mt-1'>
				Формат: <span className='text-black'>{axelerator.format}</span>
			</div>
			<div className='text-[10px] text-[#7A7A7C] mt-1'>
				Краткое описание: <span className='text-black'>{axelerator.description}</span>
			</div>

			<div className='flex items-center gap-x-[10px] mt-1'>
				<div className={'text-[10px] text=[#7A7A7C]'}>Минимальный размер гранта:</div>
				<div className={'text-[15px] text-[#1C78F5]'}>{axelerator.minGrant}</div>
			</div>

			<div className='flex items-center gap-x-[10px] mt-0'>
				<div className={'text-[10px] text=[#7A7A7C]'}>Максимальный размер гранта:</div>
				<div className={'text-[15px] text-[#1C78F5]'}>{axelerator.maxGrant}</div>
			</div>

			<div className='text-[10px] text-[#7A7A7C] mt-1'>
				Рекомендованные сроки реализации гранта:
			</div>
			<div className='text-[10px] text-black mt-[-2px]'>{axelerator.recommendedTime}</div>
		</div>
	)
}
