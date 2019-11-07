import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonApp, IonRouterOutlet, IonSplitPane} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {beer, bicycle, home} from 'ionicons/icons';
import { AppPage } from './declarations';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Pages Imports */
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

/* Components Imports */
import Menu from './components/Menu';

/* Creating appPages for routing */
const appPages: AppPage[] = [
    {
        title: "Home",
        url: "/home",
        icon: home
    },
    {
        title: "Page1",
        url: "/page1",
        icon: beer
    },
    {
        title: "Page2",
        url: "/page2",
        icon: bicycle
    }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonSplitPane contentId={"main"}>
            <Menu appPages={appPages} />
            <IonRouterOutlet id={"main"}>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/page1" component={Page1} exact={true} />
                <Route path="/page2" component={Page2} exact={true} />
                <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
        </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
