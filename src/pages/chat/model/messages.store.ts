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
			text: `Вот информация о компании с ИНН 7707083893:
Название: ПАО "Сбербанк"
ОГРН: 1027700132195
Дата регистрации: 10.08.1990\n
Юридический адрес: г. Москва, ул. Вавилова, д. 19\n Статус: Действующая\n
Основной вид деятельности (ОКВЭД): 64.19 
— Деятельность по предоставлению финансовых услуг, 
кроме услуг по страхованию и пенсионному обеспечению.\n
Это ваш бизнес?`,
			options: ['Да', 'Нет'],
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
		this.messages_.push({ sender: 'User', time: getCurrentTime(), text: text })
		console.log(this.messages_.length)
	}
}

export const messagesStore = new MessagesStore()
