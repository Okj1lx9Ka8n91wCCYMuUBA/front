import { useState } from 'react'
import { Centered } from '../../../shared/layout/Centered'
import { Heading } from '../../../shared/ui/Heading'
import { useSpring, animated } from 'react-spring'
import { useSwipeable } from 'react-swipeable'

const exampleCards = [
	{ id: 1, title: 'Грант 1', color: 'bg-blue-500' },
	{ id: 2, title: 'Акселератор 1', color: 'bg-green-500' },
	{ id: 3, title: 'Кредит 1', color: 'bg-red-500' },
	{ id: 4, title: 'Грант 2', color: 'bg-yellow-500' },
	{ id: 5, title: 'Акселератор 2', color: 'bg-purple-500' },
]

export const Tinder = () => {
	const [cards, setCards] = useState(exampleCards)
	const [springProps, setSpringProps] = useSpring(() => ({
		x: 0,
		y: 0,
		config: { tension: 500, friction: 30 },
	}))

	const handleSwipe = direction => {
		if (direction === 'Left' || direction === 'Right') {
			setSpringProps({
				x: direction === 'Left' ? -500 : 500,
				y: 0,
				onRest: () => {
					setCards(prevCards => prevCards.slice(1))
					setSpringProps({ x: 0, y: 0 })
				},
			})
		}
	}

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => handleSwipe('Left'),
		onSwipedRight: () => handleSwipe('Right'),
		trackMouse: true,
	})

	return (
		<div className='mt-8'>
			<Centered>
				<Heading style={{ textAlign: 'center' }}>
					Гранты, акселераторы и кредиты, которые могут быть ваминтересны.
				</Heading>
			</Centered>
			<div className='tinder-cards relative w-full max-w-md mx-auto'>
				{cards.length > 0 ? (
					<animated.div
						key={cards[0].id}
						className={`card ${cards[0].color} w-full h-96 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
						style={{
							transform: springProps.x.to(x => `translate3d(${x}px, 0, 0)`),
						}}
						{...swipeHandlers}>
						<h3>{cards[0].title}</h3>
					</animated.div>
				) : (
					<div className='text-center text-gray-500 text-lg'>Нет больше карточек</div>
				)}
			</div>
		</div>
	)
}
