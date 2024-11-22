import { IonPage } from '@ionic/react'
import { Footer } from '../../../shared/layout/Footer'
import { Picker } from '../../../widgets/Picker'

export const SupportPage = () => {
	return (
		<IonPage className='h-[100vh]'>
			<div className='bg-[#F9F9F9] h-full p-5'>
				<Picker
					blocks={[
						{ title: 'Гранты', elements: <div>Гранты</div> },
						{ title: 'Акселераторы', elements: <div>Акселераторы</div> },
						{ title: 'Кредиты', elements: <div>Кредиты</div> },
					]}></Picker>
			</div>
			<Footer />
		</IonPage>
	)
}
