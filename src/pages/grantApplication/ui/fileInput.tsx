import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import FileInputImage from '../../../assets/images/FileInput.svg'
import ScanImage from '../../../assets/images/ScannerImage.svg'
import ExcelImage from '../../../assets/images/Excel.svg'
import WordImage from '../../../assets/images/Word.svg'

interface FileInputProps {
	title: string
	value: File | null
	setValue: Dispatch<SetStateAction<File | null>>
}

export const FileInput: FC<FileInputProps> = ({ title, setValue, value }) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null)

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] || null
		setValue(file)
	}

	const handleUploadClick = () => {
		fileInputRef.current?.click()
	}

	useEffect(() => {
		if (value) {
			console.log(value)
		}
	}, [value])

	const getFileIcon = (fileName: string) => {
		const fileExtension = fileName.split('.').pop()?.toLowerCase()
		if (fileExtension === 'xlsx' || fileExtension === 'xls') {
			return ExcelImage
		} else {
			return WordImage
		}
	}

	if (!value) {
		return (
			<div>
				<div className={'text-[18px] mt-5'}>{title}</div>
				<div className={'flex gap-x-2 mt-2'}>
					<button
						className='blue_button flex items-center text-[16px] justify-center h-11 gap-x-2'
						onClick={handleUploadClick}>
						<img src={FileInputImage} alt='Загрузить файл' />
						<div>Загрузить файл</div>
					</button>
					<button className='blue_button flex items-center text-[16px] justify-center h-11 gap-x-2'>
						<img src={ScanImage} alt='Сканировать файл' />
						<div>Сканировать</div>
					</button>
				</div>
				<input
					type='file'
					ref={fileInputRef}
					style={{ display: 'none' }}
					onChange={handleFileChange}
				/>
			</div>
		)
	}

	const fileIcon = getFileIcon(value.name)

	return (
		<>
			<div className={'text-[18px] mt-5'}>{title}</div>
			<div
				className='px-1 py-3 bg-white w-fit flex gap-x-[1px] items-center rounded-[10px] mt-2'
				style={{ boxShadow: '2px 0px 12.5px 0px #8D8D8D40' }}>
				<img src={fileIcon} alt={'Файл'} />
				<div>{value.name.length < 12 ? value.name : value.name.slice(0, 10) + '...'}</div>
			</div>
		</>
	)
}
