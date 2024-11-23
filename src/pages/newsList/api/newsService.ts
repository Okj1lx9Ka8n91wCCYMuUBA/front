import { NewsItem } from '../types'
import MockImage from '../../../assets/Mock/MockNewsImage.png'

export class NewsService {
	static async getNews(): Promise<NewsItem[]> {
		return [
			{
				id: '1',
				img: 'https://img.freepik.com/premium-photo/young-businessman-mobile-phone_700248-32742.jpg?w=2000',
				title: 'Вторая новость: экология и защита окружающей среды',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'http://api.tisit.club',
			},
			{
				id: '2',
				img: MockImage,
				title: 'Вторая новость: экология и защита окружающей среды',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'http://api.tisit.club',
			},
			{
				id: '3',
				img: MockImage,
				title: 'Вторая новость: экология и защита окружающей среды',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'http://api.tisit.club',
			},
			{
				id: '4',
				img: MockImage,
				title: 'Вторая новость: экология и защита окружающей среды',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'http://api.tisit.club',
			},
			{
				id: '5',
				img: MockImage,
				title: 'Вторая новость: экология и защита окружающей среды',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'http://api.tisit.club',
			},
			{
				id: '6',
				img: MockImage,
				title: 'Вторая новость: экология и защита окружающей среды',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'http://api.tisit.club',
			},
		]
	}
}
