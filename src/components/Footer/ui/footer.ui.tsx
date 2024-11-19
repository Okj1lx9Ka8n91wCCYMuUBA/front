import { IonFooter, useIonRouter, UseIonRouterResult } from '@ionic/react'
import { ButtonInfo, buttons } from '../config'
import { Icon } from './icon.ui'
import { useState } from 'react'

export const Footer = () => {
	const nav: UseIonRouterResult = useIonRouter()
	const [activePage, setActivePage] = useState<string>('main')

	const handleClick = (button: ButtonInfo) => {
		setActivePage(button.title)
		console.log(button)
		nav.push(button.url)
	}

	return (
		<IonFooter
			className={
				'fixed bottom-0 left-0 right-0 px-[34px] pb-4 pt-3 rounded-t-[15px] flex justify-between'
			}>
			{buttons.map(button => {
				return (
					<Icon
						button={button}
						isActive={button.title === activePage}
						onClick={() => handleClick(button)}></Icon>
				)
			})}
		</IonFooter>
	)
}
