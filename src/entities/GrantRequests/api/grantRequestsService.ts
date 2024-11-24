import { UserGrant } from '../types'

export class GrantRequestsService {
	static getUsersGrants = async (): Promise<UserGrant[]> => {
		return [
			{
				title: 'Гранты Первых',
				description: 'Российское движение детей и молодёжи «Движение первых»',
				overallTime: '30.08.2024-29.11.2024',
				eventApplication: { time: '15.08.2024', status: 'Участие подтверждено' },
				grantApplication: { time: '16.08.2024', status: 'Отозвана' },
			},
			{
				title: 'Молодежный слет "Поколение Z"',
				description: 'Конкурс Росмолодёжь.Гранты',
				overallTime: '25.10.2024-27.10.2024',
				eventApplication: { time: '20.10.2024', status: 'Участие подтверждено' },
				grantApplication: { time: '23.10.2024', status: 'Участник' },
			},
		]
	}
}
