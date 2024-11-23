import {
	AnonymousRegisterRequest,
	AnonymousRegisterResponse,
	UserRegisterRequest,
	UserRegisterResponse,
} from '../types'
import axios from 'axios'
import { setToLocalStorage } from '../../../shared/hooks/useStorage.ts'

export class AuthService {
	static users = async (): Promise<UserRegisterResponse[]> => {
		try {
			const response = await axios.get<{ data: UserRegisterResponse[] }>('/api/users')
			return response.data.data
		} catch (error: unknown) {
			console.log(error)
			throw Error('Unknown error')
		}
	}

	static registerUser = async (
		credentials: UserRegisterRequest
	): Promise<UserRegisterResponse> => {
		try {
			const response = await axios.post<UserRegisterResponse>('/api/user/', credentials)
			return response.data
		} catch (error: unknown) {
			console.log(error)
			throw Error('Ошибка при регистрации')
		}
	}

	static anonymousRegister = async (credentials: AnonymousRegisterRequest): Promise<boolean> => {
		const response = await axios.post<AnonymousRegisterResponse>('/api/anonymous', credentials)
		await setToLocalStorage('TOKEN', response.data.access_token)
		return !!response
	}

	static loginUser = async () => {
		return 13
	}
}
