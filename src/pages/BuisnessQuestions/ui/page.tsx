import { IonContent, IonPage } from '@ionic/react'
import { Question } from './question.tsx'
import { useState } from 'react'

export const BusinessQuestionsPage = () => {
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

	return (
		<IonPage className='h-[100vh] px-5 py-7'>
			<IonContent>
				<h1 className='text-xl text-center'>
					Ответьте на вопросы о<br /> вашем бизнесе
				</h1>
				<Question
					style={{ marginTop: 20 }}
					answer={answer1}
					long={false}
					setAnswer={setAnswer1}
					title={'Какую сумму вы планируете запросить?'}
				/>
				<Question
					answer={answer2}
					long={false}
					setAnswer={setAnswer2}
					title={'Для чего нужен грант/кредит?'}
				/>
				<Question
					answer={answer3}
					long={false}
					setAnswer={setAnswer3}
					title={
						'Какие документы вы уже готовы предоставить (устав, бизнес-план, бухгалтерский баланс)?'
					}
				/>
				<Question
					answer={answer4}
					long={false}
					setAnswer={setAnswer4}
					title={'Есть ли у вас патенты, инновационные разработки или собственное ПО?'}
				/>
				<Question
					answer={answer5}
					long={false}
					setAnswer={setAnswer5}
					title={
						'Уже получали гранты, субсидии или льготные кредиты ранее? Если да, то какие?'
					}
				/>
			</IonContent>
		</IonPage>
	)
}
