import { FC } from 'react'
import { messagesStore } from '../model'

interface MessageOptionsProps {
	options: string[]
	isWorking: boolean
}

export const BotMessageOptions: FC<MessageOptionsProps> = ({ options, isWorking }) => {
	const handleChooseOption = (option: string) => {
		console.log(option, 'gegegege')
		if (!isWorking) {
			return
		} else {
			messagesStore.sendMessage(option)
		}
	}

	if (options.length == 2 && options.every(option => option.length <= 5)) {
		return (
			<div className='short_options_container'>
				<div
					className='short_option'
					key={options[0]}
					onClick={() => handleChooseOption(options[0])}>
					{options[0]}
				</div>
				<div
					className='short_option'
					key={options[1]}
					onClick={() => handleChooseOption(options[1])}>
					{options[1]}
				</div>
			</div>
		)
	}

	return (
		<div className='long_options_container'>
			{options.map(option => {
				return (
					<div
						className='short_option long_option'
						onClick={() => handleChooseOption(option)}>
						{option}
					</div>
				)
			})}
		</div>
	)
}
