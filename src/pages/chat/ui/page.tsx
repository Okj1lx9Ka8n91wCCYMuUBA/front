import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import MenuIcon from '../../../assets/images/menu.svg'
import './page.styles.css'
import { ChatInput } from './input.ui.tsx'
import { messagesStore } from '../model'
import { MessagesList } from './messageList.ui.tsx'
import { observer } from 'mobx-react'
import { useRef } from 'react'

export const ChatPage = observer(() => {
	const contentRef = useRef(null)

	return (
		<IonPage style={{ height: 'calc(100vh)', position: 'relative', background: '#F9F9F9' }}>
			<Content style={{ height: 'calc(100vh - 170px)' }} ref={contentRef}>
				<div className='header_container'>
					<div className='header_spacer'></div> {/* Добавляем пустой элемент */}
					<div className='header_title'>Чат-бот</div>
					<div className='header_button'>
						<img src={MenuIcon} alt='Меню' />
					</div>
				</div>
				<div className='main-content'>
					<MessagesList messages={messagesStore.messages} />
				</div>
			</Content>
			<div className='footer'>
				<ChatInput disabled={false} />
			</div>
		</IonPage>
	)
})
