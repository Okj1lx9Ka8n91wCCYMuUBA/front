import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content'
import Webcam from 'react-webcam'
import { useState, useEffect, useRef, Dispatch, SetStateAction, FC } from 'react'
import './page.styles.css'
import { Footer } from '../../../shared/layout/Footer'
import { BackArrowHeader } from '../../../shared/layout/BackArrowHeader'
import { Heading } from '../../../shared/ui/Heading'
import Camera from '../../../assets/images/Camera.png'

interface DocsPageProps {
	setCameraOpened: Dispatch<SetStateAction<boolean>>
	setFile: Dispatch<SetStateAction<File | null>>
	handleNext: () => void
	onScan: () => void
}

export const DocsPage: FC<DocsPageProps> = ({ setFile, handleNext, setCameraOpened, onScan }) => {
	const [screenshots, setScreenshots] = useState<string[]>([])
	const [isCameraReady, setIsCameraReady] = useState<boolean>(false)

	const webcamRef = useRef<Webcam>(null)
	const overlayRef = useRef<HTMLDivElement>(null)

	const capture = () => {
		const imageSrc = webcamRef.current?.getScreenshot()
		if (imageSrc) {
			const canvas = document.createElement('canvas')
			const ctx = canvas.getContext('2d')
			const img = new Image()
			img.src = imageSrc

			img.onload = () => {
				const cropWidth = img.width * 0.8
				const cropHeight = img.height * 0.6
				const cropX = (img.width - cropWidth) / 2
				const cropY = (img.height - cropHeight) / 2

				canvas.width = cropWidth
				canvas.height = cropHeight
				ctx?.drawImage(
					img,
					cropX,
					cropY,
					cropWidth,
					cropHeight,
					0,
					0,
					cropWidth,
					cropHeight
				)

				canvas.toBlob(blob => {
					if (blob) {
						const file = new File([blob], 'captured-image.jpg', { type: 'image/jpeg' })
						setScreenshots([...screenshots, canvas.toDataURL()])
						setFile(file)
						handleNext()
						onScan()
					}
				}, 'image/jpeg')
			}
		}
	}

	useEffect(() => {
		console.log(screenshots)
	}, [screenshots])

	useEffect(() => {
		const updateOverlay = () => {
			if (webcamRef.current && overlayRef.current) {
				const video = webcamRef.current.video
				const overlay = overlayRef.current

				if (video && overlay) {
					const cropWidth = video.videoWidth * 0.8
					const cropHeight = video.videoHeight * 0.6
					const cropX = (video.videoWidth - cropWidth) / 2
					const cropY = (video.videoHeight - cropHeight) / 2

					overlay.style.clipPath = `polygon(
						0% 0%,
						0% 100%,
						${cropX}px 100%,
						${cropX}px ${cropY}px,
						${cropX + cropWidth}px ${cropY}px,
						${cropX + cropWidth}px ${cropY + cropHeight}px,
						${cropX}px ${cropY + cropHeight}px,
						${cropX}px 100%,
						100% 100%,
						100% 0%
					)`
				}
			}
		}

		const interval = setInterval(updateOverlay, 100)
		return () => clearInterval(interval)
	}, [isCameraReady])

	useEffect(() => {
		const checkCameraPermission = async () => {
			try {
				const stream = await navigator.mediaDevices.getUserMedia({ video: true })
				stream.getTracks().forEach(track => track.stop())
			} catch (error) {
				console.error('Camera permission denied', error)
			}
		}

		checkCameraPermission()
	}, [])

	return (
		<>
			<IonPage
				style={{
					padding: 20,
					height: 'calc(100vh - 74.5px)',
					position: 'relative',
					background: '#F9F9F9',
				}}>
				<Content>
					<BackArrowHeader goBackFunction={() => setCameraOpened(false)}>
						<Heading>Сканирование документов</Heading>
					</BackArrowHeader>

					<div className='relative w-full h-[601px] mt-5'>
						<Webcam
							audio={false}
							className='absolute inset-0  w-full h-full object-cover rounded-[10px]'
							videoConstraints={{ height: 720, width: 1280 }}
							ref={webcamRef}
							onUserMedia={() => setIsCameraReady(true)}
						/>
						<div ref={overlayRef} className='absolute inset-0 z-[15]'></div>
						<div className='absolute inset-0 flex justify-center rounded-[10px] items-center bg-black bg-opacity-20'>
							<div className='relative w-[80%] h-[60%] border-1 bg-white bg-opacity-20 border-white rounded-lg'>
								<div className='absolute inset-0 clip-path-rect'></div>
							</div>
						</div>
					</div>

					<div className={'flex justify-center mt-5'}>
						<button
							onClick={capture}
							className={
								'bg-[#1C78F5] w-[50px] h-[50px] flex items-center justify-center rounded-full'
							}>
							<img src={Camera} alt='Сделать скриншот' />
						</button>
					</div>

					{/*<div className='mt-4'>*/}
					{/*	{screenshots.map((screenshot, index) => (*/}
					{/*		<img*/}
					{/*			key={index}*/}
					{/*			src={screenshot}*/}
					{/*			alt={`Screenshot ${index}`}*/}
					{/*			className='w-32 h-32 object-cover'*/}
					{/*		/>*/}
					{/*	))}*/}
					{/*</div>*/}
				</Content>
			</IonPage>
			<Footer />
		</>
	)
}
