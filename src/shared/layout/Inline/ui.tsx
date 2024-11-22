import { CSSProperties, FC, ReactNode } from 'react'

interface InlineProps {
	children: ReactNode
	align?: 'flex-start' | 'center' | 'flex-end'
	justify?: 'start' | 'end' | 'center' | 'space-between' | 'around' | 'evenly'
	gap?: number
	style?: CSSProperties
}

export const Inline: FC<InlineProps> = ({ children, align, justify, gap, style }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: justify,
				alignItems: align,
				columnGap: gap,
				...style,
				overflowX: 'auto',
				scrollbarWidth: 'none',
			}}>
			{children}
		</div>
	)
}
