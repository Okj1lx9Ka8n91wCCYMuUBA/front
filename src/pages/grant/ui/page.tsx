import { IonPage, useIonRouter } from '@ionic/react'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../shared/ui/Heading'

export const GrantPage = () => {
	const nav = useIonRouter()

	return (
		<IonPage className={'h-[100vh] bg-[#F9F9F9] p-5'}>
			<BackArrowHeader goBackFunction={() => nav.goBack()}>
				<Heading>
					Конкурс Росмолодёжь.Гранты в рамках Молодёжного слёта «Поколение Z»
				</Heading>
			</BackArrowHeader>
			<div className='mt-5 bg-white p-[11px] rounded-[10px]'>
				<div
					className='bg-white px-[9px] py-[14px] rounded-[10px]'
					style={{ boxShadow: '2px 0px 12.5px 0px #8D8D8D40' }}>
					<div className={'text-[10px] text-[#7A7A7C]'}>
						Тип: <span className='text-black'>Всероссийский</span>
					</div>
					<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
						Формат: <span className='text-black'>Форум</span>
					</div>
					<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
						Страны, для которых доступно мероприятие:{' '}
						<span className='text-black'>Россия</span>
					</div>
					<div>
						<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
							Минимальный размер гранта:{' '}
							<span className='text-[#1C78F5]'>5 000,00 ₽</span>
						</div>
						<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
							Максимальный размер гранта:{' '}
							<span className='text-[#1C78F5]'>1 000 000,00 ₽</span>
						</div>
					</div>
					<div className={'text-[10px] mt-1 text-[#7A7A7C]'}>
						Рекомендованные сроки реализации гранта:
					</div>
					<div className='text-[10px] font-semibold'>01.01.2025 – 31.12.2025</div>
				</div>

				<div className='mt-3 text-[18px]'>Описание</div>
				<div className='mt-[5px] text-[12px] font-light'>
					Молодёжный слёт «Поколение Z» – это образовательно-просветительская площадка для
					молодых представителей общественной и
				</div>
				<div className={'text-[12px] font-light mt-3'}>
					Подробнее по ссылке: {'  '}
					<a href={'https://google.com'} className='text-[#1C78F5]'>
						https://grants.myrosmol.ru/events/98297986-f23d-4060-89ec-b151755a6f02
					</a>
				</div>
			</div>
		</IonPage>
	)
}
