import { observer } from 'mobx-react'
import { useIonRouter, UseIonRouterResult } from '@ionic/react'
import { getAuthStore } from '../../entities/User/model/authStore.ts'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../app/routes.ts'
import { AuthLayout } from './config/AuthLayout.tsx'
import { BackArrowHeader } from '../../shared/layout/BackArrowHeader'
import { Heading } from '../../shared/ui/Heading'
import { Inline } from '../../shared/layout/Inline'
import { Centered } from '../../shared/layout/Centered'
import { AuthStrategySwitcher } from '../../widgets/auth/AuthStrategySwitcher'
import { renderInputFields } from './config/renderInputFields.tsx'
import { handleAuth } from './config/handleAuth.ts'
import { set } from 'zod'
import { AuthService } from '../../entities/User/api'

export const AuthSecondStep = observer(() => {
	const nav: UseIonRouterResult = useIonRouter()
	const authStore = getAuthStore()
	const [strategy, mode] = [authStore.authStrategy, authStore.authMode]
	const [password, setPassword] = useState<string>('')
	const [inn, setInn] = useState<string>(authStore.registerInn || '')
	const [email, setEmail] = useState<string>(authStore.registerEmail || '')
	const [username, setUsername] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [organization, setOrganization] = useState<string>('')

	const inputFields = renderInputFields({
		inn: inn,
		setInn: setInn,
		email: email,
		setEmail: setEmail,
		password: password,
		setPassword: setPassword,
		name: name,
		setName: setName,
		username: username,
		setUsername: setUsername,
		organization: organization,
		setOrganization: setOrganization,
	})[mode][strategy]

	const handleContinue = async (): Promise<void> => {
		if (mode === 'register' && strategy === 'email') {
			const response = await AuthService.registerUser({
				password: password,
				email: email,
				name: name,
				username: username,
			})
		}
		setPassword('')
	}

	const UIFooter = () => {
		return (
			<>
				{mode === 'register' && (
					<div style={{ marginBottom: 21 }}>
						<button
							onClick={handleContinue}
							style={{
								fontSize: 18,
								width: window.innerWidth - 32,
								height: 52,
							}}>
							Отправить код
						</button>
						<div
							style={{
								fontSize: 10,
								marginLeft: 11,
								color: '',
								marginTop: 10,
							}}>
							При регистрации вы соглашаетесь с{' '}
							<Link style={{ color: 'black' }} to={ROUTES.overall.userAgreement}>
								“Условиями пользования”
							</Link>{' '}
							и{' '}
							<Link to={ROUTES.overall.privacyPolicy} style={{ color: 'black' }}>
								"Политикой конфиденциальности”
							</Link>
							.
						</div>
					</div>
				)}
			</>
		)
	}

	return (
		<AuthLayout footer={UIFooter()}>
			<BackArrowHeader backPath={'auth_first_step'}>
				{mode === 'register' && <Heading>Регистрация</Heading>}
				{mode === 'login' && (
					<Inline justify={'space-between'} align={'center'} style={{ width: '100%' }}>
						<Heading>Войти</Heading>
					</Inline>
				)}
			</BackArrowHeader>
			<AuthStrategySwitcher style={{ marginTop: 24 }} />

			{mode === 'register' && (
				<Centered style={{ marginTop: 27 }}>
					<div>Введите {strategy === 'email' ? 'свою эл.почту' : 'ИНН'}</div>
				</Centered>
			)}
			{inputFields()}

			{mode === 'login' && (
				<button
					onClick={handleContinue}
					style={{
						fontSize: 18,
						marginTop: 25,
						width: window.innerWidth - 32,
						height: 52,
					}}>
					Войти
				</button>
			)}
		</AuthLayout>
	)
})