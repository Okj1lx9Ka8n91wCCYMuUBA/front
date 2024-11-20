import { makeAutoObservable } from 'mobx'
import { Message } from './messages.types.ts'
import {getCurrentTime} from "../../../shared/helpers/time.ts";

export class MessagesStore {
	private messages_: Message[] = [
		{
			sender: 'User',
			text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
			time: '12:17',
		},
		{
			sender: 'Bot',
			text: 'Какой-то еще супер крутой текст, пампампам',
			time: '12:18',
			options: ['Да', 'Нет'],
		},
		{
			sender: 'Bot',
			text: 'Какой-то еще супер крутой текст, пампампам',
			time: '12:18',
			options: ['Я только начинаю бизнес (стартаперы)', 'У меня уже есть бизнес (МСП)'],
		},
	]

	constructor() {
		makeAutoObservable(this)
	}

	public get messages(): Message[] {
		return this.messages_
	}

	public get lastMessage(): Message | null {
		if (this.messages_.length === 0) {
			return null
		}
		return this.messages_[this.messages_.length - 1]
	}

	public sendMessage(text: string) {
		this.messages_.push({ sender: 'User', time: getCurrentTime(), text: text })
		console.log(this.messages_.length)
	}
}

export const messagesStore = new MessagesStore()
