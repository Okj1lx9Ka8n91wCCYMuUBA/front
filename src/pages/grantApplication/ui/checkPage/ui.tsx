import { useState } from 'react'
import { IonPage, IonButton } from '@ionic/react'
import { BackArrowHeader } from '../../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../../shared/ui/Heading'
import { CheckField } from './filed.tsx'

export const CheckPage = () => {
	const fields = [
		{ title: 'Фамилия', data: 'Иванова' },
		{ title: 'Имя', data: 'Анна' },
	]

	const [fieldStates, setFieldStates] = useState(fields.map(field => field.data))

	const updateFieldState = (index: number, newData: string) => {
		const newFieldStates = [...fieldStates]
		newFieldStates[index] = newData
		setFieldStates(newFieldStates)
	}

	const handleSubmit = () => {
		const updatedData = fields.map((field, index) => ({
			title: field.title,
			data: fieldStates[index],
		}))
		console.log('Обновленные данные:', updatedData)
	}

	return (
		<IonPage className='h-[100vh] p-5'>
			<BackArrowHeader>
				<Heading>Считанные данные</Heading>
			</BackArrowHeader>
			{fields.map((field, index) => (
				<CheckField
					key={index}
					data={fieldStates[index]}
					setData={newData => updateFieldState(index, newData)}
					title={field.title}
				/>
			))}
			<IonButton onClick={handleSubmit}>Вывести обновленные данные</IonButton>
		</IonPage>
	)
}
