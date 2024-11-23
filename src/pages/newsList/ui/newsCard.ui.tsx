import { FC } from 'react'
import { NewsItem } from '../types'

interface NewsProps {
	newsItem: NewsItem
}

export const NewsCard: FC<NewsProps> = ({ newsItem }) => {
	return (
		<a className='flex gap-x-4' href={newsItem.url}>
			<img
				src={newsItem.img}
				alt={newsItem.title}
				height={80}
				width={80}
				className='rounded-[10px] w-20 h-20'
			/>
			<div>
				<div className='text-[14px] leading-4 line-clamp-2 mt-1 font-medium'>
					{newsItem.title}
				</div>
				<div className={'mt-1 text-[#7A7A7C] text-[11px]'}>{newsItem.topic}</div>
				<div className={'mt-1 text-[#7A7A7C] text-[11px]'}>{newsItem.time}</div>
			</div>
		</a>
	)
}
