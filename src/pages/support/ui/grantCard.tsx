import { CSSProperties, FC } from 'react'

interface GrantCardProps {
	grant: {
		id: string
		title: string
		time: string
		organizer: string
		type: string
		format: string
		minGrant: string
		maxGrant: string
	}
	style?: CSSProperties
}

export const GrantCard: FC<GrantCardProps> = ({ grant, style }) => {
	return (
		<div style={style} className={'bg-white rounded-[10px] p-3'}>
			<div className='flex justify-between'>
				<div className='max-w-[50%] text-[14px] leading-5 '>{grant.title}</div>
				<div className={'text-[10px]'}>{grant.time}</div>
			</div>
			<div className={'text-[10px] text-[#7A7A7C] mt-1'}>{grant.organizer}</div>
			<div className={'text-[10px] mt-3 text-[#7A7A7C]'}>
				Тип: <span className='text-black'>{grant.type}</span>
			</div>
			<div className={'text-[10px] mt-0 text-[#7A7A7C]'}>
				Формат: <span className='text-black'>{grant.format}</span>
			</div>
			<div className='flex justify-between items-end mt-[-5px]'>
				<div>
					<div className={'text-[10px] mt-0 text-[#7A7A7C]'}>
						Минимальный размер гранта:{' '}
						<span className='text-[#1C78F5]'>{grant.minGrant}</span>
					</div>
					<div className={'text-[10px] mt-0 text-[#7A7A7C]'}>
						Максимальный размер гранта:{' '}
						<span className='text-[#1C78F5]'>{grant.maxGrant}</span>
					</div>
				</div>
				<button className={'blue_button w-fit h-fit px-3 py-1 text-[12px]'}>
					Подробнее
				</button>
			</div>
		</div>
	)
}
