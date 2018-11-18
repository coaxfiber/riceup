import {WelcomePage} from '../welcome/welcome';
import { AuthService } from '../../providers/auth-service/auth-service';
import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Http, Headers} from '@angular/http';
import { NavController,LoadingController, Loading  } from 'ionic-angular';
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

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public authService:AuthService,public GlobalvarsProvider:GlobalvarsProvider,private http: Http,private alertCtrl: AlertController,fb: FormBuilder ) {
    this.form = fb.group({
      name: fb.group({
        username2: '',
        password2: '',
        cpassword: '',
        firstname: '',middlename: '',
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
            this.loading = this.loadingCtrl.create({
              content: 'Signing Up...',
            });
            this.loading.present();       
              let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
              let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Content-Type", "application/x-www-form-urlencoded");
                  let option = new RequestOptions({ headers: header });
                                       
              this.http.post('http://api.riceupfarmers.org/api/user/register?username='+this.form.value.name.username2+"&password="+this.form.value.name.password2+"&middlename="+this.form.value.name.middlename+"&firstname="+this.form.value.name.firstname+"&lastname="+this.form.value.name.lastname+"&address="+this.form.value.name.address+"&mobile_no="+this.form.value.name.mobilenumber+"&email="+this.form.value.name.email+"&is_farmer=0"+"&history=",body,option)
                .map(response => response.json())
                .subscribe(res => {
                   this.loading.dismissAll();
                  if (res.message != undefined) {
                    this.presentAlert(res.message);
                    this.navCtrl.setRoot(WelcomePage);
                  }else
                  {
                    this.presentAlert(res[0]);
                  }

                }, error => {
                         this.loading.dismissAll();
                         this.presentAlert("Something went wrong!");
                         });
           }
          else {
            this.presentAlert("confirm password does not match with the password!");
          }
    }else
    {
      this.presentAlert("Please Fill in all the fields!");
    }
  }

  login(){
    //Login page link
    this.navCtrl.push(WelcomePage);
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