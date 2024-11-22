import { makeAutoObservable } from 'mobx'
import { AuthMode, AuthStrategy } from '../types/authTypes.ts'
import { Email, Inn } from '../types/auth.credentials.ts'

class AuthStore {
	private authMode_: AuthMode = 'register'
	public authStrategy_: AuthStrategy = 'email'
	public registerEmail: Email
	public registerInn: Inn

	constructor() {
		makeAutoObservable(this)
	}

	public setAuthStrategy(authStrategy: AuthStrategy) {
		if (this.authStrategy_ === authStrategy) {
			return
		}
		this.authStrategy_ = authStrategy
	}

	public setAuthMode(authMode: AuthMode) {
		this.authMode_ = authMode
	}

	public get authStrategy(): AuthStrategy {
		return this.authStrategy_
	}

	public get authMode(): 'register' | 'login' {
		return this.authMode_
	}
}

let storeInstance: AuthStore

export const getAuthStore = () => {
	if (!storeInstance) {
		storeInstance = new AuthStore()
	}
	return storeInstance
}
