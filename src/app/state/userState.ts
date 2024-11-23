import { makeAutoObservable } from 'mobx'
import DefaultUserImage from '../../assets/images/user.png'
import { UserInfoService } from '../../entities/User/api'
import { UserInfo } from '../../entities/User/types/userInfo.ts'

export class UserState {
	public isRegistered: boolean = false
	public name: string = 'Иван Иванов'
	public image: string = DefaultUserImage

	constructor() {
		makeAutoObservable(this)
	}

	public updateData = async () => {
		const response: UserInfo = await UserInfoService.getUserInfo()
		if (response.profile_image_url !== 'https://profileimageurl.com') {
			this.image = response.profile_image_url
		}
		if (response.name) {
			this.name = response.name
		} else {
			this.name = response.username
		}
	}
}

export const userState = new UserState()
