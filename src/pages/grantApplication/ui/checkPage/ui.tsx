import { IonPage } from '@ionic/react'
import { BackArrowHeader } from '../../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../../shared/ui/Heading'
import { CheckField } from './filed.tsx'

export const CheckPage = () => {
	const fields = [
		{ title: 'Фамилия', data: 'Иванова' },
		{ title: 'Имя', data: 'Анна' },
	]

	return (
		<IonPage className='h-[100vh] p-5'>
			<BackArrowHeader>
				<Heading>Считанные данные</Heading>
			</BackArrowHeader>
			<CheckField data={} setData={} title={} />
		</IonPage>
	)
}
