import { FC } from 'react'
import { NewsItem } from '../types'

interface NewsProps {
	newsItem: NewsItem
}

export const NewsCard: FC<NewsProps> = ({ newsItem }) => {
	return (
		<div className='flex gap-x-4'>
			<img src={newsItem.img} alt={newsItem.title} />
			<div>
				<div className='text-[16px] line-clamp-2 font-medium'>{newsItem.title}</div>
				<div className='text-[13px] text-[#090920] line-clamp-3'>{newsItem.text}</div>
			</div>
		</div>
	)
}
