import { IonPage } from '@ionic/react'
import { Footer } from '../../../shared/layout/Footer'
import { Picker } from '../../../widgets/Picker'
import { GrantCard } from './grantCard.tsx'
import { Tinder } from '../../../widgets/Tinder'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { set } from 'zod'

interface Grant {
	id: string
	image_url: string
	grant_min: string
	grant_max: string
	documents: string
	title: string
	description: string
	implementation_period: string
	competition_name: string
	contacts: string
	url: string
	created_at: string
}

export const SupportPage = () => {
	const [grants, setGrants] = useState<Grant[]>([])

	useEffect(() => {
		const fetchGrants = async () => {
			const response = await axios.get('/api/parsed_data/grants/')
			setGrants(response.data.data)
		}

		fetchGrants()
	}, [])

	useEffect(() => {
		console.log(grants)
	}, [grants])

	return (
		<IonPage className='h-[180vh]'>
			<div className='bg-[#F9F9F9] h-full p-5'>
				<Picker
					blocks={[
						{
							title: 'Гранты',
							elements: (
								<div className={'flex flex-col gap-y-3 mt-5'}>
									{' '}
									{grants.map(grant => {
										return (
											<GrantCard
												grant={{
													id: grant.id,
													title: grant.title,
													time: grant.implementation_period,
													organizer: grant.competition_name,
													type: 'Общероссийский',
													format: 'Грант',
													minGrant: grant.min || 'Не указано',
													maxGrant: grant.max || 'Не указано',
												}}
											/>
										)
									})}
								</div>
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
