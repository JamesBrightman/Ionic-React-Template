import { IonContent, IonHeader, IonPage, IonCard, IonCardHeader, IonCardTitle,
         IonCardSubtitle, IonCardContent, IonItem, IonButton, IonLabel,
         IonList, IonCheckbox } from '@ionic/react';
import React, { useRef } from 'react';
import './Home.css';
import Toolbar from "../components/Toolbar";

const form = [
    { val: 'Lorem', isChecked: true, isDisabled: false },
    { val: 'Ipsum', isChecked: false, isDisabled: false },
    { val: 'porro', isChecked: false, isDisabled: true }
];

const Home: React.FC = () => {
    const contentRef = useRef(null);
    const scrollToTop= () => {
        // @ts-ignore
        contentRef.current.scrollToTop(1000);
    };
  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent ref={contentRef} scrollEvents={true}>
        <IonCard  className="welcomeImage">
            <img src="/assets/welcomeBacking.jpg" alt=""/>
            <IonCardHeader>
                <IonCardTitle>Welcome!</IonCardTitle>
                <IonCardSubtitle>To this Ionic Template</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Feugiat
                pretium nibh ipsum consequat. Congue nisi vitae suscipit tellus. Et egestas quis ipsum suspendisse
                ultrices. Dictum fusce ut placerat orci. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
                malesuada. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                Velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim neque volutpat ac tincidunt vitae semper quis lectus.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Feugiat
                pretium nibh ipsum consequat. Congue nisi vitae suscipit tellus. Et egestas quis ipsum suspendisse
                ultrices. Dictum fusce ut placerat orci. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
                malesuada. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                Velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim neque volutpat ac tincidunt vitae semper quis lectus.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean pharetra magna. Feugiat
                pretium nibh ipsum consequat. Congue nisi vitae suscipit tellus. Et egestas quis ipsum suspendisse
                ultrices. Dictum fusce ut placerat orci. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper
                malesuada. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.
                Velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim neque volutpat ac tincidunt vitae semper quis lectus.
            </IonCardContent>
        </IonCard>
        {/*Checklist*/}
        <IonList>
            {form.map(({val, isChecked, isDisabled}) => (
                <IonItem key={val}>
                    <IonLabel>{val}</IonLabel>
                    <IonCheckbox slot={"start"} value={val} checked={isChecked} disabled={isDisabled} />
                </IonItem>
                ))}
        </IonList>
          <IonButton className={"IonButton"}expand="block" onClick={()=>scrollToTop()}>Scroll to top</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
