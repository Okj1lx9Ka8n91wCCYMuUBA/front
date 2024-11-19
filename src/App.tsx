import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import * as React from "react";
import { Route } from "react-router-dom";
import { ChatPage } from "./pages/chat";
import {Footer} from "./components/Footer/ui.tsx";

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/" exact={true}>
                    <div>Home Page</div>
                </Route>
                <Route path="/chat" component={ChatPage} />
            </IonRouterOutlet>
        </IonReactRouter>
        <Footer/>
    </IonApp>
);

export default App;