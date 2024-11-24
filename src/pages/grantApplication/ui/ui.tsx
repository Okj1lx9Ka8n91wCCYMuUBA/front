import { IonFooter, IonPage, useIonRouter } from '@ionic/react'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../shared/ui/Heading'
import { useEffect, useState } from 'react'
import { CustomSelect } from '../../../shared/ui/Select/custom.select.ui.tsx'
import { FileInput } from './fileInput.tsx'
import { DocsPage } from '../../docs'
import { CheckPage } from './checkPage'
import { Content } from '../../../shared/layout/Content.ts'
import { useParams } from 'react-router'
import { Footer } from '../../../shared/layout/Footer'

const fileNames = ['Баланс (форма 1)', 'Отчет о прибылях и убытках (форма 2)', 'Скан паспорта']

export const GrantApplicationPage = () => {
	const { grantID } = useParams<{ grantID: string }>()
	const nav = useIonRouter()
	const [project, setProject] = useState<string>('')
	const [nomination, setNomination] = useState<string>('')
	const [files, setFiles] = useState<Array<{ file: File | null; isCameraOpened: boolean }>>(
		fileNames.map(() => ({ file: null, isCameraOpened: false }))
	)
	const [isCheckPageOpened, setIsCheckPageOpen] = useState<boolean>(false)
	const [isAbleToConfirm, setIsAbleToConfirm] = useState<boolean>(false)

	const checkIfAbleToConfirm = (): boolean => {
		if (project === '' || nomination === '') {
			return false
		}
		return !files.some(file => file.file === null)
	}

	useEffect(() => {
		setIsAbleToConfirm(checkIfAbleToConfirm())
	}, [project, nomination, files])

	const handleNextPage = () => {
		if (isAbleToConfirm) {
			nav.push(`/grant/${grantID}/requested`)
		}
	}

	const handleFileChange = (index: number, file: File | null) => {
		setFiles(prevFiles => {
			const newFiles = [...prevFiles]
			newFiles[index].file = file
			return newFiles
		})
	}

	const handleCameraOpen = (index: number) => {
		setFiles(prevFiles => {
			const newFiles = [...prevFiles]
			newFiles.forEach((f, i) => (f.isCameraOpened = i === index))
			return newFiles
		})
	}

	const handleScan = (index: number) => {
		setFiles(prevFiles => {
			const newFiles = [...prevFiles]
			newFiles[index].isCameraOpened = false
			return newFiles
		})
		setIsCheckPageOpen(true)
	}

	if (files.some(f => f.isCameraOpened)) {
		const index = files.findIndex(f => f.isCameraOpened)
		return (
			<DocsPage
				setCameraOpened={isOpen => handleCameraOpen(index)}
				setFile={file => handleFileChange(index, file)}
				onScan={() => handleScan(index)}
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
					setIsCheckPageOpen(false)
				}}
				onScanAgain={() => {
					setIsCheckPageOpen(false)
					handleCameraOpen(files.findIndex(f => f.file !== null))
				}}
			/>
		)
	}

	return (
		<IonPage className={'p-5 h-[85vh] bg-[#F9F9F9]'}>
			<Content>
				<BackArrowHeader
					style={{ alignItems: 'start' }}
					goBackFunction={() => nav.goBack()}>
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
				{fileNames.map((fileName, index) => (
					<FileInput
						key={index}
						title={fileName}
						value={files[index].file}
						setValue={file => handleFileChange(index, file)}
						onScan={() => handleCameraOpen(index)}
					/>
				))}
			</Content>
			<div>
				<button
					onClick={handleNextPage}
					className={`text-white w-full flex items-center justify-center rounded-[35px] h-14 text-[18px]`}
					style={{
						background: !isAbleToConfirm
							? '#7A7A7C'
							: 'linear-gradient(90deg, #68A0FD 0%, #1C78F5 99.99%)',
					}}>
					Подтвердить данные
				</button>
			</div>
		</IonPage>
	)
}
