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

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  form: FormGroup;data:any = {};
    properties: Array<any>;
    sect: Array<any>;
	 pushPage: any;
	  constructor(public GlobalvarsProvider:GlobalvarsProvider,fb: FormBuilder,public platform: Platform,public navCtrl: NavController,private http: Http){
	    this.pushPage = TermsandagreementPage;
	    this.form = fb.group({
        name: fb.group({
          uname: '',
          pw: '',
        }),
      });
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
          
         var link = 'http://localhost/riceup/login.php?mode=1';
         var myData = JSON.stringify({uname:this.form.value.name.uname,pw:this.form.value.name.pw});
         
         this.http.post(link, myData)
         .subscribe(data => {
           if(data["_body"]=='wrong password or username!'){
             alert("incorrect username or password!");
           }else{
             this.GlobalvarsProvider.setgid(data["_body"]);
             this.navCtrl.setRoot(PropertyListPage);
           }
         }, error => {
         alert("incorrect username or password!");
         });
       }// code...
      else{
        alert("Please input username or password");
      }
    }
}
