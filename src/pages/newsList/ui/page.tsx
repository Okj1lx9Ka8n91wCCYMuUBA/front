import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content.ts'
import { Footer } from '../../../shared/layout/Footer'
import { NewsCard } from './newsCard.ui.tsx'
import './page.styles.css'
import { newsStore } from '../../../app/state/newsStore.ts'
import { MainNewsCard } from './mainNewsCard.tsx'
import { observer } from 'mobx-react'

export const NewsListPage = observer(() => {
	if (newsStore.news.length === 0) {
		return
	}

	return (
		<>
			<IonPage
				style={{
					height: 'calc(100vh - 75px)',
					position: 'relative',
					background: '#F9F9F9',
					padding: 20,
				}}>
				<Content className={'p-5'}>
					<MainNewsCard newsItem={newsStore.news[0]} />
					<div className='news_list'>
						{newsStore.news.map((newsItem, index) => {
							return index !== 0 && <NewsCard newsItem={newsItem} key={newsItem.id} />
						})}
					</div>
				</Content>
			</IonPage>
			<Footer />
		</>
	)
})
