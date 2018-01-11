import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { TermsandagreementPage } from '../pages/termsandagreement/termsandagreement';
import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {CartPage} from '../pages/cart/cart';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {OrderListPage} from '../pages/order-list/order-list';
import {GlobalvarsProvider} from '../providers/globalvars/globalvars';
import { Events } from 'ionic-angular';
import {UserproductPage} from '../pages/userproduct/userproduct';
import {Http } from '@angular/http';
import {AccountPage} from '../pages/account/account';
import {PrivacyPolicyPage} from '../pages/privacy-policy/privacy-policy';
import { AlertController } from 'ionic-angular';


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

    constructor(private alertCtrl: AlertController,private http: Http,public events: Events,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public GlobalvarsProvider: GlobalvarsProvider) {

        this.initializeApp();
        this.farmer =[
                {
                    id: 1,
                    firstname: "Elton Bagne",
                    lastname: "Gwapo",
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
                {title: 'My Account', component: AccountPage, icon: 'ios-contact'},
                {title: 'My Products', component: UserproductPage, icon: 'archive'},
                ];
            }else{
              this.accountMenuItems = [
                {title: 'My Account', component: AccountPage, icon: 'ios-contact'},
                ];
            }
            
          });
        this.appMenuItems = [
                {title: 'Products', component: PropertyListPage, icon: 'home'},
                {title: 'Farmers', component: BrokerListPage, icon: 'people'},
                {title: 'Cart', component: CartPage, icon: 'md-cart'},
                {title: 'My Orders', component: OrderListPage, icon: 'checkmark-circle'},
                ];

        

        this.helpMenuItems = [
            {title: 'Terms and Conditions', component: TermsandagreementPage, icon: 'bookmark'},
            {title: 'Privacy Policy', component: PrivacyPolicyPage, icon: 'ios-information-outline'},
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
        this.GlobalvarsProvider.setcredentials();
        this.nav.setRoot(page.component);
    }
    alertConfirm() {
      let alert = this.alertCtrl.create({
        title: 'Confirm Logout',
        message: 'are you sure you want to Logout?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Yes',
            handler: () => {
                this.nav.setRoot(WelcomePage);
            }
          }
        ]
      });
      alert.present();
    }
}
