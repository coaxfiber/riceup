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
import { Config, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PropertyService } from '../../providers/property-service-mock';
import { PropertyDetailPage } from '../property-detail/property-detail';
import { Http } from '@angular/http';
import { MenuController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { Headers, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
var PropertyListPage = /** @class */ (function () {
    function PropertyListPage(alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, service, config) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/products', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.properties = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentAlert("Slow internet Connection!");
            _this.loading.dismissAll();
        });
        this.findAll();
        this.menu.enable(true);
    }
    PropertyListPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(PropertyDetailPage, property);
    };
    PropertyListPage.prototype.onInput = function (event) {
        var _this = this;
        this.service.findByName(this.searchKey)
            .then(function (data) {
            _this.properties = data;
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    PropertyListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    PropertyListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) { return _this.properties = data; })
            .catch(function (error) { return alert(error); });
    };
    PropertyListPage = __decorate([
        Component({
            selector: 'page-property-list',
            templateUrl: 'property-list.html'
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, NavParams, Http, MenuController, NavController, PropertyService, Config])
    ], PropertyListPage);
    return PropertyListPage;
}());
export { PropertyListPage };
//# sourceMappingURL=property-list.js.map