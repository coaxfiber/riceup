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
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
/**
 * Generated class for the FarmerLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FarmerLocationPage = /** @class */ (function () {
    function FarmerLocationPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewMode = "map";
        this.farmer = this.navParams.data;
        console.log(this.farmer);
        this.showMap();
    }
    FarmerLocationPage.prototype.showMarkers = function () {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        var marker = leaflet.marker([this.farmer.address_lat, this.farmer.address_long]).on('click', function (event) { return console.log("map marker"); });
        this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
    };
    FarmerLocationPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = leaflet.map("map").setView([_this.farmer.address_lat, _this.farmer.address_long], 10);
            leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map);
            _this.showMarkers();
            _this.map.locate({ setView: false, maxZoom: 10 });
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
    FarmerLocationPage = __decorate([
        Component({
            selector: 'page-farmer-location',
            templateUrl: 'farmer-location.html',
        }),
        __metadata("design:paramtypes", [AlertController, NavController, NavParams])
    ], FarmerLocationPage);
    return FarmerLocationPage;
}());
export { FarmerLocationPage };
//# sourceMappingURL=farmer-location.js.map