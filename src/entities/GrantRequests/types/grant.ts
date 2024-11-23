export type UserGrant = {
	title: string
	description: string
	overallTime: string
	eventApplication: {
		time: string
		status: 'Участие подтверждено' | 'В обработке' | 'Отозвана'
	}
	grantApplication: {
		time: string
		status: 'Участник'
	}
}
