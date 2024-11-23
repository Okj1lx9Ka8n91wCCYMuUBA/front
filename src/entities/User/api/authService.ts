import {
	AnonymousRegisterRequest,
	AnonymousRegisterResponse,
	CompanyRegisterRequest,
	UserAuthResponse,
	UserLoginRequest,
	UserRegisterRequest,
} from '../types'
import axios from 'axios'
import { setToLocalStorage } from '../../../shared/hooks/useStorage.ts'
import { stringify } from 'qs'

export class AuthService {
	static users = async (): Promise<UserAuthResponse[]> => {
		try {
			const response = await axios.get<{ data: UserAuthResponse[] }>('/api/users')
			return response.data.data
		} catch (error: unknown) {
			console.log(error)
			throw Error('Unknown error')
		}
	}

	static registerUser = async (credentials: UserRegisterRequest): Promise<boolean> => {
		try {
			// const response = await axios.post<UserAuthResponse>('/api/user/', credentials)
			await setToLocalStorage('TOKEN', 'adfadfadlf')
			return true
		} catch (error: unknown) {
			console.log(error)
			return false
		}
	}

	static registerCompany = async (credentials: CompanyRegisterRequest): Promise<boolean> => {
		try {
			// const response = await axios.post<UserAuthResponse>('/api/user/', credentials)
			await setToLocalStorage('TOKEN', '123123123123')
			return true
		} catch (error: unknown) {
			console.log(error)
			return false
		}
	}

	static anonymousRegister = async (credentials: AnonymousRegisterRequest): Promise<boolean> => {
		// const response = await axios.post<AnonymousRegisterResponse>('/api/anonymous', credentials)
		await setToLocalStorage('TOKEN', '123123123123')
		// return !!response
		return true
	}

	static loginUser = async (credentials: UserLoginRequest): Promise<boolean> => {
		try {
			const response = await axios.post<UserAuthResponse>(
				'/api/login',
				stringify(credentials)
			)
			await setToLocalStorage('TOKEN', response.data.access_token)
			return true
		} catch (error: unknown) {
			console.log(error)
			return false
		}
	}
}
