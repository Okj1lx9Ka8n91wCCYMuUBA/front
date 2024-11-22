import { CSSProperties, FC, ReactNode } from 'react'

interface CenteredProps {
	children: ReactNode
	style?: CSSProperties
}

export const Centered: FC<CenteredProps> = ({ children, style }) => {
	return (
		<div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', ...style }}>
			{children}
		</div>
	)
}
