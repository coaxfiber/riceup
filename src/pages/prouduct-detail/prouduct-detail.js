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
/**
 * Generated class for the ProuductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProuductDetailPage = /** @class */ (function () {
    function ProuductDetailPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.farmer = this.navParams.data;
        this.timee = Date.now();
    }
    ProuductDetailPage = __decorate([
        Component({
            selector: 'page-prouduct-detail',
            templateUrl: 'prouduct-detail.html',
        }),
        __metadata("design:paramtypes", [Http, NavController, NavParams])
    ], ProuductDetailPage);
    return ProuductDetailPage;
}());
export { ProuductDetailPage };
//# sourceMappingURL=prouduct-detail.js.map