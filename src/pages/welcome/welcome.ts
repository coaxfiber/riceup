import {Component} from '@angular/core';
import { TermsandagreementPage } from '../termsandagreement/termsandagreement';
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
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
      loading: Loading;
  form: FormGroup;data:any = {};
    properties: Array<any>;
    sect: Array<any>;
   pushPage: any;
   login: any;
   farmer: Array<any>;
	  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public menu: MenuController,public events: Events,public GlobalvarsProvider:GlobalvarsProvider,fb: FormBuilder,public platform: Platform,public navCtrl: NavController,private http: Http){
	    this.pushPage = TermsandagreementPage;
      this.login = SignupPage;
	    this.form = fb.group({
        name: fb.group({
          uname: '',
          pw: '',
        }),
      });

    this.menu.enable(false);
	  }

	  calltologin()
    /*{
    	//alert('ShowHomePage');
      
      this.http.get('http://localhost/riceup/riceupapi.php?action=log&uname='+this.form.value.name.uname+'&pw='+this.form.value.name.pw)
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
         if (this.form.value.name.uname!=''&&this.form.value.name.pw!='') {
           this.loading = this.loadingCtrl.create({
              content: 'Logging in...',
            });
            this.loading.present();
             this.GlobalvarsProvider.username=this.form.value.name.uname;
             this.GlobalvarsProvider.password=this.form.value.name.pw;
              
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
              header.append("Accept", "application/json");
              let option = new RequestOptions({ headers: header });
              this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
               .map(response => response.json())
                  .subscribe(data => {
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
                         });
                        //wew end
                   this.loading.dismissAll();
                   this.navCtrl.setRoot(PropertyListPage);     
               }
               , error => {
               this.presentAlert("Incorrect username or password");
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
/*
        if (this.form.value.name.uname!=''&&this.form.value.name.pw!='') {
          
         var link = 'http://riceupfarmers.org/oauth/token';
         var myData = JSON.stringify({grant_type:'password',client_id:'2',client_secret:'uzyd8xUn9UeaQaMB8hfghABzvAFJZE8Djc4JcJlu',usernamei:this.form.value.name.uname,passwowrd:this.form.value.name.pw,username:'windellevega',password:'pass123',scope:''});
      
        let headers = new Headers(
        {
          'Content-Type' : 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({ headers: headers });


         this.http.post(link, myData, options)
         .map(response => response.json())
         .subscribe(data => {
           console.log(data);
             this.GlobalvarsProvider.setgid(data[0]);
             this.createUser(data[0]);
            this.navCtrl.setRoot(PropertyListPage);
             console.log(data[0]);         
         }
         , error => {
         alert(error);
         });
       } code...
      else{
        alert("Please input username or password");
      }*/