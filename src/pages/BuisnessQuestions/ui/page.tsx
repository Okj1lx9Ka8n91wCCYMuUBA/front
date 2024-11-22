import { IonContent, IonPage } from '@ionic/react'
import { Question } from './question.tsx'
import { useState } from 'react'

export const BusinessQuestionsPage = () => {
	const [step, setStep] = useState<number>(0)

	const [answer1, setAnswer1] = useState<string>('')
	const [answer2, setAnswer2] = useState<string>('')
	const [answer3, setAnswer3] = useState<string>('')
	const [answer4, setAnswer4] = useState<string>('')
	const [answer5, setAnswer5] = useState<string>('')
	const [answer6, setAnswer6] = useState<string>('')
	const [answer7, setAnswer7] = useState<string>('')
	const [answer8, setAnswer8] = useState<string>('')
	const [answer9, setAnswer9] = useState<string>('')
	const [answer10, setAnswer10] = useState<string>('')
	const [answer11, setAnswer11] = useState<string>('')

	const handleNext = () => {
		if (step < 2) {
			setStep(prev => prev + 1)
		}
	}

	return (
		<IonPage className='h-[100vh] px-5 py-7'>
			<IonContent>
				<h1 className='text-xl text-center'>
					Ответьте на вопросы о<br /> вашем бизнесе
				</h1>
				{step === 0 && (
					<>
						<Question
							style={{ marginTop: 20 }}
							answer={answer1}
							long={false}
							setAnswer={setAnswer1}
							title={'Какую сумму вы планируете запросить?'}
						/>
						<Question
							answer={answer2}
							long={true}
							setAnswer={setAnswer2}
							title={'Для чего нужен грант/кредит?'}
						/>
						<Question
							answer={answer3}
							long={true}
							setAnswer={setAnswer3}
							title={
								'Какие документы вы уже готовы предоставить (устав, бизнес-план, бухгалтерский баланс)?'
							}
						/>
						<Question
							answer={answer4}
							long={true}
							setAnswer={setAnswer4}
							title={
								'Есть ли у вас патенты, инновационные разработки или собственное ПО?'
							}
						/>
						<Question
							answer={answer5}
							long={false}
							setAnswer={setAnswer5}
							title={
								'Уже получали гранты, субсидии или льготные кредиты ранее? Если да, то какие?'
							}
						/>
					</>
				)}

				{step === 1 && (
					<>
						<Question
							style={{ marginTop: 20 }}
							answer={answer6}
							long={false}
							setAnswer={setAnswer6}
							title={'Работаете ли вы в нескольких регионах или только в одном?'}
						/>
						<Question
							answer={answer7}
							long={false}
							setAnswer={setAnswer7}
							title={'Какой размер вашего бизнеса? (микро-, малый, средний, стартап)'}
						/>
						<Question
							answer={answer8}
							long={true}
							setAnswer={setAnswer8}
							title={'Какая основная идея вашего проекта?'}
						/>
						<Question
							answer={answer9}
							long={false}
							setAnswer={setAnswer9}
							title={'Какова ваша годовая выручка?'}
						/>
						<Question
							answer={answer10}
							long={true}
							setAnswer={setAnswer10}
							title={'Какая основная идея вашего проекта?'}
						/>
					</>
				)}

				{step === 2 && (
					<Question
						title={'Ввод кодов ОКВЭД (род деятельности)'}
						long={true}
						answer={answer11}
						setAnswer={setAnswer11}
					/>
				)}

				<button className='blue_button mt-7' onClick={handleNext}>
					{step === 2 ? 'Отправить' : 'Продолжить'}
				</button>
			</IonContent>
		</IonPage>
	)
}
