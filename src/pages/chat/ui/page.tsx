import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import MenuIcon from '../../../assets/images/SupportHuman.png'
import './page.styles.css'
import { ChatInput } from './input.ui.tsx'
import { messagesStore } from '../model'
import { MessagesList } from './messageList.ui.tsx'
import { observer } from 'mobx-react'
import { Footer } from '../../../shared/layout/Footer'
import Modal from 'react-modal'
import { useState } from 'react'
import { Centered } from '../../../shared/layout/Centered'
import { Inline } from '../../../shared/layout/Inline'

export const ChatPage = observer(() => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)

	return (
		<>
			<IonPage style={{ height: '', position: 'relative', background: '#F9F9F9' }}>
				<Content style={{ height: 'calc(100vh - 154px)' }}>
					<div className='header_container'>
						<div className='header_spacer'></div>
						<div className='header_title'>Чат-бот</div>
						<div className='header_button' onClick={openModal}>
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

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={{
						overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
						content: {
							width: '300px',
							height: '531px',
							margin: 'auto',
							borderRadius: '14px',
							background: '#fff',
							border: 'none',
							padding: 17,
							outline: 'none',
						},
					}}
					ariaHideApp={false}>
					<Centered>
						<div className='text-[18px]'>
							Менеджер
							<br />
							Поддержки
						</div>
					</Centered>
					<div className='p-3 mt-6' style={{ boxShadow: '2px 0px 12.5px 0px #8D8D8D40' }}>
						<div>Анализ шансов на успех</div>
						<div className={'mt-1 text-[12px] text-[#7A7A7C]'}>
							Какое-то описание Какое-то описание Какое-то описание Какое-то описание
							Какое-то описание Какое-то описание
						</div>
						<Inline
							justify={'space-between'}
							style={{ marginTop: 8 }}
							align={'flex-end'}>
							<div className={'text-[14px]'}>
								Цена: <span className='text-[#1C78F5]'>2500 ₽</span>
							</div>
							<button className='blue_button w-[92px] h-7 text-[12px]'>
								Подробнее
							</button>
						</Inline>
					</div>

					<div
						className='p-3 mt-2.5'
						style={{ boxShadow: '2px 0px 12.5px 0px #8D8D8D40' }}>
						<div>Сбор и оформление документов</div>
						<div className={'mt-1 text-[12px] text-[#7A7A7C]'}>
							Какое-то описание Какое-то описание Какое-то описание Какое-то описание
							Какое-то описание Какое-то описание
						</div>
						<Inline
							justify={'space-between'}
							style={{ marginTop: 8 }}
							align={'flex-end'}>
							<div className={'text-[14px]'}>
								Цена: <span className='text-[#1C78F5]'>3000 ₽</span>
							</div>
							<button className='blue_button w-[92px] h-7 text-[12px]'>
								Подробнее
							</button>
						</Inline>
					</div>
				</Modal>
			</IonPage>
			<Footer />
		</>
	)
})
