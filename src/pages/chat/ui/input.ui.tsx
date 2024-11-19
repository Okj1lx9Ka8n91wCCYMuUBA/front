import InputClip from '../../../assets/images/clip.svg'
import './input.styles.css'
import Arrow from '../../../assets/images/Arrow.png'

export const ChatInput = () => {
	return (
		<div className='input_container'>
			<div className='input_left'>
				<img src={InputClip} alt={'Прикрепить файл'} />
				<input type='text' placeholder={'Напишите сообщение...'} />
			</div>
			<div className='arrow_container'>
				<img src={Arrow} alt='Отправить' />
			</div>
		</div>
	)
}
