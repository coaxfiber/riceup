import {Component} from '@angular/core';
import { TermsandagreementPage } from '../termsandagreement/termsandagreement';


import { FormBuilder, FormGroup } from '@angular/forms';
import {NavController} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {PropertyListPage} from '../property-list/property-list';

import {Http } from '@angular/http';
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
  form: FormGroup;data:any = {};
    properties: Array<any>;
    sect: Array<any>;
   pushPage: any;
   farmer: Array<any>;
	  constructor(public menu: MenuController,public events: Events,public GlobalvarsProvider:GlobalvarsProvider,fb: FormBuilder,public platform: Platform,public navCtrl: NavController,private http: Http){
	    this.pushPage = TermsandagreementPage;
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
          
         var link = 'http://127.0.0.1:8000/api/user/login?username='+ this.form.value.name.uname + "&password=" +this.form.value.name.pw;
         var myData = JSON.stringify({usernamwkkkkkkke:this.form.value.name.uname,passwowrd:this.form.value.name.pw});
        
        
         this.http.post(link, myData)
         .map(response => response.json())
         .subscribe(data => {
           console.log(data);
           if(data.message != undefined || data.message == 'Either username, password or both is invalid!' ){
             alert("incorrect username or password!");
           }else{
             this.GlobalvarsProvider.setgid(data[0]);
             this.createUser(data[0]);
             this.navCtrl.setRoot(PropertyListPage);
           }
         
         }
         , error => {
         alert("incorrect username or password!");
         });
       }// code...
      else{
        alert("Please input username or password");
      }
    }

    createUser(user) {
      console.log('User created!')
      this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
    }
}
