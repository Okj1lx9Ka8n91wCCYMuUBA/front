import { CSSProperties, FC } from 'react'
import { getAuthStore } from '../../../entities/User/model/authStore.ts'
import { observer } from 'mobx-react'
import { Centered } from '../../../shared/layout/Centered'
import { Inline } from '../../../shared/layout/Inline'
import { TextUnderline } from './styles.ts'

interface AuthStrategySwitcherProps {
	style?: CSSProperties
}

export const AuthStrategySwitcher: FC<AuthStrategySwitcherProps> = observer(({ style }) => {
	const authStore = getAuthStore()

	return (
		<div style={{ borderBottom: `1px solid #eaeaea`, ...style }}>
			<Centered>
				<Inline justify={'space-between'}>
					<Inline style={{ flexDirection: 'column' }} align={'center'}>
						<div onClick={() => authStore.setAuthStrategy('inn')}>ИНН</div>
						<TextUnderline
							style={{ opacity: authStore.authStrategy === 'inn' ? 1 : 0 }}
						/>
					</Inline>
					<Inline style={{ flexDirection: 'column' }} align={'center'}>
						<div onClick={() => authStore.setAuthStrategy('email')}>Почта</div>
						<TextUnderline
							style={{ opacity: authStore.authStrategy === 'email' ? 1 : 0 }}
						/>
					</Inline>
				</Inline>
			</Centered>
		</div>
	)
})
