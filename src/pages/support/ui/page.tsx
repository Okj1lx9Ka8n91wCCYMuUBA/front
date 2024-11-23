import { IonPage } from '@ionic/react'
import { Footer } from '../../../shared/layout/Footer'
import { Picker } from '../../../widgets/Picker'
import { GrantCard } from './grantCard.tsx'

export const SupportPage = () => {
	return (
		<IonPage className='h-[100vh]'>
			<div className='bg-[#F9F9F9] h-full p-5'>
				<Picker
					blocks={[
						{
							title: 'Гранты',
							elements: (
								<GrantCard
									style={{ marginTop: 20 }}
									grant={{
										id: 'asdfasdfadf',
										title: 'Молодёжный слёт «Поколение Z»',
										time: '25.10.2024-27.10.2024',
										organizer: 'Конкурс Росмолодёжь.Гранты',
										type: 'Всероссийский',
										format: 'Форум',
										minGrant: '5 000,00 ₽',
										maxGrant: '1 000 000,00₽',
									}}
								/>
							),
						},
						{ title: 'Акселераторы', elements: <div>Акселераторы</div> },
						{ title: 'Кредиты', elements: <div>Кредиты</div> },
						{ title: 'Тиндер заявок', elements: <div>Тиндер заявок</div> },
						{ title: 'Тиндер заявок', elements: <div>Тиндер заявок</div> },
					]}></Picker>
			</div>
			<Footer />
		</IonPage>
	)
}
