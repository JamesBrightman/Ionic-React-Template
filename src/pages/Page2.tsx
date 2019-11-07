import React from 'react';
import {
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox,
    IonContent,
    IonHeader, IonInput,
    IonItem,
    IonLabel, IonList,
    IonPage, IonRadio, IonToggle
} from '@ionic/react';
import Toolbar from "../components/Toolbar";
import '../pages/Page2.css'

const Page2: React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <Toolbar />
            </IonHeader>
            <IonContent>
                <IonCard  className="welcomeImage">
                    <IonCardHeader>
                        <IonCardTitle>Sample Page</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Feugiat
                        pretium nibh ipsum consequat. Congue nisi vitae suscipit tellus. Et egestas quis ipsum suspendisse
                        ultrices. Dictum fusce ut placerat orci. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
                        malesuada. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                        Velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim neque volutpat ac tincidunt vitae semper quis lectus.
                    </IonCardContent>
                </IonCard>
                <IonList>
                    <IonItem>
                        <IonLabel>Put</IonLabel>
                        <IonToggle slot="end" color="danger"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Your</IonLabel>
                        <IonInput />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Content</IonLabel>
                        <IonRadio slot="end" />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Here</IonLabel>
                        <IonCheckbox slot="end" color="success"/>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Page2;