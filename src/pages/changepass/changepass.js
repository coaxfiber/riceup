var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Http } from '@angular/http';
import { FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepassPage = /** @class */ (function () {
    function ChangepassPage(storage, loadingCtrl, alertCtrl, navCtrl, fb, navParams, http, GlobalvarsProvider) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.temp = '';
        this.form = fb.group({
            name: fb.group({
                oldpw: '',
                newpw: '',
                rnewpw: '',
            }),
        });
    }
    ChangepassPage.prototype.calltoChange = function () {
        var _this = this;
        if (this.form.value.name.rnewpw == '' || this.form.value.name.newpw == '' || this.form.value.name.oldpw == '') {
            this.alertConfirm2("please fill all the inputs");
        }
        else if (this.form.value.name.rnewpw != this.form.value.name.newpw) {
            this.alertConfirm2("New Password and ConfirmPassword does not Match!");
        }
        else {
            this.loading = this.loadingCtrl.create({
                content: 'Changing password...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new Headers();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new RequestOptions({ headers: header });
            this.http.patch('http://api.riceupfarmers.org/api/user/changepass?oldpassword=' + this.form.value.name.oldpw + '&newpassword=' + this.form.value.name.newpw, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.form.reset();
                _this.temp = _this.form.value.name.rnewpw;
                _this.form.value.name.rnewpw = '';
                _this.form.value.name.newpw = '';
                _this.form.value.name.oldpw = '';
                _this.loading.dismissAll();
                _this.alertConfirm2(res.message);
            });
        }
    };
    ChangepassPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        if (var2 == "Password changed successfully!") {
                            _this.navCtrl.setRoot(AccountPage);
                            _this.storage.set('password', _this.temp);
                        }
                        _this.form.reset();
                        _this.form.value.name.rnewpw = '';
                        _this.form.value.name.newpw = '';
                        _this.form.value.name.oldpw = '';
                    }
                }
            ]
        });
        alert.present();
    };
    ChangepassPage = __decorate([
        Component({
            selector: 'page-changepass',
            templateUrl: 'changepass.html',
        }),
        __metadata("design:paramtypes", [Storage, LoadingController, AlertController, NavController, FormBuilder, NavParams, Http, GlobalvarsProvider])
    ], ChangepassPage);
    return ChangepassPage;
}());
export { ChangepassPage };
//# sourceMappingURL=changepass.js.map