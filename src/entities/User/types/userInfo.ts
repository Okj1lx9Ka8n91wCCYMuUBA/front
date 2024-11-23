export type UserInfo = {
	id: number
	uuid: string
	name: string
	username: string
	email: string | null
	user_type: 'INDIVIDUAL' | 'ORGANIZATION'
	inn: string | null
	profile_image_url: string
	tier_id: null
}
