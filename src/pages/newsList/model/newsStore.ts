import { makeAutoObservable } from 'mobx'
import { NewsItem } from '../types'
import { NewsService } from '../api'

export class NewsStore {
	private news_: NewsItem[] = []

	constructor() {
		makeAutoObservable(this)
		this.init()
	}

	public get news(): NewsItem[] {
		return this.news_
	}

	private async init(): Promise<void> {
		this.news_ = await NewsService.getNews()
	}
}

export const newsStore = new NewsStore()
