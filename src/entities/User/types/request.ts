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

export type GrantQuestions = {
	requested_amount: string
	grant_purpose: string
	prepared_documents: string
	patents_or_innovations: string
	previous_grants: string
	operational_regions: string
	business_size: string
	project_idea: string
	annual_revenue: string
	okved_codes: string
}
