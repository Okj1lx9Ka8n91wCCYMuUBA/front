import { IonPage, useIonRouter } from '@ionic/react'
import { useEffect } from 'react'
import { getFromLocalStorage } from '../../shared/hooks/useStorage.ts'
import { getAuthStore } from '../../entities/User/model/authStore.ts'

export const IntroPage = () => {
	const nav = useIonRouter()
	const authStore = getAuthStore()

	useEffect(() => {
		const getToken = async () => {
			const token = await getFromLocalStorage('TOKEN')
			console.log(typeof token)
			console.log(token)
			if (typeof token === 'string') {
				nav.push('/main')
			}
		}
		getToken().then()
	}, [nav])

	const handleRegister = () => {
		authStore.setAuthMode('register')
		nav.push('/auth_first_step')
	}

	const handleLogin = () => {
		authStore.setAuthMode('login')
		nav.push('/auth_first_step')
	}

	const handleNoAuth = () => {}

	return (
		<IonPage
			style={{
				height: '100vh',
				padding: 15,
				backgroundColor: '#EFF6FF',
				position: 'relative',
			}}>
			<div className='bg-[#EFF6FF]'>
				<div className='text-[45px] font-bold text-center mt-[70%]'>VCQ</div>
			</div>
			<div className='absolute bottom-[55px] left-6 right-6'>
				<button
					className='w-full h-[56px] rounded-[35px] text-white'
					style={{
						background: 'linear-gradient(90deg, #68A0FD 0%, #1C78F5 99.99%)',
					}}
					onClick={handleRegister}>
					Зарегистрироваться
				</button>
				<div className='text-center mt-5 text-[14px]'>
					<span className={'text-[#3083fd]'} onClick={handleLogin}>
						Войти
					</span>{' '}
					или{' '}
					<span className={'text-[#3083fd]'} onClick={handleNoAuth}>
						пропустить регистрацию
					</span>
				</div>
			</div>
		</IonPage>
	)
}
