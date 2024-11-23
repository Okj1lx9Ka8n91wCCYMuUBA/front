export type UserRegisterRequest = {
	name: string
	username: string
	email: string
	password: string
	user_type: 'INDIVIDUAL'
}

export type CompanyRegisterRequest = {
	inn: string
	phone: string
	username: string
	password: string
	user_type: 'ORGANIZATION'
}

export type UserLoginRequest = {
	username: string
	password: string
}

export type AnonymousRegisterRequest = {
	device_uuid: string
}
