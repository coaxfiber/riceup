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
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { Http } from '@angular/http';
/**
 * Generated class for the ProductonlyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductonlyPage = /** @class */ (function () {
    function ProductonlyPage(http, actionSheetCtrl, navCtrl, navParams) {
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quantity = 1;
        this.property = this.navParams.data.farmer_product;
        this.proid = this.navParams.data.id;
        this.quantity = this.navParams.data.quantity;
    }
    ProductonlyPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    ProductonlyPage = __decorate([
        Component({
            selector: 'page-productonly',
            templateUrl: 'productonly.html',
        }),
        __metadata("design:paramtypes", [Http, ActionSheetController, NavController, NavParams])
    ], ProductonlyPage);
    return ProductonlyPage;
}());
export { ProductonlyPage };
//# sourceMappingURL=productonly.js.map