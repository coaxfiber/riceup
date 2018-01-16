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
import { NavController, LoadingController } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import { ProuductDetailPage } from '../prouduct-detail/prouduct-detail';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import leaflet from 'leaflet';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertController } from 'ionic-angular';
var BrokerListPage = /** @class */ (function () {
    function BrokerListPage(alertCtrl, loadingCtrl, GlobalvarsProvider, navCtrl, service, http) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navCtrl = navCtrl;
        this.service = service;
        this.http = http;
        this.viewMode = "list";
        this.loading = this.loadingCtrl.create({
            content: 'Loading farmers...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new Headers();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/users/farmer', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.farmers = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentAlert("Slow internet Connection!");
            _this.loading.dismissAll();
        });
    }
    BrokerListPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    BrokerListPage.prototype.openBrokerDetail = function (farmer) {
        this.navCtrl.push(BrokerDetailPage, farmer);
    };
    BrokerListPage.prototype.openBrokerDetail2 = function (farmer) {
        this.navCtrl.push(ProuductDetailPage, farmer);
    };
    BrokerListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = leaflet.map("map").setView([17.622021, 121.727625], 12);
            leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map);
            _this.showMarkers();
            _this.map.locate({ setView: false, maxZoom: 12 });
            _this.map.on('locationfound', function (e) {
                var radius = e.accuracy / 2;
                var popup = leaflet.popup();
                popup
                    .setLatLng(e.latlng)
                    .setContent("You are currently here!")
                    .openOn(_this.map);
                leaflet.circle(e.latlng, radius).addTo(_this.map);
            });
            function onLocationError(e) {
                alert("Turn on your service location to see your current location!");
                this.viewMode = "list";
            }
            _this.map.on('locationerror', onLocationError);
        });
    };
    BrokerListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.farmers.forEach(function (property) {
            if (property.address_lat, property.address_long) {
                var marker = leaflet.marker([property.address_lat, property.address_long]).on('click', function (event) { return _this.openBrokerDetail2(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    BrokerListPage = __decorate([
        Component({
            selector: 'page-broker-list',
            templateUrl: 'broker-list.html'
        }),
        __metadata("design:paramtypes", [AlertController, LoadingController, GlobalvarsProvider, NavController, BrokerService, Http])
    ], BrokerListPage);
    return BrokerListPage;
}());
export { BrokerListPage };
//# sourceMappingURL=broker-list.js.map