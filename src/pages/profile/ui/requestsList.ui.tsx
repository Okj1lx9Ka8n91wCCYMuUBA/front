import { useEffect, useState } from 'react'
import { GrantRequestsService, UserGrant } from '../../../entities/GrantRequests'
import { Status } from './status.ui.tsx'

export const RequestsList = () => {
	const [requests, setRequests] = useState<UserGrant[]>([])

	useEffect(() => {
		const getRequests = async () => {
			console.log('фетчим данные')
			setRequests(await GrantRequestsService.getUsersGrants())
		}

		getRequests()
	}, [])

	return (
		<div className={'mt-[30px]'}>
			{requests.map(request => {
				return (
					<div className='py-4 px-[10px] bg-white rounded-[10px]'>
						<div className='flex justify-between'>
							<div className='text-[14px] font-medium'>{request.title}</div>
							<div className='text-[12px]'>{request.overallTime}</div>
						</div>
						<div className='mt-[5px] text-[#7A7A7C] text-[10px]'>
							{request.description}
						</div>
						<div className='flex justify-between mt-3'>
							<div>
								<div className='text-[10px]'>Заявка на мероприятие подана</div>
								<div className='text-[10px] text-[#1C78F5]'>
									{request.eventApplication.time}
								</div>
							</div>
							<Status type={'cool'} title={request.eventApplication.status}></Status>
						</div>
						<div className='flex justify-between mt-2'>
							<div>
								<div className='text-[10px]'>
									Заявка на грантовый конкурс подана
								</div>
								<div className='text-[10px] text-[#1C78F5]'>
									{request.grantApplication.time}
								</div>
							</div>
							<Status
								type={
									request.grantApplication.status === 'Отозвана'
										? 'medium'
										: 'cool'
								}
								title={request.grantApplication.status}></Status>
						</div>
					</div>
				)
			})}
		</div>
	)
}
