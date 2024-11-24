import { useEffect, useState } from 'react'
import { DocsService } from '../../../entities/User/api'

export const DocumentsList = () => {
	const [documents, setDocuments] = useState<File[]>([])

	useEffect(() => {
		const fetchDocuments = async () => {
			// const docs = await DocsService.getDocs()
			setDocuments([])
		}

		fetchDocuments()
	}, [])

	useEffect(() => {
		console.log(documents)
	}, [documents])

	return <div></div>
}
