import InputClip from '../../../assets/images/clip.svg'
import './input.styles.css'
import Arrow from '../../../assets/images/Arrow.png'
import { ChangeEvent, FC, Ref, useState } from 'react'
import { messagesStore } from '../model'

interface ChatInputProps {
	disabled: boolean
	ref: Ref<any>
}

export const ChatInput: FC<ChatInputProps> = ({ disabled, ref }) => {
	const [message, setMessage] = useState<string>('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value)
	}

	const handleClick = () => {
		if (disabled || message.length === 0) {
			console.log('asdf;ajlsdf;lkasdfj')
			return
		}
		messagesStore.sendMessage(message)
		setMessage('')
		ref.scrollTo({ behavior: 'smooth', top: document.body.scrollHeight })
	}

	return (
		<div className='input_container'>
			<div className='input_left'>
				<img src={InputClip} alt={'Прикрепить файл'} />
				<input
					type='text'
					placeholder={'Напишите сообщение...'}
					disabled={disabled}
					onChange={handleInputChange}
					value={message}
				/>
			</div>
			<div className='arrow_container' onClick={handleClick}>
				<img src={Arrow} alt='Отправить' />
			</div>
		</div>
	)
}
