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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import { AccountPage } from '../account/account';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';
/**
 * Generated class for the UpdateaccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdateaccountPage = /** @class */ (function () {
    function UpdateaccountPage(events, http, loadingCtrl, alertCtrl, navCtrl, navParams, GlobalvarsProvider) {
        this.events = events;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.viewMode = "map";
        this.viewMode2 = "list";
        this.user = this.GlobalvarsProvider.loggeduser;
        this.isfarmer = this.user.is_farmer;
        this.test = this.user.is_farmer;
        this.tempuser = this.user;
    }
    UpdateaccountPage.prototype.showMarkers = function () {
        if (this.user.address_lat != null) {
            if (this.markersGroup) {
                this.map.removeLayer(this.markersGroup);
            }
            this.markersGroup = leaflet.layerGroup([]);
            var marker = leaflet.marker([this.user.address_lat, this.user.address_long]).on('click', function (event) { return console.log("map marker"); });
            this.markersGroup.addLayer(marker);
            this.map.addLayer(this.markersGroup);
        }
    };
    UpdateaccountPage.prototype.showMap = function () {
        var _this = this;
        if (this.isfarmer == 1) {
            setTimeout(function () {
                if (_this.user.address_lat != null) {
                    _this.map = leaflet.map("map2").setView([_this.user.address_lat, _this.user.address_long], 10);
                    leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                        attribution: '&copy; techventures.ph'
                    }).addTo(_this.map);
                }
                else {
                    _this.map = leaflet.map("map2").setView([15.060377, 120.674492], 10);
                    leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                        attribution: '&copy; techventures.ph'
                    }).addTo(_this.map);
                }
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
                var popup = leaflet.popup();
                _this.map.on('click', function (e) {
                    popup
                        .setLatLng(e.latlng)
                        .setContent("<b>Selected Location</b><br>Coordinates: <br>lat: " + e.latlng.lat.toString() + "<br>lng: " + e.latlng.lng.toString())
                        .openOn(_this.map);
                    _this.user.address_long = e.latlng.lng;
                    _this.user.address_lat = e.latlng.lat;
                    //console.log(this.form.value.name.title);
                });
            });
        }
    };
    UpdateaccountPage.prototype.createUser = function (user) {
        this.events.publish('isfarm:created', user, this.GlobalvarsProvider.getgid());
    };
    UpdateaccountPage.prototype.update2 = function () {
        var _this = this;
        if (this.user.firstname != '' && this.user.lastname != '' && this.user.address != '' && this.user.mobile_no != '' && this.user.email != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Updating Account Info...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new Headers();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            this.user.is_farmer = this.isfarmer;
            var option = new RequestOptions({ headers: header });
            this.http.patch('http://api.riceupfarmers.org/api/user/update?firstname=' + this.user.firstname + '&middlename=' + this.user.middlename + '&lastname=' + this.user.lastname + '&address=' + this.user.address + '&address_lat=' + this.user.address_lat + '&address_long=' + this.user.address_long + '&bus_name=' + this.user.business_name + '&mobile_no=' + this.user.mobile_no + '&email=' + this.user.email + '&years_bus=' + this.user.years_in_business + '&is_farmer=' + this.isfarmer + '&history=' + this.user.history + '&years_farm=' + this.user.years_in_farming, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.loading.dismissAll();
                _this.GlobalvarsProvider.loggeduser = _this.user;
                _this.presentConfirm(data.message);
                _this.createUser(_this.isfarmer);
            }, function (error) {
                console.log(error);
                _this.presentAlert("No Internet Connection!");
                _this.loading.dismissAll();
            });
        }
        else {
            this.user = this.tempuser;
            console.log(this.tempuser);
            this.presentAlert("Please Fill the Required Fields!");
        }
    };
    UpdateaccountPage.prototype.g = function () {
        if (this.test == true) {
            this.isfarmer = 1;
            this.showMap();
        }
        else {
            this.isfarmer = 0;
        }
    };
    UpdateaccountPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UpdateaccountPage.prototype.presentConfirm = function (val) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: val,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(AccountPage);
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateaccountPage = __decorate([
        Component({
            selector: 'page-updateaccount',
            templateUrl: 'updateaccount.html',
        }),
        __metadata("design:paramtypes", [Events, Http, LoadingController, AlertController, NavController, NavParams, GlobalvarsProvider])
    ], UpdateaccountPage);
    return UpdateaccountPage;
}());
export { UpdateaccountPage };
//# sourceMappingURL=updateaccount.js.map