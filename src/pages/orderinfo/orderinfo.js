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
import { ActionSheetController, NavController, NavParams, ToastController } from 'ionic-angular';
import { PropertyService } from '../../providers/property-service-mock';
import { Http } from '@angular/http';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the OrderinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderinfoPage = /** @class */ (function () {
    function OrderinfoPage(GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.order = this.navParams.data;
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/order/' + this.order, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (rese) {
            _this.orderno = rese.order_number;
            _this.orders = rese.product_order;
            _this.gtotal = _this.gettotal(_this.orders);
            _this.gtotal = "P" + _this.gtotal;
        });
    }
    OrderinfoPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    OrderinfoPage = __decorate([
        Component({
            selector: 'page-orderinfo',
            templateUrl: 'orderinfo.html',
        }),
        __metadata("design:paramtypes", [GlobalvarsProvider, Http, ActionSheetController, NavController, NavParams, PropertyService, ToastController])
    ], OrderinfoPage);
    return OrderinfoPage;
}());
export { OrderinfoPage };
//# sourceMappingURL=orderinfo.js.map