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
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the PrivacyPolicyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(platform, statusBar, splashScreen, toast, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.counter = 0;
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
    }
    PrivacyPolicyPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    PrivacyPolicyPage = __decorate([
        Component({
            selector: 'page-privacy-policy',
            templateUrl: 'privacy-policy.html',
        }),
        __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, ToastController, NavController, NavParams])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());
export { PrivacyPolicyPage };
//# sourceMappingURL=privacy-policy.js.map