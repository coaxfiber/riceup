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
import { Config, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AddproductPage } from '../addproduct/addproduct';
import { UpdateproductPage } from '../updateproduct/updateproduct';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the UserproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserproductPage = /** @class */ (function () {
    function UserproductPage(alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
        this.timee = Date.now();
        this.pushPage = AddproductPage;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/products/' + this.GlobalvarsProvider.loggeduser.id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                _this.products = res;
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        });
    }
    UserproductPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(UpdateproductPage, property);
    };
    UserproductPage.prototype.delprod = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to remove the your Product?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var header = new Headers();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new RequestOptions({ headers: header });
                        _this.http.delete('http://api.riceupfarmers.org/api/product/remove/' + ids, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.presentAlert('Product Deleted!');
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UserproductPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UserproductPage = __decorate([
        Component({
            selector: 'page-userproduct',
            templateUrl: 'userproduct.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, NavParams, Http, MenuController, NavController, Config])
    ], UserproductPage);
    return UserproductPage;
}());
export { UserproductPage };
//# sourceMappingURL=userproduct.js.map