import { IonPage, useIonRouter } from '@ionic/react'
import { Heading } from '../../../shared/ui/Heading'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Centered } from '../../../shared/layout/Centered'

export const GrantRequestedPage = () => {
	const nav = useIonRouter()
	return (
		<IonPage className='h-[100vh] p-5'>
			<BackArrowHeader style={{ alignItems: 'start' }} goBackFunction={() => nav.goBack()}>
				<Heading style={{ marginTop: -5 }}>
					Подача заявки на конкурс Росмолодёжь.Гранты в рамках Молодёжного слёта
					«Поколение Z»
				</Heading>
			</BackArrowHeader>
			<Centered style={{ flexDirection: 'column' }}>
				<div className={'mt-12 text-[18px] font-light'}>Данные успешно отправлены</div>
				<div className='text-center mt-3 text-[#7A7A7C] text-[14px]'>
					Прежде чем подать заявку ответьте на пару вопросов нашего чат-бота, он поможет
					определить сильные и слабые стороны вашего бизнеса и даст полезные советы по его
					улучшению.
				</div>
				<button onClick={() => nav.push('/chat')} className='blue_button mt-14'>
					Открыть чат-бот
				</button>
				<button
					className='mt-2.5 text-[14px] text-[#1C78F5]'
					onClick={() => nav.push('/main')}>
					Пропустить
				</button>
			</Centered>
		</IonPage>
	)
}
