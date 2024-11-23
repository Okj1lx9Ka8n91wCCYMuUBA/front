export type UserRegisterResponse = {
	id: number
	name: string
	username: string
	email: string
	profile_image_url: string
	tier_id: number | null
}

export type AnonymousRegisterResponse = {
	access_token: string
	token_type: string
	expires_at: string
}
