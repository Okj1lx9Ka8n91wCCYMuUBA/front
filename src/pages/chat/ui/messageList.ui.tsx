import { Message } from '../model'
import { CSSProperties, FC, useEffect, useRef } from 'react'
import { BotMessage } from './bot.message.ui.tsx'
import { UserMessage } from './user.message.ui.tsx'
import './messages.css'
import { observer } from 'mobx-react'

interface MessageProps {
	messages: Message[]
	style?: CSSProperties
}

export const MessagesList: FC<MessageProps> = observer(({ messages, style }) => {
	const messagesEndRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const scrollToBottom = () => {
			if (messagesEndRef.current) {
				messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
		scrollToBottom()
	}, [messages.length])

	return (
		<div style={style} className={'messages_list'}>
			{messages.map((message, index) => {
				if (message.sender === 'Bot') {
					return <BotMessage key={index} message={message} />
				} else {
					return <UserMessage key={index} message={message} />
				}
			})}
			<div ref={messagesEndRef} />
		</div>
	)
})