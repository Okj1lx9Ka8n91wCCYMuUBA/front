import styled from 'styled-components'
import { IonContent, IonFooter, IonHeader, IonPage } from '@ionic/react'

export const Page = styled(IonPage)`
	padding: 15px 16px;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Content = styled(IonContent)<{ $padding?: boolean }>`
	--padding-start: ${({ $padding }) => ($padding ? '15px' : '0')};
	--padding-end: ${({ $padding }) => ($padding ? '16px' : '0')};
	--padding-top: ${({ $padding }) => ($padding ? '15px' : '0')};
	--padding-bottom: ${({ $padding }) => ($padding ? '15px' : '0')};
`

export const Footer = styled(IonFooter)`
	box-shadow: none;
	padding: 0;
	padding-top: 10px;
	--background: transparent;
`

export const Header = styled(IonHeader)`
	box-shadow: 0 7px 10.3px 0 #dfe6f3;
	width: 100vw;
	padding: 0 16px 16px;
`
