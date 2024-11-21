import { IonContent, IonPage, useIonRouter } from '@ionic/react'
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
		<IonPage style={{ height: '100vh', padding: 15 }}>
			<IonContent className=''>
				<div className='text-center mt-10'>
					<div>Начальная страница</div>
					<button
						className='mt-[250px] 1mx-auto w-[280px] py-2 border-[1px] border-black rounded-[15px]'
						onClick={() => nav.push('/registration/individual')}>
						Регистрация физических лиц
					</button>
					<button
						className='mt-[16px] 1mx-auto w-[280px] py-2 border-[1px] border-black rounded-[15px]'
						onClick={() => nav.push('registration/company')}>
						Регистрация юридических лиц
					</button>
					<div className='mt-7' onClick={() => nav.push('/main')}>
						Продолжить без регистрации
					</div>
				</div>
			</IonContent>
		</IonPage>
	)
}
