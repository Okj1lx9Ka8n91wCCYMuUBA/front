import ChatIcon from '../../../assets/images/chat.svg'
import DocumentsIcon from '../../../assets/images/documents.svg'
import MainPageIcon from '../../../assets/images/main.svg'
import ProfileIcon from '../../../assets/images/profile.svg'

export type ButtonInfo = {
	title: string
	active: string
	inactive: string
	url: string
}

export const buttons: ButtonInfo[] = [
	{ title: 'Главная', active: MainPageIcon, inactive: MainPageIcon, url: '/main' },
	{ title: 'Документы', active: DocumentsIcon, inactive: DocumentsIcon, url: '/docs' },
	{ title: 'Чат-бот', active: ChatIcon, inactive: ChatIcon, url: '/chat' },
	{ title: 'Профиль', active: ProfileIcon, inactive: ProfileIcon, url: '/profile' },
]
