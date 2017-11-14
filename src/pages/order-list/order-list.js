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
/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderListPage = /** @class */ (function () {
    function OrderListPage(menu, http, navCtrl, navParams) {
        var _this = this;
        this.menu = menu;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http.get('http://localhost/riceup/riceupapi.php?action=getorderall')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.order = res; });
        this.menu.enable(true);
    }
    OrderListPage = __decorate([
        Component({
            selector: 'page-order-list',
            templateUrl: 'order-list.html',
        }),
        __metadata("design:paramtypes", [MenuController, Http, NavController, NavParams])
    ], OrderListPage);
    return OrderListPage;
}());
export { OrderListPage };
//# sourceMappingURL=order-list.js.map