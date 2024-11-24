import { makeAutoObservable } from 'mobx'
import { Message } from './messages.types.ts'
import { getCurrentTime } from '../../../shared/helpers/time.ts'

export class MessagesStore {
	private messages_: Message[] = [
		{
			sender: 'Bot',
			time: '12:15',
			text:
				'Добро пожаловать в чатбот! \n' +
				'Мы поможем вам составить бизнес-план, найти гранты или поддержку инвесторов.\n' +
				'\n' +
				'Выберите свою категорию:',
			options: ['Я только начинаю бизнес (стартаперы)', 'У меня уже есть бизнес (МСП)'],
		},
	]

	private questionAnswerMap: { [key: string]: string } = {
		'Какой ваш ИНН?': '7707083893',
		'Какие гранты доступны?': 'Гранты доступны для стартапов и малого бизнеса.',
		'Как найти инвесторов?': 'Мы поможем найти подходящих инвесторов для вашего проекта.',
	}

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

		const answer = this.questionAnswerMap[text]
		if (answer) {
			const delay = 500 + Math.random() * 200
			setTimeout(() => {
				this.messages_.push({
					sender: 'Bot',
					time: getCurrentTime(),
					text: answer,
				})
			}, delay)
		}
	}
}

export const messagesStore = new MessagesStore()
