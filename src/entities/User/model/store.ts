import { makeAutoObservable } from 'mobx'

export class UserInfoStore {
	private avatar_: string | null = null

	constructor() {
		makeAutoObservable(this)
	}

	public get avatar(): string | null {
		return this.avatar_
	}
}

export const userInfoStore = new UserInfoStore()
