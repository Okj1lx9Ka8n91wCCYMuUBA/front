import axios from 'axios'
import { getFromLocalStorage } from '../hooks/useStorage.ts'

const api = axios.create({
	baseURL: 'http://45.12.136.78:8000/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
})

api.interceptors.request.use(
	async config => {
		const token = await getFromLocalStorage('TOKEN')
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
		} else {
			window.location.href = '/'
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

api.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.error('Error during request:', error)
		return Promise.reject(error)
	}
)

export const authRequest = async (method: string, url: string, params?: any) => {
	try {
		const response = await api({
			method,
			url,
			data: params,
		})
		return response.data
	} catch (error) {
		console.error('Error during request:', error)
		throw error
	}
}
