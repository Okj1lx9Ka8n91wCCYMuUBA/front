import MainWhite from '../../../../assets/images/main.svg'
import MainBlack from '../../../../assets/images/MainBlack.svg'
import SupportWhite from '../../../../assets/images/SupportWhite.svg'
import SupportBlack from '../../../../assets/images/SupportBlack.png'
import ChatWhite from '../../../../assets/images/ChatWhite.png'
import ChatBlack from '../../../../assets/images/chat.svg'
import ProfileWhite from '../../../../assets/images/profile.svg'
import ProfileBlack from '../../../../assets/images/ProfileBlack.svg'

export type ButtonInfo = {
	title: string
	active: string
	inactive: string
	url: string
}

export const buttons: ButtonInfo[] = [
	{ title: 'Главная', active: MainBlack, inactive: MainWhite, url: '/main' },
	{ title: 'Поддержка', active: SupportBlack, inactive: SupportWhite, url: '/support' },
	{ title: 'Чат-бот', active: ChatBlack, inactive: ChatWhite, url: '/chat' },
	{ title: 'Профиль', active: ProfileBlack, inactive: ProfileWhite, url: '/profile' },
]
