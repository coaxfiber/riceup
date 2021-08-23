import {Component} from '@angular/core';
//https://www.youtube.com/watch?v=fE09dHu6sP0
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import {NavController} from 'ionic-angular';
import {Platform,LoadingController, Loading} from 'ionic-angular';
import {PropertyListPage} from '../property-list/property-list';
import {SignupPage} from '../signup/signup';

import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { MenuController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

      loading: Loading;
      uname;
      pw;
  constructor(private storage: Storage,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public menu: MenuController,public events: Events,public GlobalvarsProvider:GlobalvarsProvider,fb: FormBuilder,public platform: Platform,public navCtrl: NavController,private http: Http){
	   storage.get('username').then((val) => {
          this.uname = val;
        storage.get('password').then((val2) => {
          this.pw = val2;
          if (val2!=null && val2!=undefined && val2!='') {
            this.calltologin();
          }
          else
          	this.guestlogin();
        });
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

	  calltologin()
    /*{
      //alert('ShowHomePage');
      
      this.http.get('http://localhost/riceup/riceupapi.php?action=log&uname='+this.uname+'&pw='+this.form.value.name.pw)
          .map(response => response.json())
          .subscribe(res => this.properties = res);
     this.action();
  }
  action()
  {
    if (this.properties[0]["id"]!="nodata") {
      this.navCtrl.setRoot(PropertyListPage);
      }
      else{
        alert("incorrect username or password!");
      }
  }*/
      {
         if (this.uname!=''&&this.pw!='') {
           this.loading = this.loadingCtrl.create({
            });
            this.loading.present();
             this.GlobalvarsProvider.username=this.uname;
             this.GlobalvarsProvider.password=this.pw;
              
              let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
                urlSearchParams.append("client_id",this.GlobalvarsProvider.client_id);
                urlSearchParams.append("client_secret",this.GlobalvarsProvider.client_secret);
                urlSearchParams.append("username",this.GlobalvarsProvider.username);
                urlSearchParams.append("password",this.GlobalvarsProvider.password);
                urlSearchParams.append("scope",this.GlobalvarsProvider.scope);
              let body = urlSearchParams.toString()

              var header = new Headers();
              header.append("Content-Type", "application/x-www-form-urlencoded");
              let option = new RequestOptions({ headers: header });
              this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
               .map(response => response.json())
                  .subscribe(data => {
                    if (data.token_type!=undefined) {
                      this.GlobalvarsProvider.settoken(data.token_type+" "+data.access_token);
                      //wwew start
                       var header = new Headers();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        header.append("Authorization",this.GlobalvarsProvider.gettoken());
                              
                      let option = new RequestOptions({ headers: header });
                                    
                           this.http.get('http://api.riceupfarmers.org/api/user', option)
                           .map(response => response.json())
                          .subscribe(data => {
                           this.createUser(data);
                         }, error => {
                         this.presentAlert("Slow internet Connection!");
                         this.loading.dismissAll();
                             });
                            //wew end
                       this.loading.dismissAll();
                       this.storage.set('username', this.uname);
                       this.storage.set('password', this.pw);
                          let urlSearchParams = new URLSearchParams();
                          urlSearchParams.append("passforpost",'any');
                               let body = urlSearchParams.toString()
                                 var header = new Headers();
                                    header.append("Accept", "application/json");
                                    header.append("Authorization",this.GlobalvarsProvider.gettoken());
                                let option2 = new RequestOptions({ headers: header });
                                 
                                   if (this.uname!='guest') {
                                        this.http.get('http://api.riceupfarmers.org/api/shippingdetails/',option2)
                                          .map(response => response.json())
                                          .subscribe(res => {
                                             this.GlobalvarsProvider.activeaddressid = res[0].id;
                                             this.GlobalvarsProvider.activeaddressaddress = res[0].shipping_address;
                                             this.GlobalvarsProvider.activeaddressmobile = res[0].mobile_no;
                                             this.GlobalvarsProvider.activeaddressid2 = res[0].id;
                                             this.GlobalvarsProvider.activeaddressaddress2 = res[0].shipping_address;
                                             this.GlobalvarsProvider.activeaddressmobile2 = res[0].mobile_no;

                                          },Error => {
                                            console.log(Error);
                                             this.presentAlert("No Internet Connection!"); 
                                          });
                                        }
                       this.navCtrl.setRoot(PropertyListPage);   
                    }
                    else
                    this.presentAlert("Invalid Username or password");
                    
               }
               , error => {
                 console.log(error);
               this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
               this.loading.dismissAll();
               });
              }
              else{
                this.presentAlert("Input username or password!");
              }
            }

         guestlogin()
    /*{
      //alert('ShowHomePage');
      
      this.http.get('http://localhost/riceup/riceupapi.php?action=log&uname='+this.uname+'&pw='+this.pw)
          .map(response => response.json())
          .subscribe(res => this.properties = res);
     this.action();
  }
  action()
  {
    if (this.properties[0]["id"]!="nodata") {
      this.navCtrl.setRoot(PropertyListPage);
      }
      else{
        alert("incorrect username or password!");
      }
  }*/
      {
        this.uname = 'guest';
        this.pw = 'guest123';
         if (this.uname!=''&&this.pw!='') {
           this.loading = this.loadingCtrl.create({
            });
            this.loading.present();
             this.GlobalvarsProvider.username=this.uname;
             this.GlobalvarsProvider.password=this.pw;
              
              let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
                urlSearchParams.append("client_id",this.GlobalvarsProvider.client_id);
                urlSearchParams.append("client_secret",this.GlobalvarsProvider.client_secret);
                urlSearchParams.append("username",this.GlobalvarsProvider.username);
                urlSearchParams.append("password",this.GlobalvarsProvider.password);
                urlSearchParams.append("scope",this.GlobalvarsProvider.scope);
              let body = urlSearchParams.toString()

              var header = new Headers();
              header.append("Content-Type", "application/x-www-form-urlencoded");
              let option = new RequestOptions({ headers: header });
              this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
               .map(response => response.json())
                  .subscribe(data => {
                    if (data.token_type!=undefined) {
                      this.GlobalvarsProvider.settoken(data.token_type+" "+data.access_token);
                      //wwew start
                       var header = new Headers();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        header.append("Authorization",this.GlobalvarsProvider.gettoken());
                              
                      let option = new RequestOptions({ headers: header });
                                    
                           this.http.get('http://api.riceupfarmers.org/api/user', option)
                           .map(response => response.json())
                          .subscribe(data => {
                           this.createUser(data);
                         }, error => {
                         this.presentAlert("Slow internet Connection!");
                         this.loading.dismissAll();
                             });
                            //wew end
                       this.loading.dismissAll();
                       this.storage.set('username', this.uname);
                       this.storage.set('password', this.pw);
                       this.navCtrl.setRoot(PropertyListPage);   
                    }
                    else
                    this.presentAlert("Invalid Username or password");
                    
               }
               , error => {
                 console.log(error);
               this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
               this.loading.dismissAll();
               });
              }
              else{
                this.presentAlert("Input username or password!");
              }
            }

          createUser(user) {
            this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
          }
          presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }
}
