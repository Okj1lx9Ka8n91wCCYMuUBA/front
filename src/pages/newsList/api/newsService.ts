import { NewsItem } from '../types'
import axios from 'axios'

export class NewsService {
	static async getNews(): Promise<NewsItem[]> {
		const response = await axios.get('/api/news')
		return response.data
	}
}
