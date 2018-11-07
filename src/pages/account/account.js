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
import { ProfpicPage } from '../profpic/profpic';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { ChangepassPage } from '../changepass/changepass';
import { UpdateaccountPage } from '../updateaccount/updateaccount';
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(alertCtrl, navCtrl, navParams, GlobalvarsProvider, platform, statusBar, splashScreen, toast) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.counter = 0;
        this.option = '';
        this.viewMode = "map";
        this.viewMode2 = "list";
        this.timee = Math.random();
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                if (_this.counter == 0) {
                    _this.counter++;
                    _this.presentToast();
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    // console.log("exitapp");
                    platform.exitApp();
                }
            }, 0);
        });
        this.user = this.GlobalvarsProvider.loggeduser;
        this.timee = Math.random();
        this.isfarmer = this.user.is_farmer;
        console.log(this.user);
    }
    AccountPage.prototype.onSelectChange = function (selectedValue, id) {
        if (selectedValue == 'a1') {
            this.navCtrl.push(UpdateaccountPage);
        }
        if (selectedValue == 'a2') {
            this.navCtrl.push(ProfpicPage);
        }
        if (selectedValue == 'a3') {
            this.navCtrl.push(ChangepassPage);
        }
    };
    AccountPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    AccountPage.prototype.showMarkers = function () {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        var marker = leaflet.marker([this.user.address_lat, this.user.address_long]).on('click', function (event) { return console.log("map marker"); });
        this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
    };
    AccountPage.prototype.showMap = function () {
        var _this = this;
        this.map = null;
        if (this.isfarmer == 1) {
            setTimeout(function () {
                _this.map = leaflet.map("map").setView([_this.user.address_lat, _this.user.address_long], 10);
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
            });
        }
    };
    AccountPage = __decorate([
        Component({
            selector: 'page-account',
            templateUrl: 'account.html',
        }),
        __metadata("design:paramtypes", [AlertController, NavController, NavParams, GlobalvarsProvider, Platform, StatusBar, SplashScreen, ToastController])
    ], AccountPage);
    return AccountPage;
}());
export { AccountPage };
//# sourceMappingURL=account.js.map