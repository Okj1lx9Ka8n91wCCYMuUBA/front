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
		status: 'Участник' | 'Отозвана'
	}
}

export interface GrantDTO {
	id: string
	image_url: string
	grant_min: string
	grant_max: string
	documents: string
	title: string
	description: string
	implementation_period: string
	competition_name: string
	contacts: string
	url: string
	created_at: string
}
