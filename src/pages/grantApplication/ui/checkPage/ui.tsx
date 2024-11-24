import { FC, useState } from 'react'
import { IonPage, IonFooter, IonContent } from '@ionic/react'
import { BackArrowHeader } from '../../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../../shared/ui/Heading'
import { CheckField } from './filed.tsx'
import { Centered } from '../../../../shared/layout/Centered'

interface CheckPageProps {
	onScanAgain: () => void
	onContinue: () => void
	fields: { title: string; data: string }[]
}

export const CheckPage: FC<CheckPageProps> = ({ onContinue, onScanAgain, fields }) => {
	const [fieldStates, setFieldStates] = useState<string[]>(fields.map(field => field.data))

	const updateFieldState = (index: number, newData: string | { (prevState: string): string }) => {
		const newFieldStates = [...fieldStates]
		if (typeof newData === 'string') {
			newFieldStates[index] = newData
		}
		setFieldStates(newFieldStates)
	}

	const handleSubmit = () => {
		const updatedData = fields.map((field, index) => ({
			title: field.title,
			data: fieldStates[index],
		}))
		console.log(updatedData)
		onContinue()
	}

	return (
		<IonPage className='h-[90vh] p-5'>
			<IonContent>
				<BackArrowHeader>
					<Heading>Считанные данные</Heading>
				</BackArrowHeader>
				<div className='flex flex-col gap-y-[11px] mt-5'>
					{fields.map((field, index) => (
						<CheckField
							key={index}
							data={fieldStates[index]}
							setData={newData => updateFieldState(index, newData)}
							title={field.title}
						/>
					))}
				</div>
			</IonContent>
			<IonFooter>
				<button className='blue_button' onClick={handleSubmit}>
					Продолжить
				</button>
				<Centered>
					<button className='mt-2 text-[14px] text-[#3083FD]' onClick={onScanAgain}>
						Сканирова заново
					</button>
				</Centered>
			</IonFooter>
		</IonPage>
	)
}
