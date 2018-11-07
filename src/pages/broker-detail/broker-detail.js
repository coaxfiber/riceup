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
import { FarmerLocationPage } from '../farmer-location/farmer-location';
import { Http } from '@angular/http';
var BrokerDetailPage = /** @class */ (function () {
    function BrokerDetailPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timee = Math.random();
        this.timee = Math.random();
        this.farmer = this.navParams.data;
    }
    BrokerDetailPage.prototype.openloc = function (farmer) {
        this.navCtrl.push(FarmerLocationPage, farmer);
    };
    BrokerDetailPage = __decorate([
        Component({
            selector: 'page-broker-detail',
            templateUrl: 'broker-detail.html'
        }),
        __metadata("design:paramtypes", [Http, NavController, NavParams])
    ], BrokerDetailPage);
    return BrokerDetailPage;
}());
export { BrokerDetailPage };
//# sourceMappingURL=broker-detail.js.map