import {IonPage} from '@ionic/react';
import {Content} from '../../../shared/layout/Content';
import Webcam from 'react-webcam';
import {useState} from 'react';
import './page.styles.css'
import {Footer} from "../../../components/Footer";

export const DocsPage = () => {
    const [showCam, setShowCam] = useState<boolean>(false);

    return (
        <>
            <IonPage
                style={{
                    height: 'calc(100vh - 74.5px)',
                    position: 'relative',
                    background: '#F9F9F9',
                }}
            >
                <Content>
                    <div
                        className="px-4 py-3 w-full bg-white h-[72px] flex justify-center items-center text-[25px] font-medium"
                    >
                        Документы
                    </div>

                    {showCam && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                            onClick={() => setShowCam(false)}
                        >
                            <div className="relative w-full max-w-md h-full z-[200000000000000000]">
                                <Webcam
                                    audio={false}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    videoConstraints={{height: 720, width: 1280}}
                                />
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <div className="w-40 h-40 border-4 border-white rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    )}

                    {!showCam && (
                        <div className="w-[300px] h-[225px] border mx-auto"></div>
                    )}
                    <button onClick={() => setShowCam(true)}>Включить камеру</button>
                </Content>
            </IonPage>
            <Footer/>
        </>
    );
};