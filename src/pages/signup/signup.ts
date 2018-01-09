
import {PropertyListPage} from '../property-list/property-list';
import {WelcomePage} from '../welcome/welcome';
import { AuthService } from '../../providers/auth-service/auth-service';
import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {Http, Headers} from '@angular/http';
import { NavController, Loading } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {RequestOptions} from '@angular/http';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  form: FormGroup;
  map2;
  lastImage: string = null;
  loading: Loading;
  long:string = '';
  lat:string = '';
  username:string = '';
  buttonDisabled = true;
  userData: any;

  constructor(public navCtrl: NavController, public authService:AuthService,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,private alertCtrl: AlertController,fb: FormBuilder ) {
    this.form = fb.group({
      name: fb.group({
        username2: '',
        password2: '',
        cpassword: '',
        firstname: '',
         lastname: '',
        email: '',
        mobilenumber: '',
        address: '',
      }),
    });
  }

  signup(){
    if (this.form.value.name.username2!=""&&this.form.value.name.password2!=""&&this.form.value.name.cpassword!=""&&this.form.value.name.firstname!=""&&this.form.value.name.lastname!=""&&this.form.value.name.email!=""&&this.form.value.name.address!=""&&this.form.value.name.mobilenumber!="") {
       if (this.form.value.name.password2==this.form.value.name.cpassword) {
                                
              this.http.get('http://api.riceupfarmers.org/api/user/register?username='+this.form.value.name.username2+"&password="+this.form.value.name.password2+"&firstname="+this.form.value.name.firstname+"&lastname="+this.form.value.name.lastname+"&address="+this.form.value.name.address+"&mobile_number="+this.form.value.name.mobilenumber+"&email="+this.form.value.name.email+"&is_farmer=0")
                .map(response => response.json())
                .subscribe(res => {
                  console.log(res);
                });
           }
          else {
            alert("confirm password does not match with the password!");
          }
    }else
    {
      alert("Please Fill in all the fields!");
    }
  }

  login(){
    //Login page link
    this.navCtrl.push(WelcomePage);
  }
}