import { IonHeader, IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import { Footer } from '../../../components/Footer'
import { NewsCard } from './newsCard.ui.tsx'
import { newsStore } from '../model'
import './page.styles.css'

export const NewsListPage = () => {
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
									<NewsCard newsItem={newsItem} key={newsItem.id} />
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
