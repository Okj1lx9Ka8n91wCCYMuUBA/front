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
import { AuthStrategySwitcher } from '../../widgets/auth/AuthStrategySwitcher'
import { renderInputFields } from './config/renderInputFields.tsx'
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
	const [phoneNumber, setPhoneNumber] = useState<string>('')

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
		phoneNumber: phoneNumber,
		setPhoneNumber: setPhoneNumber,
	})[mode][strategy]

	const handleContinue = async (): Promise<void> => {
		if (mode === 'register' && strategy === 'email') {
			const response: boolean = await AuthService.registerUser({
				password: password,
				email: email,
				name: name,
				username: username,
				user_type: 'INDIVIDUAL',
			})
			if (response) {
				nav.push('/business_questions')
			} else {
				alert('Ошибка при регистрации')
			}
		}
		if (mode === 'register' && strategy === 'inn') {
			const response: boolean = await AuthService.registerCompany({
				inn: inn,
				password: password,
				phone: phoneNumber,
				username: username,
				user_type: 'ORGANIZATION',
			})
			if (response) {
				nav.push('/business_questions')
			} else {
				alert('Ошибка при регистрации')
			}
		}
		if (mode === 'login') {
			console.log(username)
			console.log(password)
			const response: boolean = await AuthService.loginUser({
				username: username,
				password: password,
			})
			if (response) {
				nav.push('/main')
			}
		}
		setPassword('')
	}

	const UIFooter = () => {
		return (
			<>
				{mode === 'register' && (
					<div style={{ marginBottom: 21 }}>
						<div style={{ color: '#7A7A7C', fontSize: 10 }}>
							При регистрации вы соглашаетесь с{' '}
							<Link style={{ color: 'black' }} to={ROUTES.overall.userAgreement}>
								Условиями <br />
								использования
							</Link>{' '}
							VCQ и{' '}
							<Link to={ROUTES.overall.privacyPolicy} style={{ color: 'black' }}>
								Политикой конфиденциальности
							</Link>
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

			{inputFields()}

			<button
				className='blue_button'
				onClick={handleContinue}
				style={{
					fontSize: 18,
					marginTop: 25,
					width: window.innerWidth - 32,
					background: 'linear-gradient(90deg, #68A0FD 0%, #1C78F5 99.99%)',
					height: 52,
				}}>
				{mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
			</button>
		</AuthLayout>
	)
})
