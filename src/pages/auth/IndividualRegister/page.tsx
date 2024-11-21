import { IonContent, IonPage } from '@ionic/react'
import { AuthInput } from '../../../shared/ui/AuthInput'
import { useState } from 'react'
import { AuthService } from '../../../entities/User/api'

export const IndividualRegisterPage = () => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const handleRegister = async () => {
		try {
			const response = await AuthService.registerUsers({
				email: email,
				name: name,
				password: password,
				username: username,
			})
			console.log(response)
		} catch (error: Error) {
			alert(error.message)
		}
	}

	return (
		<IonPage style={{ height: '100vh', padding: 15 }}>
			<IonContent>
				<div>Регистрация физ.лиц</div>
				<AuthInput
					value={name}
					setValue={setName}
					placeholder={'Ваше имя'}
					style={{ marginTop: '20vh' }}
				/>
				<AuthInput
					value={email}
					setValue={setEmail}
					placeholder={'Почта'}
					style={{ marginTop: '20px' }}
				/>
				<AuthInput
					value={username}
					setValue={setUsername}
					placeholder={'Имя пользователя'}
					style={{ marginTop: '20px' }}
				/>
				<AuthInput
					value={password}
					setValue={setPassword}
					type={'password'}
					placeholder={'Пароль'}
					style={{ marginTop: '20px' }}
				/>

				<button className='blue_button' style={{ marginTop: 50 }} onClick={handleRegister}>
					Зарегистрироваться
				</button>
			</IonContent>
		</IonPage>
	)
}
