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
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { CartupdatePage } from '../cartupdate/cartupdate';
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(loadingCtrl, alertCtrl, GlobalvarsProvider, menu, http, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.menu = menu;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gtotal = 'No Items';
        this.orderid = undefined;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Cart...',
        });
        this.loading.present();
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.post('http://api.riceupfarmers.org/api/order/new', body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.loading.dismissAll();
            if (res.order_number[0] == undefined) {
                // code...
            }
            else {
                var g = res.order_number[0].id;
                _this.orderid = g;
                _this.http.get('http://api.riceupfarmers.org/api/order/' + g, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (rese) {
                    _this.orders = rese.product_order;
                    if (_this.orders != undefined) {
                        _this.gtotal = _this.gettotal(_this.orders);
                        if (_this.gtotal != 0)
                            _this.gtotal = "P" + _this.gtotal;
                        else
                            _this.gtotal = 'No Items';
                    }
                    else
                        _this.presentAlert("No items in cart!");
                }, function (err) {
                    _this.loading.dismissAll();
                    _this.presentAlert("No Internet Connection!");
                });
            }
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentAlert("No Internet Connection!");
        });
    };
    CartPage.prototype.updatecart = function (property) {
        this.navCtrl.push(CartupdatePage, property);
    };
    CartPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    CartPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CartPage.prototype.delcart = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to remove the item in the cart?',
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
                        _this.http.delete('http://api.riceupfarmers.org/api/cart/remove/' + ids, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.checkthisout = function () {
        var _this = this;
        if (this.gtotal != 'No Items') {
            var alert_1 = this.alertCtrl.create({
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
                            _this.http.patch('http://api.riceupfarmers.org/api/order/checkout/' + _this.orderid + '?shipping_mode=0&order_status=1&remarks=', body, option)
                                .map(function (response) { return response.json(); })
                                .subscribe(function (res) {
                                // this.alertConfirm2(res.message);
                                _this.alertConfirm2(res.message);
                            }, function (Error) {
                                _this.presentAlert("Something went wrong!");
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.presentAlert("No items in cart!");
        }
    };
    CartPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Checkout',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage = __decorate([
        Component({
            selector: 'page-cart',
            templateUrl: 'cart.html',
        }),
        __metadata("design:paramtypes", [LoadingController, AlertController, GlobalvarsProvider, MenuController, Http, NavController, NavParams])
    ], CartPage);
    return CartPage;
}());
export { CartPage };
//# sourceMappingURL=cart.js.map