import { CSSProperties, FC } from 'react'
import { useIonRouter } from '@ionic/react'

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
	const nav = useIonRouter()

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
			<div className={'text-[10px]  text-[#7A7A7C] mt-1'}>
				Формат: <span className='text-black'>{grant.format}</span>
			</div>
			<div className='flex justify-between items-end mt-[-5px]'>
				<div>
					<div className={'text-[10px] mt-1 text-[#7A7A7C] flex items-baseline gap-x-1'}>
						<div className={'text-[10px]'}>Минимальный размер гранта:</div>
						<div className='text-[#1C78F5] text-[15px]'>5 000,00 ₽</div>
					</div>
					<div
						className={
							'text-[10px] mt-[-3px] text-[#7A7A7C] flex items-baseline gap-x-1'
						}>
						<div className={'text-[10px]'}>Максимальный размер гранта:</div>
						<div className='text-[#1C78F5] text-[15px]'>1 000 000,00 ₽</div>
					</div>
				</div>
				<button
					className={'blue_button w-fit h-fit px-3 py-1 text-[12px]'}
					onClick={() => nav.push(`/grant/${grant.id}`)}>
					Подробнее
				</button>
			</div>
		</div>
	)
}
