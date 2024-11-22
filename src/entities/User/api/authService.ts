import { UserRegisterRequest, UserRegisterResponse } from '../types'
import axios from 'axios'

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

	static loginUser = async () => {
		return 13
	}
}
