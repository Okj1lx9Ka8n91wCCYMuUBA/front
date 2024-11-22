import { makeAutoObservable } from 'mobx'
import DefaultUserImage from '../../assets/images/user.png'

export class UserState {
	public isRegistered: boolean = false
	public name: string = 'Иван Иванов'
	public image: string = DefaultUserImage

	constructor() {
		makeAutoObservable(this)
	}
}

export const userState = new UserState()
