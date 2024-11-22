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
}) => {
	return {
		login: {
			inn: () => (
				<>
					<AuthInput
						style={{ marginTop: 39 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
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
						style={{ marginTop: 39 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
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
						style={{ marginTop: 11 }}
						placeholder={'Инн'}
						value={data.inn}
						setValue={data.setInn}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
						placeholder={'Имя'}
						value={data.name}
						setValue={data.setName}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
						placeholder={'Почта'}
						value={data.email}
						setValue={data.setEmail}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
						placeholder={'Название организации'}
						value={data.organization}
						setValue={data.setOrganization}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
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
						style={{ marginTop: 11 }}
						placeholder={'Имя'}
						value={data.name}
						setValue={data.setName}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
						placeholder={'Имя пользователя'}
						value={data.username}
						setValue={data.setUsername}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
						placeholder={'Почта'}
						value={data.email}
						setValue={data.setEmail}
					/>
					<AuthInput
						style={{ marginTop: 17 }}
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
