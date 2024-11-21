import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import * as React from 'react'
import { Route } from 'react-router-dom'
import { ChatPage } from './pages/chat'
import { Switch } from 'react-router-dom'
import { DocsPage } from './pages/docs'
import { TestPage } from './pages/Test.tsx'
import { NewsListPage } from './pages/newsList/ui/page.tsx'

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Switch>
				<Route path='/' exact={true}>
					<div>Home Page</div>
				</Route>
				<Route path='/chat' component={ChatPage} />
				<Route path='/docs' component={DocsPage} />
				<Route path='/main' component={NewsListPage} />
				<Route path='/test' component={TestPage} />
			</Switch>
		</IonReactRouter>
	</IonApp>
)

export default App
