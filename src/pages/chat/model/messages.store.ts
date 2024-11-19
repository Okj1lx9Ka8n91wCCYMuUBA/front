import { makeAutoObservable } from 'mobx'
import { Message } from './messages.types.ts'

export class MessagesStore {
	private messages_: Message[] = [
		{
			sender: 'User',
			text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
			time: '12:17',
		},
		{ sender: 'Bot', text: 'Какой-то еще супер крутой текст, пампампам', time: '12:18' },
	]

	constructor() {
		makeAutoObservable(this)
	}

	public get messages(): Message[] {
		return this.messages_
	}
}

export const messagesStore = new MessagesStore()
