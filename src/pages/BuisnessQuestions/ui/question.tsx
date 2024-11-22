import { ChangeEvent, CSSProperties, Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

interface QuestionProps {
	title: string
	long: boolean
	answer: string
	setAnswer: Dispatch<SetStateAction<string>>
	style?: CSSProperties
}

export const Question: FC<QuestionProps> = ({
	answer,
	setAnswer,
	long,
	title,
	style = { marginTop: 17 },
}) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		const textarea = textareaRef.current
		if (textarea) {
			textarea.style.height = 'auto'
			textarea.style.height = `${textarea.scrollHeight}px`
		}
	}, [answer])

	const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setAnswer(event.target.value)
	}

	return (
		<div style={style}>
			<div className='text-[12px]'>{title}</div>
			<textarea
				ref={textareaRef}
				className='w-full min-h-[65px] bg-[#F1F3F6] px-[13px] text-[12px] py-[11px] outline-none rounded-[15px] mt-2 resize-none'
				placeholder={long ? 'Развернутый ответ' : 'Краткий ответ'}
				value={answer}
				onChange={handleInput}
			/>
		</div>
	)
}
