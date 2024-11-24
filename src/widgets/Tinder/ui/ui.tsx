import { useState } from 'react'
import { Centered } from '../../../shared/layout/Centered'
import { Heading } from '../../../shared/ui/Heading'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { AxeleratorInfo } from '../types'
import AxeleratorMock from '../../../assets/Mock/AxeleratorMock.png'
import { TinderCard } from './card.tsx'
import { ProgressIndicator } from './progress.tsx'

const axelerators: AxeleratorInfo[] = [
	{
		title: 'Молодёжный слёт «Поколение Z»',
		time: '25.10.2024-27.10.2024',
		title_description: 'Конкурс Росмолодёжь.Гранты',
		type: 'Всероссийский',
		format: 'Форум',
		description:
			'Молодёжный слёт «Поколение Z» – это образовательно-просветительская площадка для молодых представителей общественной и добровольческой сферы. Программа слёта ориентирована на представителей студенческой и трудовой молодёжи в возрасте от 18 до 35 лет, включённых в общественно-политические мероприятия своего региона. В рамках образовательных встреч будут обсуждены проблемы и достижения общественного сектора и роли молодёжи в его развитии.',
		minGrant: '5 000, 00 ₽',
		maxGrant: '1 000 000,00 ₽',
		recommendedTime: '01.01.2025 – 31.12.2025',
		img: AxeleratorMock,
	},
]

export const Tinder = () => {
	const [currentCardIndex, setCurrentCardIndex] = useState(0)
	const [swipeDirection, setSwipeDirection] = useState<null | string>(null)

	const handleSwipe = direction => {
		setSwipeDirection(direction)
		setTimeout(() => {
			setCurrentCardIndex(prevIndex => prevIndex + 1)
			setSwipeDirection(null)
		}, 300)
	}

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe('Left'),
		onSwipedRight: () => handleSwipe('Right'),
		trackMouse: true,
		disabled: currentCardIndex >= axelerators.length - 1, // Disable swipe actions for the last card
	})

	const cards = [
		<TinderCard key={1} axelerator={axelerators[0]} />,
		<TinderCard key={2} axelerator={axelerators[0]} />,
	]

	return (
		<div className='mt-8'>
			<Centered>
				<Heading style={{ textAlign: 'center' }}>
					Гранты, акселераторы и кредиты, которые могут быть вам интересны.
				</Heading>
			</Centered>
			<div className='relative w-full max-w-md mx-auto'>
				<AnimatePresence>
					{currentCardIndex < cards.length && (
						<motion.div
							key={currentCardIndex}
							className='card relative w-full rounded-2xl overflow-hidden'
							initial={{ opacity: 0, y: 10 }}
							animate={{
								opacity: swipeDirection ? 0 : 1,
								x:
									swipeDirection === 'Left'
										? -500
										: swipeDirection === 'Right'
											? 500
											: 0,
								rotate:
									swipeDirection === 'Left'
										? -15
										: swipeDirection === 'Right'
											? 15
											: 0,
								y: 0,
							}}
							exit={{ opacity: 0, y: -100 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							{...(currentCardIndex < cards.length ? swipeHandlers : {})}>
							{cards[currentCardIndex]}
						</motion.div>
					)}
				</AnimatePresence>
				{currentCardIndex >= cards.length && (
					<div className='text-center text-gray-500 text-lg'>Нет больше карточек</div>
				)}
			</div>
			<button className={'blue_button mt-6'}>Подать заявку</button>
			<ProgressIndicator currentIndex={currentCardIndex} totalCards={cards.length} />
		</div>
	)
}
