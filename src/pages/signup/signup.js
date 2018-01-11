var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WelcomePage } from '../welcome/welcome';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { RequestOptions } from '@angular/http';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, authService, GlobalvarsProvider, http, alertCtrl, fb) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.lastImage = null;
        this.long = '';
        this.lat = '';
        this.username = '';
        this.buttonDisabled = true;
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
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.form.value.name.username2 != "" && this.form.value.name.password2 != "" && this.form.value.name.cpassword != "" && this.form.value.name.firstname != "" && this.form.value.name.lastname != "" && this.form.value.name.email != "" && this.form.value.name.address != "" && this.form.value.name.mobilenumber != "") {
            if (this.form.value.name.password2 == this.form.value.name.cpassword) {
                this.http.get('http://api.riceupfarmers.org/api/user/register?username=' + this.form.value.name.username2 + "&password=" + this.form.value.name.password2 + "&firstname=" + this.form.value.name.firstname + "&lastname=" + this.form.value.name.lastname + "&address=" + this.form.value.name.address + "&mobile_number=" + this.form.value.name.mobilenumber + "&email=" + this.form.value.name.email + "&is_farmer=0")
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    var urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("grant_type", _this.GlobalvarsProvider.grant_type);
                    var body = urlSearchParams.toString();
                    var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option = new RequestOptions({ headers: header });
                    _this.http.post('http://api.riceupfarmers.org/api/user/register?username=' + _this.form.value.name.username2 + "&password=" + _this.form.value.name.password2 + "&firstname=" + _this.form.value.name.firstname + "&lastname=" + _this.form.value.name.lastname + "&address=" + _this.form.value.name.address + "&mobile_number=" + _this.form.value.name.mobilenumber + "&email=" + _this.form.value.name.email + "&is_farmer=0" + "&history=", body, option)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        if (res.message != undefined) {
                            alert(res.message);
                            _this.navCtrl.setRoot(WelcomePage);
                        }
                        else {
                            alert(res[0]);
                        }
                    });
                });
            }
            else {
                alert("confirm password does not match with the password!");
            }
        }
        else {
            alert("Please Fill in all the fields!");
        }
    };
    SignupPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(WelcomePage);
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [NavController, AuthService, GlobalvarsProvider, Http, AlertController, FormBuilder])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map