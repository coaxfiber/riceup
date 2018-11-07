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
import { ActionSheetController, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { CartPage } from '../cart/cart';
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CartupdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartupdatePage = /** @class */ (function () {
    function CartupdatePage(loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.quantity = 1;
        this.property = this.navParams.data.farmer_product;
        this.proid = this.navParams.data.id;
        this.quantity = this.navParams.data.quantity;
    }
    CartupdatePage.prototype.addq = function () {
        this.quantity += 1;
    };
    CartupdatePage.prototype.subq = function () {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    };
    CartupdatePage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    CartupdatePage.prototype.updatecart = function () {
        var _this = this;
        if (this.quantity > 0 && this.quantity <= this.property.stocks_available) {
            this.loading = this.loadingCtrl.create({
                content: 'Updating Order...',
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
            this.http.patch('http://api.riceupfarmers.org/api/cart/update/' + this.proid + '?qty=' + this.quantity, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.quantity = 1;
                _this.loading.dismissAll();
                _this.presentConfirm();
            }, function (Error) {
                _this.presentAlert("No Internet Connection!");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to " + this.property.stocks_available);
        }
    };
    CartupdatePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CartupdatePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: 'Order Updated!',
            buttons: [
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.navCtrl.setRoot(CartPage);
                    }
                }
            ]
        });
        alert.present();
    };
    CartupdatePage = __decorate([
        Component({
            selector: 'page-cartupdate',
            templateUrl: 'cartupdate.html',
        }),
        __metadata("design:paramtypes", [LoadingController, AlertController, GlobalvarsProvider, Http, ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], CartupdatePage);
    return CartupdatePage;
}());
export { CartupdatePage };
//# sourceMappingURL=cartupdate.js.map