import { Message } from '../model'
import { CSSProperties, FC } from 'react'
import { userInfoStore } from '../../../entities/User'
import BotAvatar from '../../../assets/images/bot.svg'

interface UserMessageProps {
	message: Message
	style?: CSSProperties
}

export const UserMessage: FC<UserMessageProps> = ({ message, style }) => {
	const userAvatar: string | null = userInfoStore.avatar

	return (
		<div style={style} className={'user_message message flex-row-reverse'}>
			{userAvatar && (
				<img src={userAvatar} alt='Аватар пользователя' className='user_avatar' />
			)}
			{!userAvatar && (
				<div className='bot_avatar'>
					<img src={BotAvatar} alt='Дефолтная аватарка' />
				</div>
			)}
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-end',
					marginTop: 7,
				}}>
				<div className='message_time'>{message.time}</div>
				<div className='message_text user_message_text'>{message.text}</div>
			</div>
		</div>
	)
}
