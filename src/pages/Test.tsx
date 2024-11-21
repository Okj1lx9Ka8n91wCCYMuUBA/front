import {IonContent, IonPage} from "@ionic/react"
import {UserRegisterDTO} from "../entities/User/types";
import {AuthService} from "../entities/User/api";

export const TestPage = () => {

    const getUsers = async () => {
        const users: UserRegisterDTO = await AuthService.users()
        console.log(users)
    }

    return <IonPage className='h-[100vh]'>
        <IonContent>
            <div>Test page</div>
            <button onClick={getUsers}>Get users</button>
        </IonContent>
    </IonPage>
}