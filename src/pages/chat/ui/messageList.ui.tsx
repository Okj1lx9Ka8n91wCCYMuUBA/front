import { Message } from '../model'
import { CSSProperties, FC } from 'react'
import { BotMessage } from './bot.message.ui.tsx'
import { UserMessage } from './user.message.ui.tsx'
import './messages.css'
import { observer } from 'mobx-react'

interface MessageProps {
	messages: Message[]
	style?: CSSProperties
}

export const MessagesList: FC<MessageProps> = observer(({ messages, style }) => {
	return (
		<div style={style} className={'messages_list'}>
			{messages.map(message => {
				if (message.sender === 'Bot') {
					return <BotMessage message={message} />
				} else {
					return <UserMessage message={message} />
				}
			})}
		</div>
	)
})
