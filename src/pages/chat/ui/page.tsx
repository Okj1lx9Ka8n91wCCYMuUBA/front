import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import MenuIcon from '../../../assets/images/menu.svg'
import './page.styles.css'
import { ChatInput } from './input.ui.tsx'
import { messagesStore } from '../model'
import { MessagesList } from './messageList.ui.tsx'

export const ChatPage = () => {
	return (
		<IonPage style={{ height: 'calc(100vh - 75px)' }}>
			<Content className='h-full'>
				<div className='header_container'>
					<div className='header_spacer'></div> {/* Добавляем пустой элемент */}
					<div className='header_title'>Чат-бот</div>
					<div className='header_button'>
						<img src={MenuIcon} alt='Меню' />
					</div>
				</div>
				<div className='main-content'></div>
				<div className='footer'>
					<div className={''}>
						<ChatInput />
					</div>
				</div>
				<MessagesList messages={messagesStore.messages} />
			</Content>
		</IonPage>
	)
}
