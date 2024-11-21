import { makeAutoObservable } from 'mobx'
import { NewsItem } from '../../pages/newsList/types'
import { NewsService } from '../../pages/newsList/api'

export class NewsStore {
	private news_: NewsItem[] = []

	constructor() {
		makeAutoObservable(this)
		this.init()
	}

	public get news(): NewsItem[] {
		return this.news_
	}

	public getNews(id: string): NewsItem | null {
		const news: NewsItem[] = this.news_.filter(news => news.id === id)
		if (news.length === 0) {
			return null
		}
		return news[0]
	}

	private async init(): Promise<void> {
		this.news_ = await NewsService.getNews()
	}
}

export const newsStore = new NewsStore()
