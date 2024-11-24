import { makeAutoObservable } from 'mobx'
import { GrantDTO } from '../types'

export class GrantStore {
	public activeGrant: GrantDTO | null = null

	constructor() {
		makeAutoObservable(this)
	}
}

export const grantStore = new GrantStore()
