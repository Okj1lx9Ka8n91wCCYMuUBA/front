import { IonContent, IonPage, useIonRouter, UseIonRouterResult } from '@ionic/react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { NewsItem } from '../../newsList/types'
import { newsStore } from '../../../app/state/newsStore.ts'
import BackArrow from '../../../assets/images/BackArrow.svg'

export const SingleNewsPage = () => {
	const nav: UseIonRouterResult = useIonRouter()
	const { newsID } = useParams<{ newsID: string }>()
	const [news, setNews] = useState<NewsItem | null>(null)

	useEffect(() => {
		setNews(newsStore.getNews(newsID))
	}, [newsID])

	if (!news) {
		return
	}

	return (
		<IonPage style={{ height: '100vh', padding: 15 }}>
			<IonContent>
				<div>
					<img src={BackArrow} alt='' onClick={() => nav.goBack()} />
				</div>
				<div className='text-xl text-[#02234D] mt-4'>{news.title}</div>
				<a className='mt-2 text-[13px] opacity-75 underline' href={news.url}>
					{news.url.split('//')[1]}
				</a>
				<img src={news.img} alt={`${news.title}`} className='w-full mt-6' />
				<div className='mt-5 text-[14px] text-[#02234D] whitespace-pre-line'>{`${news.text}`}</div>
			</IonContent>
		</IonPage>
	)
}
