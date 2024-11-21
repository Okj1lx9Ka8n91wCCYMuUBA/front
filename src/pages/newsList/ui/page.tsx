import { IonHeader, IonPage, useIonRouter, UseIonRouterResult } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import { Footer } from '../../../components/Footer'
import { NewsCard } from './newsCard.ui.tsx'
import './page.styles.css'
import { newsStore } from '../../../app/state/newsStore.ts'

export const NewsListPage = () => {
	const nav: UseIonRouterResult = useIonRouter()

	return (
		<>
			<IonPage
				style={{
					height: 'calc(100vh - 148.5px)',
					position: 'relative',
					background: '#F9F9F9',
				}}>
				<IonHeader className='header'>Новости</IonHeader>
				<Content>
					<div className='news_list'>
						{newsStore.news.map((newsItem, index) => {
							return (
								<>
									{index !== 0 && <div className='separate_line'></div>}
									<NewsCard
										newsItem={newsItem}
										key={newsItem.id}
										onClick={() => nav.push(`/news/${newsItem.id}`)}
									/>
								</>
							)
						})}
					</div>
				</Content>
			</IonPage>
			<Footer />
		</>
	)
}
