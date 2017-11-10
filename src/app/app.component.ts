import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {GlobalvarsProvider} from '../providers/globalvars/globalvars';
import { Events } from 'ionic-angular';


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    gid: string;
    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public events: Events,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public GlobalvarsProvider: GlobalvarsProvider) {
         events.subscribe('user:created', (user, time) => {
            // user and time are the same arguments passed in `events.publish(user, time)`
            this.gid = this.GlobalvarsProvider.getgid();
          });
        this.initializeApp();
        this.appMenuItems = [
            {title: this.gid, component: PropertyListPage, icon: 'home'},
            {title: 'Farmers', component: BrokerListPage, icon: 'people'},
            {title: 'Cart', component: FavoriteListPage, icon: 'star'},
            {title: 'My Orders', component: WelcomePage, icon: 'checkmark-circle'},
        ];

        this.accountMenuItems = [
            {title: 'My Account', component: WelcomePage, icon: 'ios-contact'},
            {title: 'Logout', component: WelcomePage, icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Terms and Conditions', component: WelcomePage, icon: 'bookmark'},
            {title: 'Privacy Policy', component: WelcomePage, icon: 'bookmark'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
