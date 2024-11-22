import { CSSProperties, FC, ReactNode } from 'react'
interface HeadingProps {
	children: ReactNode
	size?: number
	color?: string
	weight?: number
	style?: CSSProperties
	centered?: boolean
}

/**
 * default params:
 * weight: 300
 * font-size: 18px
 * color: black
 */
export const Heading: FC<HeadingProps> = ({ size, weight, color, style, children, centered }) => {
	return (
		<div
			style={{
				fontSize: size || 18,
				fontWeight: weight || 300,
				color: color || '#000000',
				display: centered ? 'flex' : 'block',
				justifyContent: 'center',
				...style,
			}}>
			{children}
		</div>
	)
}
