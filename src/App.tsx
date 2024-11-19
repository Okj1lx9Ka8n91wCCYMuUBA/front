import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import * as React from 'react'
import { Route } from 'react-router-dom'
import { ChatPage } from './pages/chat'
import { Footer } from './components/Footer'
import { Switch } from 'react-router-dom'

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Switch>
				<Route path='/' exact={true}>
					<div>Home Page</div>
				</Route>
				<Route path='/chat' component={ChatPage} />
			</Switch>
			<Footer />
		</IonReactRouter>
	</IonApp>
)

export default App
