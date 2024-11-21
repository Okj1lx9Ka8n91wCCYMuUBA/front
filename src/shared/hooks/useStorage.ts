import { Preferences } from '@capacitor/preferences'
const LocalStorageKeys = {
	TOKEN: 'token',
}

export const getFromLocalStorage = async (
	key: keyof typeof LocalStorageKeys
): Promise<string | object | null> => {
	const result: string | null = (await Preferences.get({ key: LocalStorageKeys[key] })).value
	if (result === null) {
		return null
	}
	try {
		return JSON.parse(result)
	} catch (e: unknown) {
		console.log(e)
		return result
	}
}

export const setToLocalStorage = async (
	key: keyof typeof LocalStorageKeys,
	value: string | object
): Promise<void> => {
	let stringValue: string
	if (typeof value === 'object') {
		stringValue = JSON.stringify(value)
	} else {
		stringValue = value
	}
	await Preferences.set({ key: LocalStorageKeys[key], value: stringValue })
}
