import { IonPage } from '@ionic/react'
import { Footer } from '../../../shared/layout/Footer'
import { userState } from '../../../app/state/userState.ts'
import SettingsImage from '../../../assets/images/settings.svg'
import { Picker } from '../../../widgets/Picker'
import { RequestsList } from './requestsList.ui.tsx'

export const ProfilePage = () => {
	return (
		<IonPage className='h-[100vh] p-5 bg-[#F9F9F9]'>
			<div className='bg-[#F9F9F9]'>
				<div className='flex justify-between items-start'>
					<div></div>
					<div className='mr-[-30px] flex flex-col items-center'>
						<img
							src={userState.image}
							alt='Аватар пользователя'
							width={101}
							height={101}
						/>
						<div className='text-[21px] mt-2'>{userState.name}</div>
					</div>
					<div className='mt-2'>
						<div className='w-11 h-11 flex items-center justify-center bg-white rounded-full'>
							<img src={SettingsImage} alt='Настройки' />
						</div>
					</div>
				</div>
			</div>
			<Picker
				blocks={[
					{ title: 'Заявки', elements: <RequestsList /> },
					{ title: 'Документы', elements: <div>Документы</div> },
				]}
			/>
			<Footer />
		</IonPage>
	)
}
