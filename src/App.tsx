import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import * as React from 'react'
import { Route } from 'react-router-dom'
import { ChatPage } from './pages/chat'
import { Switch } from 'react-router-dom'
import { DocsPage } from './pages/docs'
import { TestPage } from './pages/Test.tsx'
import { NewsListPage } from './pages/newsList/ui/page.tsx'
import { SingleNewsPage } from './pages/singleNews'
import { IntroPage } from './pages/intro/page.tsx'
import { IndividualRegisterPage } from './pages/auth/IndividualRegister'

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Switch>
				<Route path='/' exact component={IntroPage} />
				<Route path='/chat' component={ChatPage} />
				<Route path='/docs' component={DocsPage} />
				<Route path='/main' component={NewsListPage} />
				<Route path='/test' component={TestPage} />
				<Route path='/registration/individual' component={IndividualRegisterPage} />
				<Route path='/news/:newsID' component={SingleNewsPage}></Route>
			</Switch>
		</IonReactRouter>
	</IonApp>
)

export default App
