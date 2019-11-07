import { IonTitle, IonToolbar, IonButton, IonButtons, IonMenuButton, IonIcon } from '@ionic/react';
import React from 'react';
import { logoGithub } from 'ionicons/icons';

const Toolbar: React.FC = () => {
    return(
        <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle slot="end">Ionic React Template</IonTitle>
            <IonButtons slot="end">
                <IonButton href={"https://github.com/JamesBrightman"}>
                    <IonIcon slot="icon-only" icon={logoGithub} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
    );
};

export default Toolbar;