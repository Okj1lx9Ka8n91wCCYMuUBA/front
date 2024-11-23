import { NewsItem } from '../types'
import { FC } from 'react'

interface NewsProps {
	newsItem: NewsItem
}

export const MainNewsCard: FC<NewsProps> = ({ newsItem }) => {
	return (
		<div
			className='relative rounded-[15px]'
			style={{
				backgroundImage: `url(${newsItem.img})`,
				backgroundSize: 'cover',
				height: 186,
				width: '100%',
			}}>
			<a href={newsItem.url}>
				<div
					className='absolute inset-0 rounded-[15px]'
					style={{
						background:
							'linear-gradient(180deg, rgba(122, 122, 122, 0) 0%, #000000 100%)',
					}}></div>
				<div className='absolute left-[14px] bottom-[15px]'>
					<div className='text-white text-[16px]'>{newsItem.title}</div>
					<div className='text-[#FFFFFF9E] text-[11px] mt-2'>{newsItem.time}</div>
				</div>
			</a>
		</div>
	)
}
