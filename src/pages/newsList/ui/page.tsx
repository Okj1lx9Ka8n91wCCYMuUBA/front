import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import { Footer } from '../../../components/Footer'
import { NewsCard } from './newsCard.ui.tsx'

export const NewsListPage = () => {
	return (
		<>
			<IonPage
				style={{
					height: 'calc(100vh - 74.5px)',
					position: 'relative',
					background: '#F9F9F9',
				}}>
				<Content>
					<div className='px-4 py-3 w-full bg-white h-[72px] flex justify-center items-center text-[25px] font-medium'>
						Новости
					</div>
					<div style={{ paddingInline: '16px' }}>
						<NewsCard
							newsItem={{
								img: MockImage,
								title: 'Охуенная новость фвалждо фвжылдао фывжадло фывжадло фываждо жфывдоа фыжывадло фываждо фыаж дло',
								text: 'Описание еще пизже фа фывашгыфвшаг зышщваг фызвшщаг фываждолыва жфдлоыва фжывдао фыважофывва ждло ',
								url: 'http://api.tisit.club',
							}}
						/>
					</div>
				</Content>
			</IonPage>
			<Footer />
		</>
	)
}
