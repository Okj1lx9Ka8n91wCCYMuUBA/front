import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content'
import Webcam from 'react-webcam'
import { useState, useEffect, useRef } from 'react'
import './page.styles.css'
import { Footer } from '../../../shared/layout/Footer'

export const DocsPage = () => {
	const [showCam, setShowCam] = useState<boolean>(false)
	const [screenshots, setScreenshots] = useState<string[]>([])

	const webcamRef = useRef<Webcam>(null)

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

				setScreenshots([...screenshots, canvas.toDataURL()])
			}
		}
	}

	useEffect(() => {
		console.log(screenshots)
	}, [screenshots])

	return (
		<>
			<IonPage
				style={{
					height: 'calc(100vh - 74.5px)',
					position: 'relative',
					background: '#F9F9F9',
				}}>
				<Content>
					<div className='px-4 py-3 w-full bg-white h-[72px] flex justify-center items-center text-[25px] font-medium'>
						Документы
					</div>

					{showCam && (
						<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
							<div className='relative w-full max-w-md h-full z-[10]'>
								<Webcam
									audio={false}
									className='absolute inset-0 w-full h-full object-cover'
									videoConstraints={{ height: 720, width: 1280 }}
									ref={webcamRef}
								/>
								<div className='absolute inset-0 flex justify-center items-center'>
									<div className='w-[80%] h-[60%] border-4 border-white rounded-lg'></div>
								</div>
							</div>
							<button
								onClick={() => setShowCam(false)}
								className='absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded z-[20]'>
								Прекратить сканирование
							</button>
							<button
								onClick={capture}
								className='absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded z-[20]'>
								Сделать скриншот
							</button>
						</div>
					)}

					{!showCam && <div className='w-[300px] h-[225px] border mx-auto'></div>}
					<button
						onClick={() => setShowCam(true)}
						className='mt-4 bg-green-500 text-white px-4 py-2 rounded'>
						Включить камеру
					</button>

					<div className='mt-4'>
						{screenshots.map((screenshot, index) => (
							<img
								key={index}
								src={screenshot}
								alt={`Screenshot ${index}`}
								className='w-32 h-32 object-cover'
							/>
						))}
					</div>
				</Content>
			</IonPage>
			{!showCam && <Footer />}
		</>
	)
}
