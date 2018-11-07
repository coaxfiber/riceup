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
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
import { Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { UserproductPage } from '../userproduct/userproduct';
import { ChangepicPage } from '../changepic/changepic';
/**
 * Generated class for the UpdateproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdateproductPage = /** @class */ (function () {
    function UpdateproductPage(alertCtrl, loadingCtrl, GlobalvarsProvider, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datenow = Date.now();
        this.timee = Date.now();
        this.property = this.navParams.data;
        this.stocks_available = this.property.stocks_available;
        this.product_name = this.property.product_name;
        this.product_desc = this.property.product_desc;
        this.unit_type = this.property.unit_type;
        this.price_per_unit = this.property.price_per_unit;
        this.date_of_harvest = this.property.date_of_harvest;
    }
    UpdateproductPage.prototype.update = function () {
        var _this = this;
        if (this.stocks_available != '' || this.product_name != '' || this.product_desc != '' || this.unit_type != '' || this.price_per_unit != '' || this.date_of_harvest != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Updating Product...',
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
            this.http.patch('http://api.riceupfarmers.org/api/product/update/' + this.property.id + '?name=' + this.product_name + '&desc=' + this.product_desc + '&photo_url=' + this.property.photo_url + '&unit=' + this.unit_type + '&price=' + this.price_per_unit + '&stocks=' + this.stocks_available + '&harvest_date=' + this.date_of_harvest, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.loading.dismissAll();
                _this.presentConfirm("Product Updated!!");
            });
        }
        else {
            this.presentAlert("All Fields are required!");
        }
    };
    UpdateproductPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UpdateproductPage.prototype.presentConfirm = function (val) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: val,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(UserproductPage);
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateproductPage.prototype.changepic = function (var2) {
        this.navCtrl.push(ChangepicPage, var2);
    };
    UpdateproductPage = __decorate([
        Component({
            selector: 'page-updateproduct',
            templateUrl: 'updateproduct.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, Http, NavController, NavParams])
    ], UpdateproductPage);
    return UpdateproductPage;
}());
export { UpdateproductPage };
//# sourceMappingURL=updateproduct.js.map