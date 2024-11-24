import { IonFooter, IonPage, useIonRouter } from '@ionic/react'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../shared/ui/Heading'
import { useParams } from 'react-router'
import { Footer } from '../../../shared/layout/Footer'
import { Content } from '../../../shared/layout/Content.ts'
import { observer } from 'mobx-react'
import { grantStore } from '../../../entities/GrantRequests/model/grant.store.ts'
import { GrantDTO } from '../../../entities/GrantRequests'

export const GrantPage = observer(() => {
	const grant: GrantDTO | null = grantStore.activeGrant

	if (!grant) {
		return
	}

	const nav = useIonRouter()
	const { grantID } = useParams<{ grantID: string }>()
	console.log(grantID)

	return (
		<IonPage className={'h-[90vh] bg-[#F9F9F9] p-5'}>
			<Content>
				<BackArrowHeader goBackFunction={() => nav.goBack()}>
					<Heading>Конкурс {grant.title}</Heading>
				</BackArrowHeader>
				<div className='mt-5 bg-white p-[11px] rounded-[10px]'>
					<div
						className='bg-white px-[9px] py-[14px] rounded-[10px]'
						style={{ boxShadow: '2px 0px 12.5px 0px #8D8D8D40' }}>
						<div className={'text-[10px] text-[#7A7A7C]'}>
							Тип: <span className='text-black'>Всероссийский</span>
						</div>
						<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
							Формат: <span className='text-black'>Грант</span>
						</div>
						<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
							Страны, для которых доступно мероприятие:{' '}
							<span className='text-black'>Россия</span>
						</div>
						<div>
							<div
								className={
									'text-[10px] mt-0 text-[#7A7A7C] flex items-baseline gap-x-1'
								}>
								<div className={'text-[10px]'}>Минимальный размер гранта: </div>
								<div className='text-[#1C78F5] text-[15px]'>
									{grant.grant_min + ' ₽' || 'Не указано'}
								</div>
							</div>
							<div
								className={
									'text-[10px] mt-0 text-[#7A7A7C] flex items-baseline gap-x-1'
								}>
								<div className={'text-[10px]'}>Максимальный размер гранта:</div>
								<div className='text-[#1C78F5] text-[15px]'>
									{grant.grant_max + ' ₽' || 'Не указано'}
								</div>
							</div>
						</div>
						<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
							Рекомендованные сроки реализации гранта:
						</div>
						<div className='text-[10px] font-semibold'>
							{grant.implementation_period}
						</div>
					</div>

					<div className='mt-3 text-[18px]'>Описание</div>
					<div className='mt-[5px] text-[12px] font-light'>{grant.description}</div>
					<div className={'text-[12px] font-light mt-3'}>
						Подробнее по ссылке: {'  '}
						<a href={'https://google.com'} className='text-[#1C78F5]'>
							{grant.url}
						</a>
					</div>
				</div>
			</Content>
			<IonFooter className={'bg-[#F9F9F9]'}>
				<button
					className='blue_button mt-10'
					onClick={() => {
						nav.push(`/grant/${grantID}/application`)
					}}>
					Подать заявку
				</button>
			</IonFooter>
		</IonPage>
	)
})
