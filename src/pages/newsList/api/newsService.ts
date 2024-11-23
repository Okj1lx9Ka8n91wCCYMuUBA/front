import { NewsItem } from '../types'
import axios from 'axios'

export class NewsService {
	static async getNews(): Promise<NewsItem[]> {
		return [
			{
				id: '6',
				img: 'https://img.freepik.com/premium-photo/creative-growing-arrows-chart-blurry-city-texture-return-investment-finance-market-growth-concept-double-exposure_670147-17237.jpg?ga=GA1.1.562431132.1730131585&semt=ais_hybrid',
				title: 'Рост инвестиций в финансовом секторе',
				time: '4 часа назад',
				topic: 'Инвестиции',
				url: 'https://img.freepik.com/premium-photo/creative-growing-arrows-chart-blurry-city-texture-return-investment-finance-market-growth-concept-double-exposure_670147-17237.jpg?ga=GA1.1.562431132.1730131585&semt=ais_hybrid',
			},
			{
				id: '2',
				img: 'https://mff.minfin.ru/upload/iblock/b3b/6boxt0a1m9zy4vm1gtjaqnfmet1y0pqd/IMG_4832.JPG',
				title: 'Обсуждение бюджета на 2025 год',
				time: '30 минут назад',
				topic: 'Бюджет',
				url: 'https://mff.minfin.ru/upload/iblock/b3b/6boxt0a1m9zy4vm1gtjaqnfmet1y0pqd/IMG_4832.JPG',
			},
			{
				id: '7',
				img: 'https://img.freepik.com/free-vector/financial-incline-growth-upward-arrow-trend-background-design_1017-27107.jpg?ga=GA1.1.562431132.1730131585&semt=ais_hybrid',
				title: 'Тренды роста экономики в 2024 году',
				time: '5 часов назад',
				topic: 'Экономика',
				url: 'https://img.freepik.com/free-vector/financial-incline-growth-upward-arrow-trend-background-design_1017-27107.jpg?ga=GA1.1.562431132.1730131585&semt=ais_hybrid',
			},
			{
				id: '3',
				img: 'https://mff.minfin.ru/upload/iblock/f79/pmxdi7i9hz8yv9ws8j4dku04piadp9vf/1L4A0467.JPG',
				title: 'Встреча с инвесторами',
				time: '1 час назад',
				topic: 'Инвестиции',
				url: 'https://mff.minfin.ru/upload/iblock/f79/pmxdi7i9hz8yv9ws8j4dku04piadp9vf/1L4A0467.JPG',
			},
			{
				id: '8',
				img: 'https://img.freepik.com/premium-photo/pen-paper-with-price-quotes-charts-dynamics-their-change-coins_494741-42135.jpg?w=2000',
				title: 'Анализ рыночных котировок и динамики цен',
				time: '6 часов назад',
				topic: 'Финансовые рынки',
				url: 'https://img.freepik.com/premium-photo/pen-paper-with-price-quotes-charts-dynamics-their-change-coins_494741-42135.jpg?w=2000',
			},
			{
				id: '5',
				img: 'https://photo.roscongress.org/api/structure/photos/90634b5c-ce0e-4332-805f-1a3a866a293c/preview',
				title: 'Сессия по цифровым технологиям в экономике',
				time: '3 часа назад',
				topic: 'Цифровизация',
				url: 'https://photo.roscongress.org/api/structure/photos/90634b5c-ce0e-4332-805f-1a3a866a293c/preview',
			},
			{
				id: '1',
				img: 'https://photo.roscongress.org/api/structure/photos/374f99c7-72e5-4e38-a8d8-54b44bd805cb/preview',
				title: 'Форум по экономическим вопросам',
				time: '25 минут назад',
				topic: 'Экономика',
				url: 'https://photo.roscongress.org/api/structure/photos/374f99c7-72e5-4e38-a8d8-54b44bd805cb/preview',
			},
		]
	}
}
