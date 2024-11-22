import { CSSProperties, FC, ReactNode } from 'react'
import { Page } from './style'

export const DefaultPage: FC<{
	children: ReactNode
	style?: CSSProperties
	noPadding?: boolean
	id?: string
}> = ({ children, style, noPadding = false }) => {
	return <Page style={{ padding: noPadding ? 0 : '15px 16px', ...style }}>{children}</Page>
}
