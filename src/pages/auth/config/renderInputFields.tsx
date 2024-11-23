import { Dispatch, SetStateAction } from 'react'
import { AuthInput } from '../../../shared/ui/AuthInput'

export const renderInputFields = (data: {
	inn: string
	setInn: Dispatch<SetStateAction<string>>
	email: string
	setEmail: Dispatch<SetStateAction<string>>
	name: string
	setName: Dispatch<SetStateAction<string>>
	password: string
	setPassword: Dispatch<SetStateAction<string>>
	username: string
	setUsername: Dispatch<SetStateAction<string>>
	organization: string
	setOrganization: Dispatch<SetStateAction<string>>
	phoneNumber: string
	setPhoneNumber: Dispatch<SetStateAction<string>>
}) => {
	return {
		login: {
			inn: () => (
				<>
					<AuthInput
						label={'Введите имя пользователя'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						label={'Введите пароль'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Пароль'}
						type={'password'}
						value={data.password}
						setValue={data.setPassword}
					/>
				</>
			),
			email: () => (
				<>
					<AuthInput
						label={'Введите имя пользователя'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						label={'Введите пароль'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Пароль'}
						type={'password'}
						value={data.password}
						setValue={data.setPassword}
					/>
				</>
			),
		},
		register: {
			inn: () => (
				<>
					<AuthInput
						label={'Введите ИНН'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Инн'}
						value={data.inn}
						setValue={data.setInn}
					/>
					<AuthInput
						label={'Номер телефона'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Номер телефона'}
						value={data.phoneNumber}
						setValue={data.setPhoneNumber}
					/>
					<AuthInput
						label={'Введите имя пользователя'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						label={'Введите пароль'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Пароль'}
						type={'password'}
						value={data.password}
						setValue={data.setPassword}
					/>
				</>
			),
			email: () => (
				<>
					<AuthInput
						label={'Введите имя'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Имя'}
						value={data.name}
						setValue={data.setName}
					/>
					<AuthInput
						label={'Введите имя пользователя'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						label={'Введите почту'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Почта'}
						value={data.email}
						setValue={data.setEmail}
					/>
					<AuthInput
						label={'Введите пароль'}
						labelStyle={{ marginTop: 17 }}
						placeholder={'Пароль'}
						type={'password'}
						value={data.password}
						setValue={data.setPassword}
					/>
				</>
			),
		},
	}
}
