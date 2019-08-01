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
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { ProductonlyPage } from '../productonly/productonly';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the OrderinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderinfoPage = /** @class */ (function () {
    function OrderinfoPage(alertCtrl, loadingCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.orders = null;
        this.address = null;
        this.mobile = null;
        this.order = this.navParams.data;
        this.loadorders();
    }
    OrderinfoPage.prototype.loadorders = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Orders...',
        });
        this.loading.present();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/order/' + this.order, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (rese) {
            console.log(rese);
            _this.orderno = rese.order_number;
            _this.sdid = rese.sd_id;
            _this.s = rese.mode_of_shipping;
            _this.orders = rese.product_order;
            _this.gtotal = _this.gettotal(_this.orders);
            _this.gtotal = "P" + _this.gtotal;
            if (_this.s == 1) {
                var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                var option2 = new RequestOptions({ headers: header });
                _this.http.get('http://api.riceupfarmers.org/api/shippingdetail/' + _this.sdid, option2)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (rese) {
                    console.log(rese);
                    _this.address = rese[0].shipping_address;
                    _this.mobile = rese[0].mobile_no;
                    _this.loading.dismissAll();
                }, function (error) {
                    _this.loading.dismissAll();
                });
                // code...
            }
        }, function (error) {
            _this.loading.dismissAll();
        });
    };
    OrderinfoPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    OrderinfoPage.prototype.prod = function (property) {
        this.navCtrl.push(ProductonlyPage, property);
    };
    OrderinfoPage.prototype.cancelprod = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to cancel this ordered product?',
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
                        _this.loading = _this.loadingCtrl.create({
                            content: 'Canceling...',
                        });
                        _this.loading.present();
                        var urlSearchParams = new URLSearchParams();
                        urlSearchParams.append("grant_type", _this.GlobalvarsProvider.grant_type);
                        var body = urlSearchParams.toString();
                        var header = new Headers();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new RequestOptions({ headers: header });
                        _this.http.patch('http://api.riceupfarmers.org/api/product/cancel/' + ids, body, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (data) {
                            if (data.message != undefined) {
                                _this.presentAlert(data.message);
                                _this.loadorders();
                            }
                            else {
                                _this.presentAlert("Something went wrong!");
                            }
                            _this.loading.dismissAll();
                        }, function (Error) {
                            _this.presentAlert("No Internet Connection!");
                            _this.loading.dismissAll();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    OrderinfoPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    OrderinfoPage = __decorate([
        Component({
            selector: 'page-orderinfo',
            templateUrl: 'orderinfo.html',
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, Http, ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], OrderinfoPage);
    return OrderinfoPage;
}());
export { OrderinfoPage };
//# sourceMappingURL=orderinfo.js.map