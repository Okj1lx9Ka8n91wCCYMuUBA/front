import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Centered } from '../../shared/layout/Centered'
import { ROUTES } from '../../app/routes.ts'
import { AuthLayout } from './config/AuthLayout.tsx'
import { Heading } from '../../shared/ui/Heading'
import { AuthStrategyButton } from './styles.ts'
import { AuthStrategy } from '../../entities/User/types/authTypes.ts'
import { getAuthStore } from '../../entities/User/model/authStore.ts'
import DocsImage from '../../assets/images/Docs.svg'
import EmailImage from '../../assets/images/EmailImage.svg'
import { useIonRouter } from '@ionic/react'

export const AuthFirstStepFooter = () => {
	return (
		<Centered
			style={{
				width: '300px',
				margin: '0 auto',
				textAlign: 'center',
				fontSize: 10,
				lineHeight: '12px',
				marginBottom: 31,
			}}>
			<div style={{ color: '#7A7A7C' }}>
				Продолжая работу с сервисом, вы принимаете положения документа{' '}
				<Link style={{ color: 'black' }} to={ROUTES.overall.userAgreement}>
					“Условия использования”
				</Link>{' '}
				и подтверждаете, что прочитали документ{' '}
				<Link to={ROUTES.overall.privacyPolicy} style={{ color: 'black' }}>
					"Политика конфиденциальности”
				</Link>
				, где описано, как мы собираем, используем и передаем ваши данные.
			</div>
		</Centered>
	)
}

export const AuthFirstStep = observer(() => {
	const authStore = getAuthStore()
	const nav = useIonRouter()

	const handleNextPage = (authStrategy: AuthStrategy) => {
		authStore.setAuthStrategy(authStrategy)
		nav.push('/auth_second_step')
	}

	return (
		<AuthLayout footer={AuthFirstStepFooter()}>
			<Centered style={{ flexDirection: 'column', paddingTop: 120 }}>
				<Heading
					size={window.innerWidth < 400 ? 23 : 25}
					weight={500}
					style={{ whiteSpace: 'nowrap', marginTop: 17 }}>
					{authStore.authMode === 'register' ? 'Зарегистрироваться' : 'Войти'} в VCQ
				</Heading>
				<div
					style={{
						marginTop: 6,
						fontSize: 14,
						fontWeight: 500,
						color: '#7A7A7C',
					}}>
					Выберите один из доступных способов
				</div>
				<AuthStrategyButton
					style={{ marginTop: 31, background: '#F1F3F6' }}
					onClick={() => {
						handleNextPage('email')
					}}>
					<img src={EmailImage} style={{ alignSelf: 'center' }} alt={''} />
					<div style={{ margin: 'auto' }}>По e-mail</div>
				</AuthStrategyButton>
				<AuthStrategyButton
					style={{ marginTop: 17, background: '#F1F3F6' }}
					onClick={() => {
						handleNextPage('inn')
					}}>
					<img src={DocsImage} style={{ alignSelf: 'center' }} alt={''} />
					<div style={{ margin: 'auto' }}>По ИНН</div>
				</AuthStrategyButton>
			</Centered>
		</AuthLayout>
	)
})
