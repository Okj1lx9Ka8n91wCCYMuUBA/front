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
import { AuthFirstStep } from './pages/auth/AuthFirstStep.tsx'
import { AuthSecondStep } from './pages/auth/AuthSecondStep.tsx'
import { BusinessQuestionsPage } from './pages/BuisnessQuestions'
import { ProfilePage } from './pages/profile'
import { SupportPage } from './pages/support'
import { GrantPage } from './pages/grant'
import { GrantApplicationPage } from './pages/grantApplication'
import { GrantRequestedPage } from './pages/grantRequested'

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<Switch>
				<Route path='/' exact component={IntroPage} />
				<Route path='/chat' component={ChatPage} />
				<Route path='/docs' component={DocsPage} />
				<Route path='/main' component={NewsListPage} />
				<Route path='/support' component={SupportPage} />
				<Route path='/test' component={TestPage} />
				<Route path='/profile' component={ProfilePage} />
				<Route path='/registration/individual' component={IndividualRegisterPage} />
				<Route path='/news/:newsID' component={SingleNewsPage} />
				<Route path='/grant/:grantID/requested' component={GrantRequestedPage} />
				<Route path='/grant/:grantID/application' component={GrantApplicationPage} />
				<Route path='/grant/:grantID' component={GrantPage} />
				<Route path='/auth_first_step' component={AuthFirstStep} />
				<Route path='/auth_second_step' component={AuthSecondStep} />
				<Route path='/business_questions' component={BusinessQuestionsPage} />
			</Switch>
		</IonReactRouter>
	</IonApp>
)

export default App
