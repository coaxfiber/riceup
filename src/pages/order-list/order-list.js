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
import { OrderinfoPage } from '../orderinfo/orderinfo';
/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderListPage = /** @class */ (function () {
    function OrderListPage(GlobalvarsProvider, menu, http, navCtrl, navParams) {
        var _this = this;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.menu = menu;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/orders', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.orders = res;
        });
    }
    OrderListPage.prototype.callorderinfo = function (val) {
        this.navCtrl.push(OrderinfoPage, val);
    };
    OrderListPage = __decorate([
        Component({
            selector: 'page-order-list',
            templateUrl: 'order-list.html',
        }),
        __metadata("design:paramtypes", [GlobalvarsProvider, MenuController, Http, NavController, NavParams])
    ], OrderListPage);
    return OrderListPage;
}());
export { OrderListPage };
//# sourceMappingURL=order-list.js.map