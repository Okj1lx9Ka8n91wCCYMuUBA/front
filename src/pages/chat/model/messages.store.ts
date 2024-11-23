import { makeAutoObservable } from 'mobx'
import { Message } from './messages.types.ts'
import { getCurrentTime } from '../../../shared/helpers/time.ts'

export class MessagesStore {
	private messages_: Message[] = [
		{
			sender: 'Bot',
			text: `Добро пожаловать в чатбот! 
Мы поможем вам составить бизнес-план,
найти гранты или поддержку инвесторов.
Введите ИНН.`,
			time: '12:18',
			options: [],
		},
		{
			sender: 'User',
			text: '7707083893',
			time: '12:19',
		},
		{
			sender: 'Bot',
			text: 'ПАО "Сбербанк" это ваш бизнес',
			options: ['Да', 'Нет'],
			time: '12:20',
		},
		{
			sender: 'User',
			text: 'Да',
			time: '12:20',
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
		console.log(this.messages_)
		this.messages_.push({ sender: 'User', time: getCurrentTime(), text: text })
		console.log(this.messages_.length)
	}
}

// VCQ: Ваш помощник в поиске грантов, субсидий и безнес-поддержки
// VCQ - это современная платформа, предназначенная для помощи малому и среднему бизнесу (МСБ) в России. Основная цель - предоставить предпринимателям удобный и эффективный инструмент для поиска и использования финансовой поддержки (грантов, субсидий, льготных акселераторов).

export const messagesStore = new MessagesStore()
