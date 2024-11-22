import { IonPage, useIonRouter } from '@ionic/react'
import { useEffect } from 'react'
import { getFromLocalStorage } from '../../shared/hooks/useStorage.ts'

export const IntroPage = () => {
	const nav = useIonRouter()

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

	return (
		<IonPage
			style={{
				height: '100vh',
				padding: 15,
				backgroundColor: '#EFF6FF',
				position: 'relative',
			}}>
			{/*<IonContent style={{ backgroundColor: '#EFF6FF' }} className='w-full h-full'>*/}
			<div className='bg-[#EFF6FF]'>
				<div className='text-[45px] font-bold text-center mt-[70%]'>VCQ</div>
			</div>
			<div className='absolute bottom-[55px] left-6 right-6'>
				<button
					className='w-full h-[56px] rounded-[35px] text-white'
					style={{
						background: 'linear-gradient(90deg, #68A0FD 0%, #1C78F5 99.99%)',
					}}>
					Зарегистрироваться
				</button>
				<div className='text-center mt-5 text-[14px]'>
					<a className={'text-[#3083fd]'} href={''}>
						Войти
					</a>{' '}
					или <a className={'text-[#3083fd]'}>пропустить регистрацию</a>
				</div>
			</div>
		</IonPage>
	)
}
