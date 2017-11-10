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
import { NavController } from 'ionic-angular';
import { BrokerService } from '../../providers/broker-service-mock';
import { BrokerDetailPage } from '../broker-detail/broker-detail';
import leaflet from 'leaflet';
import { Http } from '@angular/http';
var BrokerListPage = /** @class */ (function () {
    function BrokerListPage(navCtrl, service, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.http = http;
        this.viewMode = "list";
        this.http.get('http://localhost/riceup/riceupapi.php?action=getall')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.brokers = res; });
        service.findAll().then(function (data) { return _this.brokers = data; });
    }
    BrokerListPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    };
    BrokerListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.showMarkers();
        });
    };
    BrokerListPage.prototype.showMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.brokers.forEach(function (property) {
            if (property.loclat, property.loclng) {
                var marker = leaflet.marker([property.lat, property.long]).on('click', function (event) { return _this.openBrokerDetail(event.target.data); });
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
        __metadata("design:paramtypes", [NavController, BrokerService, Http])
    ], BrokerListPage);
    return BrokerListPage;
}());
export { BrokerListPage };
//# sourceMappingURL=broker-list.js.map