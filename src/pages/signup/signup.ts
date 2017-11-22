import { Component } from '@angular/core';
import {  NavController} from 'ionic-angular';
import {PropertyListPage} from '../property-list/property-list';
import {WelcomePage} from '../welcome/welcome';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};

  constructor(public navCtrl: NavController, public authService:AuthService ) {
  }

  signup(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(PropertyListPage);
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
}