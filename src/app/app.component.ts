import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {OrderListPage} from '../pages/order-list/order-list';
import {GlobalvarsProvider} from '../providers/globalvars/globalvars';
import { Events } from 'ionic-angular';
import {UserproductPage} from '../pages/userproduct/userproduct';
import {Http } from '@angular/http';

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

    id: string;
    rootPage: any = WelcomePage;
    farmer :any;
    appMenuItems: Array<MenuItem>;
    name:string=null;
    group:string=null;
    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(private http: Http,public events: Events,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public GlobalvarsProvider: GlobalvarsProvider) {

        this.initializeApp();
        this.farmer =[
                {
                    id: 1,
                    firstname: "Caroline Kingsley",
                    lastname: "Senior Broker",
                    middlename: "617-244-3672",
                    business_name: "617-244-3672"
                }
            ];
         events.subscribe('user:created', (user, time) => {
            // user and time are the same arguments passed in `events.publish(user, time)`4
           this.farmer = user;
           this.GlobalvarsProvider.setloggeduser(user);
            if (user.is_farmer==1) {
               this.accountMenuItems = [
                {title: 'My Account', component: WelcomePage, icon: 'ios-contact'},
                {title: 'My Products', component: UserproductPage, icon: 'archive'},
                {title: 'Logout', component: WelcomePage, icon: 'log-out'},
                ];
            }else{
              this.accountMenuItems = [
                {title: 'My Account', component: WelcomePage, icon: 'ios-contact'},
                {title: 'Logout', component: WelcomePage, icon: 'log-out'},
                ];
            }
            
          });
        this.appMenuItems = [
                {title: 'Products', component: PropertyListPage, icon: 'home'},
                {title: 'Farmers', component: BrokerListPage, icon: 'people'},
                {title: 'Cart', component: FavoriteListPage, icon: 'star'},
                {title: 'My Orders', component: OrderListPage, icon: 'checkmark-circle'},
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
