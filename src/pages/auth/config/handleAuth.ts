import { UseIonRouterResult } from '@ionic/react'
import { AuthService } from '../../../entities/User/api'
import { getAuthStore } from '../../../entities/User/model/authStore.ts'

export const handleAuth = async (
	mode: string,
	strategy: string,
	password: string,
	email: string,
	phoneNumber: string,
	nav: UseIonRouterResult
): Promise<void> => {
	let response: string | boolean | number = false
	const authStore = getAuthStore()
	console.log(password)

	if (mode === 'login' && strategy === 'email') {
		response = await AuthService.loginUser()
	} else if (mode === 'login' && strategy === 'phone') {
		response = await AuthService.loginUser()
	} else if (mode === 'register' && strategy === 'email') {
		response = 123123
	} else if (mode === 'register' && strategy === 'phone') {
		response = true
	}

	if (response === true) {
		if (mode === 'register') {
			authStore.registerEmail = email
			authStore.registerInn = phoneNumber
			nav.push('/confirm_credentials')
		} else {
			nav.push('/main')
		}
	} else {
		alert('Ошибка')
	}
}
