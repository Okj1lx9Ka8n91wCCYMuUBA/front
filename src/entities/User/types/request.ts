export type UserRegisterRequest = {
	name: string
	username: string
	email: string
	password: string
}

export type AnonymousRegisterRequest = {
	device_uuid: string
}
