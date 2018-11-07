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
import { CartPage } from '../cart/cart';
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ShippingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingPage = /** @class */ (function () {
    function ShippingPage(loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.cart = this.navParams.data;
        this.orders = this.cart.product_order;
        this.gtotal = this.gettotal(this.orders);
        this.orderid = this.cart.id;
        this.address = this.GlobalvarsProvider.loggeduser.address;
    }
    ShippingPage.prototype.ionViewDidLoad = function () {
    };
    ShippingPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    ShippingPage.prototype.checkthisout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Checkout',
            message: "Are you sure you want to checkout the items in the cart?",
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
                        var urlSearchParams = new URLSearchParams();
                        urlSearchParams.append("passforpost", 'any');
                        var body = urlSearchParams.toString();
                        var header = new Headers();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new RequestOptions({ headers: header });
                        _this.http.patch('http://api.riceupfarmers.org/api/order/checkout/' + _this.orderid + '?shipping_mode=1&order_status=1&remarks=', body, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            // this.alertConfirm2(res.message);
                            _this.alertConfirm2(res.message);
                        }, function (Error) {
                            _this.presentAlert("No Internet Connection!");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ShippingPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Checkout',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(CartPage);
                    }
                }
            ]
        });
        alert.present();
    };
    ShippingPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingPage = __decorate([
        Component({
            selector: 'page-shipping',
            templateUrl: 'shipping.html',
        }),
        __metadata("design:paramtypes", [LoadingController, AlertController, GlobalvarsProvider, Http, ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], ShippingPage);
    return ShippingPage;
}());
export { ShippingPage };
//# sourceMappingURL=shipping.js.map