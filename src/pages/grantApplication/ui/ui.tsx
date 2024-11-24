import { IonPage, useIonRouter } from '@ionic/react'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../shared/ui/Heading'
import { useState } from 'react'
import { CustomSelect } from '../../../shared/ui/Select/custom.select.ui.tsx'
import { FileInput } from './fileInput.tsx'
import { DocsPage } from '../../docs'
import { CheckPage } from './checkPage'

export const GrantApplicationPage = () => {
	const nav = useIonRouter()
	const [project, setProject] = useState<string>('')
	const [nomination, setNomination] = useState<string>('')
	const [file1, setFile1] = useState<File | null>(null)
	const [isCameraOpened, setIsCameraOpen] = useState<boolean>(false)
	const [isCheckPageOpened, setIsCheckPageOpen] = useState<boolean>(false)

	if (isCameraOpened) {
		return (
			<DocsPage
				setCameraOpened={setIsCameraOpen}
				setFile={setFile1}
				onScan={() => {
					setIsCheckPageOpen(true)
					setIsCameraOpen(false)
				}}
				handleNext={() => {
					console.log(123)
				}}
			/>
		)
	}

	if (isCheckPageOpened) {
		return (
			<CheckPage
				fields={[
					{ title: 'Фамилия', data: 'Иванова' },
					{ title: 'Имя', data: 'Анна' },
				]}
				onContinue={() => {
					setIsCameraOpen(false)
					setIsCheckPageOpen(false)
				}}
				onScanAgain={() => {
					setIsCheckPageOpen(false)
					setIsCameraOpen(true)
				}}
			/>
		)
	}

	return (
		<IonPage className={'p-5 h-[100vh] bg-[#F9F9F9]'}>
			<BackArrowHeader style={{ alignItems: 'start' }} goBackFunction={() => nav.goBack()}>
				<Heading style={{ marginTop: -5 }}>
					Подача заявки на конкурс Росмолодёжь.Гранты в рамках Молодёжного слёта
					«Поколение Z»
				</Heading>
			</BackArrowHeader>
			<CustomSelect
				style={{ marginTop: 20 }}
				placeholder={'Выберите проект'}
				options={[
					{ value: 'Опция 2', label: 'Первый проект' },
					{ value: 'Опция 3', label: 'Второй проект' },
				]}
				value={project}
				onChange={option => setProject(option)}
			/>
			<CustomSelect
				style={{ marginTop: 17 }}
				placeholder={'Выберите номинацию'}
				options={[
					{ value: 'Опция 2', label: 'Первая номинация' },
					{ value: 'Опция 3', label: 'Вторая номинация' },
				]}
				value={nomination}
				onChange={nomination => setNomination(nomination)}
			/>
			<FileInput
				title={'Баланс (форма 1)'}
				value={file1}
				setValue={setFile1}
				onScan={() => setIsCameraOpen(true)}
			/>
		</IonPage>
	)
}
