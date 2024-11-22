import { FC, ReactNode } from 'react'
import { DefaultPage } from '../../../shared/layout/DefaultPage'
import { Content } from '../../../shared/layout/Content.ts'
import { Heading } from '../../../shared/ui/Heading'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'

interface AuthLayoutProps {
	children: ReactNode
	backPath?: string
	authTitle?: string
	footer?: ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, footer, backPath, authTitle }) => {
	return (
		<DefaultPage style={{ backgroundColor: 'white', height: '100vh' }}>
			<Content style={{ width: window.innerWidth - 32 }}>
				<div
					style={{
						background: 'white',
						width: window.innerWidth - 32,
						height: '100%',
					}}>
					{backPath && (
						<BackArrowHeader backPath={backPath}>
							{authTitle && <Heading>{authTitle}</Heading>}
						</BackArrowHeader>
					)}
					{children}
				</div>
			</Content>
			{footer}
		</DefaultPage>
	)
}
