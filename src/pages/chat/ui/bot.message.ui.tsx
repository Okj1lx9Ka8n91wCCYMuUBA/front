import { Message } from '../model'
import { CSSProperties, FC } from 'react'
import BotAvatar from '../../../assets/images/bot.svg'

interface BotMessageProps {
	message: Message
	style?: CSSProperties
}

export const BotMessage: FC<BotMessageProps> = ({ message, style }) => {
	return (
		<div style={style} className={'bot_message message'}>
			<div className='bot_avatar'>
				<img src={BotAvatar} alt='Аватар бота' />
			</div>
			<div
				style={{
					marginTop: 7,
				}}>
				<div className='message_time'>{message.time}</div>
				<div className='message_text bot_message_text'>{message.text}</div>
			</div>
		</div>
	)
}
