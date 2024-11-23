import { IonPage } from '@ionic/react'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../shared/ui/Heading'

export const GrantApplicationPage = () => {
	return (
		<IonPage className={'p-5'}>
			<BackArrowHeader style={{ alignItems: 'start' }}>
				<Heading style={{ marginTop: -5 }}>
					Подача заявки на конкурс Росмолодёжь.Гранты в рамках Молодёжного слёта
					«Поколение Z»
				</Heading>
			</BackArrowHeader>
		</IonPage>
	)
}
