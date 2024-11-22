import { CSSProperties, FC, ReactNode } from 'react'
import { useIonRouter } from '@ionic/react'
import { Inline } from '../Inline'
import { NavigationArrow } from '../../ui/NavigationArrow'

interface ArrowHeaderProps {
	backPath?: string
	goBackFunction?: () => void
	children?: ReactNode
	style?: CSSProperties
	centeredChildren?: boolean
}

export const BackArrowHeader: FC<ArrowHeaderProps> = ({
	backPath = '/',
	style,
	children,
	goBackFunction,
	centeredChildren = false,
}) => {
	const nav = useIonRouter()
	const handleClick = () => {
		if (goBackFunction) {
			goBackFunction()
			return
		}
		nav.push(backPath)
	}

	if (!centeredChildren) {
		return (
			<Inline style={{ width: '100%', ...style }} align={'center'} gap={28}>
				<NavigationArrow direction={'left'} onClick={handleClick} />
				{children}
			</Inline>
		)
	}

	return (
		<Inline style={{ width: '100%', ...style }} align={'center'} gap={28}>
			<div
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
				}}>
				<NavigationArrow
					direction={'left'}
					onClick={handleClick}
					style={{ position: 'absolute', left: 0 }}
				/>
				<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
					{children}
				</div>
			</div>
		</Inline>
	)
}
