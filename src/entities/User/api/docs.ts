import MockDoc from '../../../assets/docs/Документ.docx'

export class DocsService {
	static getDocs = async (): Promise<File[]> => {
		return [MockDoc]
	}
}
