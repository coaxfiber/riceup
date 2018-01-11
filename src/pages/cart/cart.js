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
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(GlobalvarsProvider, menu, http, navCtrl, navParams) {
        var _this = this;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.menu = menu;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.post('http://api.riceupfarmers.org/api/order/new', urlSearchParams, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.orderid = res.order_number[0].id;
            _this.http.get('http://api.riceupfarmers.org/api/order/' + res.order_number[0].id, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (rese) {
                _this.orders = rese.product_order;
                _this.gtotal = _this.gettotal(_this.orders);
                _this.gtotal = "P" + _this.gtotal;
            }, function (err) {
            });
        });
    }
    CartPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    CartPage.prototype.delcart = function (ids) {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.delete('http://api.riceupfarmers.org/api/cart/remove/' + ids, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        if (condition) {
            // code...
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("shipping_mode", '0');
            urlSearchParams.append("order_status", '1');
            urlSearchParams.append("remarks", '');
            var body = urlSearchParams.toString();
            var header = new Headers();
            header.append("Accept", "application/json");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new RequestOptions({ headers: header });
            this.http.patch('http://api.riceupfarmers.org/api/order/checkout/' + this.orderid + '?shipping_mode=0&order_status=1&remarks=', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                alert(res.message);
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            });
        }
    };
    CartPage = __decorate([
        Component({
            selector: 'page-cart',
            templateUrl: 'cart.html',
        }),
        __metadata("design:paramtypes", [GlobalvarsProvider, MenuController, Http, NavController, NavParams])
    ], CartPage);
    return CartPage;
}());
export { CartPage };
//# sourceMappingURL=cart.js.map