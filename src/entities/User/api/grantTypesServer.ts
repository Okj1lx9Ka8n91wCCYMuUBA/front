import { authRequest } from '../../../shared/api/authRequest.ts'
import { GrantQuestions } from '../types'

export class GrantTypeService {
	static createQuestions = async (credentials: GrantQuestions): Promise<boolean> => {
		try {
			const response = await authRequest('POST', '/grant-questions', credentials)
			console.log(response)
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}
}
