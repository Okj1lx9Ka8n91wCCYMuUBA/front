import { FC } from 'react'
import { NewsItem } from '../types'

interface NewsProps {
	newsItem: NewsItem
	onClick: () => void
}

export const NewsCard: FC<NewsProps> = ({ newsItem, onClick }) => {
	return (
		<div className='flex gap-x-4' onClick={onClick}>
			<img
				src={newsItem.img}
				alt={newsItem.title}
				height={120}
				width={140}
				className='h-[130px]'
			/>
			<div>
				<div className='text-[14px] line-clamp-2 font-medium leading-5'>
					{newsItem.title}
				</div>
				<div className='text-[11px] text-[#636363] line-clamp-3 mt-2 leading-4'>
					{newsItem.text}
				</div>
				<div className={'mt-3'}>
					<a href={newsItem.url} className={'text-[11px] text-[#0d76ff] mt-10'}>
						{newsItem.url}
					</a>
				</div>
			</div>
		</div>
	)
}
