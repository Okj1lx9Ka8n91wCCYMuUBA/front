import { UserInfo } from '../types/userInfo.ts'
import { authRequest } from '../../../shared/api/authRequest.ts'

export class UserInfoService {
	static getUserInfo = async (): Promise<UserInfo> => {
		const response = await authRequest('GET', '/user/me/')
		console.log(response)
		return response
	}
}
