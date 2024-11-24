import { makeAutoObservable } from 'mobx'
import { UserInfoService } from '../../entities/User/api'
import { UserInfo } from '../../entities/User/types/userInfo.ts'
import UserImage from '../../assets/Mock/621ee3bb-e645-4366-9c3b-ca68fe7032e3.jpeg'

export class UserState {
	public isRegistered: boolean = true
	public name: string = 'Артем Лигостаев'
	public image: string = UserImage

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
