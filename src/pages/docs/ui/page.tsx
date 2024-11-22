import { IonPage } from '@ionic/react'
import { Content } from '../../../shared/layout/Content'
import Webcam from 'react-webcam'
import { useState, useEffect, useRef } from 'react'
import './page.styles.css'
import { Footer } from '../../../shared/layout/Footer'

export const DocsPage = () => {
	const [showCam, setShowCam] = useState<boolean>(false)
	const [screenshots, setScreenshots] = useState<string[]>([])
	const [isCameraReady, setIsCameraReady] = useState<boolean>(false)
	const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
	const [deviceId, setDeviceId] = useState<string | undefined>(undefined)
	const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false)
	const [currentDeviceIndex, setCurrentDeviceIndex] = useState<number>(0)

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

				setScreenshots([...screenshots, canvas.toDataURL()])
			}
			setShowCam(false)
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
				setHasCameraPermission(true)
				stream.getTracks().forEach(track => track.stop())
			} catch (error) {
				console.error('Camera permission denied', error)
			}
		}

		checkCameraPermission()
	}, [])

	useEffect(() => {
		const getDevices = async () => {
			if (!hasCameraPermission) return

			const devices = await navigator.mediaDevices.enumerateDevices()
			const videoDevices = devices.filter(device => device.kind === 'videoinput')
			setDevices(videoDevices)
			if (videoDevices.length > 0) {
				setDeviceId(videoDevices[0].deviceId)
			}
		}
		getDevices()
	}, [hasCameraPermission])

	const handleDeviceChange = () => {
		const nextIndex = (currentDeviceIndex + 1) % devices.length
		setCurrentDeviceIndex(nextIndex)
		setDeviceId(devices[nextIndex].deviceId)
	}

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
						<div
							className={`fixed inset-0 flex justify-center bg-black items-center ${
								isCameraReady ? '' : 'hidden'
							}`}>
							<div className='relative w-full max-w-md h-full z-[10]'>
								<Webcam
									audio={false}
									className='absolute inset-0 w-full h-full object-cover'
									videoConstraints={{ height: 720, width: 1280, deviceId }}
									ref={webcamRef}
									onUserMedia={() => setIsCameraReady(true)}
								/>
								<div ref={overlayRef} className='absolute inset-0 z-[15]'></div>
								<div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-20'>
									<div className='relative w-[80%] h-[60%] border-1 bg-white bg-opacity-20 border-white rounded-lg'>
										<div className='absolute inset-0 clip-path-rect'></div>
									</div>
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
							<button
								onClick={handleDeviceChange}
								className='absolute bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded z-[20]'>
								Переключить камеру
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
