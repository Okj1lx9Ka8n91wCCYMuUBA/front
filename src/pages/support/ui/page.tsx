import { IonPage } from '@ionic/react'
import { Footer } from '../../../shared/layout/Footer'
import { Picker } from '../../../widgets/Picker'
import { GrantCard } from './grantCard.tsx'
import { Tinder } from '../../../widgets/Tinder'

export const SupportPage = () => {
	return (
		<IonPage className='h-[100vh]'>
			<div className='bg-[#F9F9F9] h-full p-5'>
				<Picker
					blocks={[
						{
							title: 'Гранты',
							elements: (
								<>
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
									<GrantCard
										style={{ marginTop: 20 }}
										grant={{
											id: 'asdfasdfadf',
											title: 'Первый конкурс на предоставление грантов Губернатора Челябинской области',
											time: 'Закрыто',
											organizer:
												'Фонд "Центр поддержки гражданских инициатив и развития некоммерческого сектора экономики Челябинской области"',
											type: 'Челябинская область',
											format: 'Форум',
											minGrant: '6 000 000  ₽',
											maxGrant: '1 000 000,00₽',
										}}
									/>
								</>
							),
						},
						{
							title: 'Кредиты',
							elements: (
								<>
									<GrantCard
										style={{ marginTop: 20 }}
										grant={{
											id: 'asdfasdfadf',
											title: 'Индивидуальным предпринимателям',
											time: 'на регулярной основе',
											organizer: 'Совкомбанк',
											type: 'Кредит',
											format: 'До 5 лет',
											minGrant: '0',
											maxGrant: '50 000 000 ₽',
										}}
									/>
									<GrantCard
										style={{ marginTop: 20 }}
										grant={{
											id: 'asdfasdfadf',
											title: 'Кредитование селлеров',
											time: 'на регулярной основе',
											organizer: 'Металлинвестбанк',
											type: 'Кредит',
											format: 'До 2 лет',
											minGrant: '0',
											maxGrant: '150 000 000 ₽',
										}}
									/>
								</>
							),
						},
						{
							title: 'Акселераторы',
							elements: (
								<>
									<GrantCard
										style={{ marginTop: 20 }}
										grant={{
											id: 'asdfasdfadf',
											title: 'Акселератор для проектов просветительских мероприятий',
											time: '18.11.2024-28.12.2024',
											organizer: '«Знания»',
											type: 'Всероссийский',
											format: 'Форум',
											minGrant: 'Не указано',
											maxGrant: 'Не указано',
										}}
									/>
									<GrantCard
										style={{ marginTop: 20 }}
										grant={{
											id: 'asdfasdfadf',
											title: 'Акселератор StartupDrive',
											time: 'Закрыто',
											organizer: 'Газпром "нефть"',
											type: 'Всероссийский',
											format: 'Сотрудничество',
											minGrant: 'Не указано',
											maxGrant: 'Не указано',
										}}
									/>
								</>
							),
						},
						{ title: 'Тиндер заявок', elements: <Tinder cards={[]} /> },
					]}></Picker>
			</div>
			<Footer />
		</IonPage>
	)
}
