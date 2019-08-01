webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsandagreementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TermsandagreementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsandagreementPage = (function () {
    function TermsandagreementPage(platform, statusBar, splashScreen, toast) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
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
    TermsandagreementPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    return TermsandagreementPage;
}());
TermsandagreementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-termsandagreement',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\termsandagreement\termsandagreement.html"*/'<!--\n  Generated template for the TermsandagreementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar><button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Terms and Agreement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h3>RiceUp Farmers Inc Terms of Use</h3>\n<p>Welcome to the RiceUp Farmers Inc Terms of Use agreement. For purposes of this agreement, “App” refers to the Company’s mobile application, RiceUp, which can be downloaded on Google Play . “Service” refers to the Company’s services accessed via the App, in which users can view and request certain products available near their location. The terms “we,” “us,” and “our” refer to the Company. “You” refers to you, as a user of our App or our Service. \n<br><br>\nThe following Terms of Use apply when you view or use the Service by accessing the Service through clicking on the application (the “App”) on your mobile device.  \n<br><br>\nPlease review the following terms carefully. By accessing or using the Service, you signify your agreement to these Terms of Use. <b>If you do not agree to be bound by these Terms of Use in their entirety, you may not access or use the Service.</b>\n</p>\n<h3>PRIVACY POLICY</h3>\n<p>The Company respects the privacy of its Service users. Please refer to the Company’s Privacy Policy (found in the App menu) which explains how we collect, use, and disclose information that pertains to your privacy. When you access or use the Service, you signify your agreement to the Privacy Policy as well as these Terms of Use.</p>\n<h3>\nABOUT THE SERVICE\n</h3>\n<p>The Service allows you to create an account, view, and request available products near your location. Local pick-up locations will be shown on the Service, and payments will be made in person. \n<br><br>\nThe service is only intended for users living near product pick-up locations in the Philippines. Product requests from people outside the Philippines will not be accepted.\n</p>\n<h3>REGISTRATION; RULES FOR USER CONDUCT AND USE OF THE SERVICE</h3>\n<p>You need to be at least 18 years to register for and use the Service.\nIf you are a user who signs up for the Service, you will create a personalized account which includes a unique username and a password to access the Service and to receive messages from the Company. You agree to notify us immediately of any unauthorized use of your password and/or account. The Company will not be responsible for any liabilities, losses, or damages arising out of the unauthorized use of your member name, password and/or account.\n</p>\n<h3>USE RESTRICTIONS</h3>\n<p>Your permission to use the App is conditioned upon the following use, posting and conduct restrictions: </p>\n<p>You agree that you will not under any circumstances:\n</p>\n<ul>\n  <li>access the Service for any reason other than your personal, non-commercial use solely as permitted by the normal functionality of the Service,</li>\n  <li>collect or harvest any personal data of any user of the Site or the Service \n</li>\n<li>use the App or the Service for the solicitation of business in the course of trade or in connection with a commercial enterprise;\n</li>\n<li>distribute any part or parts of the App or the Service without our explicit written permission \n</li>\n<li>use the Service for any unlawful purpose or for the promotion of illegal activities;\n</li>\n<li>attempt to, or harass, abuse or harm another person or group;</li>\n<li>use another user’s account without permission;</li>\n<li>intentionally allow another user to request products from your account; </li>\n<li>provide false or inaccurate information when registering an account;</li>\n<li>interfere or attempt to interfere with the proper functioning of the Service;\n</li>\n<li>make any automated use of the App, the Service or the related systems, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;\n</li>\n<li>bypass any robot exclusion headers or other measures we take to restrict access to the Service, or use any software, technology, or device to scrape, spider, or crawl the Service or harvest or manipulate data; \n</li>\n<li>circumvent, disable or otherwise interfere with any security-related features of the Service or features that prevent or restrict use or copying of content, or enforce limitations on use of the Service or the content accessible via the Service; or \n</li>\n<li>publish or link to malicious content of any sort, including that intended to damage or disrupt another user’s device.</li>\n</ul>\n<h3>POSTING AND CONDUCT RESTRICTIONS</h3>\n<p>When you create your own personalized account, you may be able to provide a profile picture, username, phone number, email, and address (“User Content”) to the Service. You are solely responsible for the User Content that you post, upload, link to or otherwise make available via the Service. \n<br><br>\nYou agree that we are only acting as a passive conduit for your online distribution and publication of your User Content. The Company, however, reserves the right to remove any User Content from the Service at its sole discretion.\nWe grant you permission to use and access the Service, subject to the following express conditions surrounding User Content. You agree that failure to adhere to any of these conditions constitutes a material breach of these Terms. \nBy transmitting and submitting any User Content while using the Service, you agree as follows:\n</p>\n<ul>\n  <li>You are solely responsible for your account and the activity that occurs while signed in to or while using your account;\n</li>\n  <li>You will not post information that is malicious, libelous, false or inaccurate;</li>\n  <li>You will not post any information that is abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously, or otherwise objectionable and offensive;</li>\n  <li>You retain all ownership rights in your User Content but you are required to grant the following rights to the App and to users of the Service as set forth more fully under the “License Grant” and “Intellectual Property” provisions below: When you upload or post User Content to the App or the Service, you grant to the App a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, and display that Content in connection with the provision of the Service; and you grant to each user of the Service, a worldwide, non-exclusive, royalty-free license to access your User Content through the Service, and to use and display such Content to the extent permitted by the Service and under these Terms of Use;</li>\n  <li>You will not submit content that is copyrighted or subject to third party proprietary rights, including privacy, publicity, trade secret, or others, unless you are the owner of such rights or have the appropriate permission from their rightful owner to specifically submit such content; and</li>\n  <li>You hereby agree that we have the right to determine whether your User Content submissions are appropriate and comply with these Terms of Service, remove any and/or all of your submissions, and terminate your account with or without prior notice.</li>\n</ul>\n<p>\n  You understand and agree that any liability, loss or damage that occurs as a result of the use of any User Content that you make available or access through your use of the Service is solely your responsibility. The App is not responsible for any public display or misuse of your User Content. \n<br>\nThe App does not, and cannot, pre-screen or monitor all User Content. However, at our discretion, we, or technology we employ, may monitor and/or record your interactions with the Service or with other Users.\n</p>\n<h3>ONLINE CONTENT DISCLAIMER</h3>\n<p>Opinions, advice, statements, offers, or other information or content made available through the Service, but not directly by the App, are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content. \n<br><br>\nWe do not guarantee the accuracy, completeness, or usefulness of any information on the App or the Service nor do we adopt nor endorse, nor are we responsible for, the accuracy or reliability of any opinion, advice, or statement made by other parties. We take no responsibility and assume no liability for any User Content that you or any other user or third party posts or sends via the Service. Under no circumstances will we be responsible for any loss or damage resulting from anyone’s reliance on information or other content posted on the Service, or transmitted to users.<br>\nThough we strive to enforce these Terms of Use, you may be exposed to User Content that is inaccurate or objectionable when you use or access the App or the Service. We reserve the right, but have no obligation, to monitor the materials posted in the public areas of the App or the Service or to limit or deny a user’s access to the Service or take other appropriate action if a user violates these Terms of Use or engages in any activity that violates the rights of any person or entity or which we deem unlawful, offensive, abusive, harmful or malicious. E-mails sent between you and other participants that are not readily accessible to the general public will be treated by us as private to the extent required by applicable law. The Company shall have the right to remove any material that in its sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, or that might violate the rights, harm, or threaten the safety of users or others.  Unauthorized use may result in criminal and/or civil prosecution under Federal, Province, and local law. If you become aware of a misuse of our Service or violation of these Terms of Use, please contact us at <a href="mailto:riceupfilipino@gmail.com">riceupfilipino@gmail.com</a>.\n\n</p>\n<h3>LINKS TO OTHER SITES AND/OR MATERIALS</h3>\n<p>\n  As part of the Service, we may provide you with convenient links to third party website(s) (“Third Party Sites”) as well as content or items belonging to or originating from third parties (the “Third Party Applications, Software or Content”). These links are provided as a courtesy to Service subscribers. We have no control over Third Party Sites or Third Party Applications, Software or Content or the promotions, materials, information, goods or services available on these Third Party Sites or Third Party Applications, Software or Content. Such Third Party Sites and Third Party Applications, Software or Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness, and we are not responsible for any Third Party Sites accessed through the App or any Third Party Applications, Software or Content posted on, available through or installed from the App, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Sites or the Third Party Applications, Software or Content. Inclusion of, linking to or permitting the use or installation of any Third Party Site or any Third Party Applications, Software or Content does not imply our approval or endorsement. If you decide to leave the App and access the Third Party Sites or to use or install any Third Party Applications, Software or Content, you do so at your own risk and you should be aware that our terms and policies, including these Terms of Use, no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any Third Party Site to which you navigate from the Site or relating to any applications you use or install from the Third Party Site.\n\n</p>\n<h3>LICENSE GRANT</h3>\n<p>\n  By posting any User Content via the Service, you expressly grant, and you represent and warrant that you have a right to grant, to the Company a royalty-free, sublicensable, transferable, perpetual, irrevocable, non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit, translate, distribute, and publicly display all such User Content and your name, voice, and/or likeness as contained in your User Content, if applicable, in whole or in part, and in any form, media or technology, whether now known or hereafter developed, for use in connection with the Service.\n</p>\n<h3>INTELLECTUAL PROPERTY</h3>\n<p>\n  You acknowledge and agree that we and our licensors retain ownership of all intellectual property rights of any kind related to the Service, including applicable copyrights, trademarks and other proprietary rights. Other product and company names that are mentioned on the Service may be trademarks of their respective owners. We reserve all rights that are not expressly granted to you under these Terms of Use.\n</p>\n<h3>\n  EMAIL MAY NOT BE USED TO PROVIDE NOTICE\n</h3>\n<p>Communications made through the Service’s email and messaging system will not constitute legal notice to the App, the Service, or any of its officers, employees, agents or representatives in any situation where legal notice is required by contract or any law or regulation.\n</p>\n\n<h3>\n  USER CONSENT TO RECEIVE COMMUNICATIONS IN ELECTRONIC FORM\n\n</h3>\n<p>\n  For contractual purposes, you: (a) consent to receive communications from us in an electronic form via the email address you have submitted; and (b) agree that all Terms of Use, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were in writing. The foregoing does not affect your non-waivable rights.\n<br><br>\nWe may also use your email address to send you other messages, including information about the App or the Service and special offers. You may opt out of such email by changing your account settings, using the “Unsubscribe” link in the message, or by sending an email to riceupfilipino@gmail.com. \n<br><br>\nOpting out may prevent you from receiving messages regarding the App, the Service or special offers.\n\n\n</p>\n<h3>WARRANTY DISCLAIMER</h3>\n<p>\n  THE SERVICE, IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, REGARDING THE SERVICE INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SECURITY, ACCURACY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY OR REPRESENTATION THAT ACCESS TO OR OPERATION OF THE SERVICE WILL BE UNINTERRUPTED OR ERROR FREE. YOU ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES, INFORMATION, CONTENT OR OTHER MATERIAL OBTAINED FROM THE SERVICE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF WARRANTY, SO THIS PROVISION MAY NOT APPLY TO YOU.\n\n</p>\n<h3>LIMITATION OF DAMAGES; RELEASE</h3>\n<p>\n  TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE APP, THE SERVICE, ITS AFFILIATES, DIRECTORS, OR EMPLOYEES, OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE,  OR DATA, OR FOR ANY INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM: (A) THE USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (B) YOUR USE OR INABILITY TO USE THE SERVICE; (C) THE SERVICE GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICE AVAILABLE; OR (D) ANY OTHER INTERACTIONS WITH USE OR WITH ANY OTHER USER OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT APPLY TO YOU.\n<br><br>\nIf you have a dispute with one or more users, a restaurant or a merchant of a product or service that you review using the Service, you release us (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. \n\n</p>\n<h3>MODIFICATION OF TERMS OF USE</h3>\n<p>We can amend these Terms of Use at any time and will update these Terms of Use in the event of any such amendments. It is your sole responsibility to check the App from time to time to view any such changes in this agreement. Your continued use of the App or the Service signifies your agreement to our revisions to these Terms of Use. We will endeavor to notify you of material changes to the Terms by posting a notice on our App and/or sending an email to the email address you provided to us upon registration. For this additional reason, you should keep your contact and profile information current. Any changes to these Terms (other than as set forth in this paragraph) or waiver of our rights hereunder shall not be valid or effective except in a written agreement bearing the physical signature of one of our officers. No purported waiver or modification of this agreement on our part via telephonic or email communications shall be valid.\n</p>\n<h3>GENERAL TERMS</h3>\n<p>\n  If any part of this Terms of Use agreement is held or found to be invalid or unenforceable, that portion of the agreement will be construed as to be consistent with applicable law while the remaining portions of the agreement will remain in full force and effect. Any failure on our part to enforce any provision of this agreement will not be considered a waiver of our right to enforce such provision. Our rights under this agreement survive any transfer or termination of this agreement.\n<br><br>\nYou agree that any cause of action related to or arising out of your relationship with the Company must commence within ONE year after the cause of action accrues. Otherwise, such cause of action is permanently barred.\n<br><br>\nWe may assign or delegate these Terms of Service and/or our Privacy Policy, in whole or in part, to any person or entity at any time with or without your consent. You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Policy without our prior written consent, and any unauthorized assignment or delegation by you is void.\n<br><br>\nYOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY POLICY REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.\n\n</p>\n<h3>\n  CONTACT US\n</h3>\n<p>\n  If there are any further questions regarding these terms of use, you may contact us at:\n</p>\n<ul>\n  <li><a href="mailto:riceupfilipino@gmail.com">riceupfilipino@gmail.com</a></li>\n  <li> <a href="https://riceupfarmers.org">https://riceupfarmers.org</a></li>\n</ul>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\termsandagreement\termsandagreement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], TermsandagreementPage);

//# sourceMappingURL=termsandagreement.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipping_details_add_shipping_details_add__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shipping_details_update_shipping_details_update__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the ShippingDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingDetailsPage = (function () {
    function ShippingDetailsPage(storage, platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        this.storage = storage;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
        this.pushPage = __WEBPACK_IMPORTED_MODULE_6__shipping_details_add_shipping_details_add__["a" /* ShippingDetailsAddPage */];
    }
    ShippingDetailsPage.prototype.select = function (id, address, mobile) {
        this.storage.set('shipaddress', address);
        this.storage.set('shipmobile', mobile);
        this.GlobalvarsProvider.activeaddressaddress = address;
        this.GlobalvarsProvider.activeaddressmobile = mobile;
        this.navCtrl.pop();
    };
    ShippingDetailsPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__shipping_details_update_shipping_details_update__["a" /* ShippingDetailsUpdatePage */], property);
    };
    ShippingDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/shippingdetails/', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.loading.dismissAll();
            _this.shipd = res;
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
    };
    ShippingDetailsPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingDetailsPage.prototype.delship = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to remove you Shipping details?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.http.delete('http://api.riceupfarmers.com/api/shippingdetail/' + ids, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.presentAlert('Deleted!');
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ShippingDetailsPage.prototype.ionViewDidLoad = function () {
    };
    return ShippingDetailsPage;
}());
ShippingDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-shipping-details',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping-details\shipping-details.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Shipping Details</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="property-list">\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let address of shipd">\n            <button ion-item (click)="select(address.id,address.shipping_address,address.mobile_no)">\n                <h2>Address: {{address.shipping_address}}</h2>\n                <p>Mobile no: {{address.mobile_no}}</p>\n            </button>\n             <ion-item-options>\n                <button danger (click)="openPropertyDetail(address)" class="green"> Update </button>\n                <button danger (click)="delship(address.id)" class="red">Remove</button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <button ion-item >\n                <ion-thumbnail item-left>\n                </ion-thumbnail>\n                <h2></h2>\n                <p></p>\n            </button>\n        </ion-item-sliding>\n        \n    </ion-list>\n     <ion-fab>\n        <button ion-fab  [navPush]="pushPage" clase="button-f"><ion-icon name="md-add"></ion-icon></button>\n     </ion-fab>\n</ion-content>\n\n\n<ion-footer padding>\n    <ion-segment>\n        <p><b>Note:</b> Options will appear when you swipe left on the product.</p>\n    </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping-details\shipping-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], ShippingDetailsPage);

//# sourceMappingURL=shipping-details.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__termsandagreement_termsandagreement__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__property_list_property_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//https://www.youtube.com/watch?v=fE09dHu6sP0

















var WelcomePage = (function () {
    function WelcomePage(storage, statusBar, splashScreen, toast, loadingCtrl, alertCtrl, menu, events, GlobalvarsProvider, fb, platform, navCtrl, http) {
        var _this = this;
        this.storage = storage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.events = events;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.http = http;
        this.counter = 0;
        this.data = {};
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
        this.forgotpassword = __WEBPACK_IMPORTED_MODULE_6__forgot_password_forgot_password__["a" /* ForgotPasswordPage */];
        this.pushPage = __WEBPACK_IMPORTED_MODULE_1__termsandagreement_termsandagreement__["a" /* TermsandagreementPage */];
        this.login = __WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */];
        this.form = fb.group({
            name: fb.group({
                uname: '',
                pw: '',
            }),
        });
    }
    WelcomePage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    WelcomePage.prototype.calltologin = function () {
        var _this = this;
        if (this.form.value.name.uname != '' && this.form.value.name.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = this.form.value.name.uname;
            this.GlobalvarsProvider.password = this.form.value.name.pw;
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            urlSearchParams.append("client_id", this.GlobalvarsProvider.client_id);
            urlSearchParams.append("client_secret", this.GlobalvarsProvider.client_secret);
            urlSearchParams.append("username", this.GlobalvarsProvider.username);
            urlSearchParams.append("password", this.GlobalvarsProvider.password);
            urlSearchParams.append("scope", this.GlobalvarsProvider.scope);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (data.token_type != undefined) {
                    _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                    //wwew start
                    var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option_1 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.get('http://api.riceupfarmers.com/api/user', option_1)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.form.value.name.uname);
                    _this.storage.set('password', _this.form.value.name.pw);
                    var urlSearchParams_1 = new URLSearchParams();
                    urlSearchParams_1.append("passforpost", 'any');
                    var body_1 = urlSearchParams_1.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option2_1 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.storage.get('shipaddress').then(function (val2) {
                        if (val2 != null && val2 != undefined && val2 != '') {
                            _this.GlobalvarsProvider.activeaddressaddress = val2;
                            _this.storage.get('shipmobile').then(function (value) {
                                _this.GlobalvarsProvider.activeaddressmobile = value;
                            });
                        }
                        else {
                            _this.http.get('http://api.riceupfarmers.com/api/shippingdetails/', option2_1)
                                .map(function (response) { return response.json(); })
                                .subscribe(function (res) {
                                _this.GlobalvarsProvider.activeaddressaddress = res[0].shipping_address;
                                _this.GlobalvarsProvider.activeaddressmobile = res[0].mobile_no;
                            }, function (Error) {
                                console.log(Error);
                                _this.presentAlert("No Internet Connection!");
                            });
                        }
                    });
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__property_list_property_list__["a" /* PropertyListPage */]);
                }
                else
                    _this.presentAlert("Invalid Username or password");
            }, function (error) {
                console.log(error);
                _this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Input username or password!");
        }
    };
    WelcomePage.prototype.guestlogin = function () {
        var _this = this;
        this.form.value.name.uname = 'guest';
        this.form.value.name.pw = 'guest123';
        if (this.form.value.name.uname != '' && this.form.value.name.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = this.form.value.name.uname;
            this.GlobalvarsProvider.password = this.form.value.name.pw;
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            urlSearchParams.append("client_id", this.GlobalvarsProvider.client_id);
            urlSearchParams.append("client_secret", this.GlobalvarsProvider.client_secret);
            urlSearchParams.append("username", this.GlobalvarsProvider.username);
            urlSearchParams.append("password", this.GlobalvarsProvider.password);
            urlSearchParams.append("scope", this.GlobalvarsProvider.scope);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (data.token_type != undefined) {
                    _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                    //wwew start
                    var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option_2 = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.get('http://api.riceupfarmers.com/api/user', option_2)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.form.value.name.uname);
                    _this.storage.set('password', _this.form.value.name.pw);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__property_list_property_list__["a" /* PropertyListPage */]);
                }
                else
                    _this.presentAlert("Invalid Username or password");
            }, function (error) {
                console.log(error);
                _this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Input username or password!");
        }
    };
    WelcomePage.prototype.createUser = function (user) {
        this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
    };
    WelcomePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\welcome\welcome.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Login</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content" padding>\n     <div text-center>\n     <ion-img width="180" height="180" src="assets/img/logo2.png"></ion-img>  \n     </div>\n  <div class="login-box">\n     <form [formGroup]="form">\n\n      <div formGroupName="name">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Username" name="uname" formControlName="uname"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" formControlName="pw"></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      </div>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" block (click)="calltologin()">Login</button>\n          <div text-center>By clicking the login button, you agree to <br>the <a [navPush]="pushPage">terms and agreement</a></div>\n          <ion-list>\n\n    </ion-list>\n          <button ion-button class="register-btn" block clear [navPush]="login">Sign Up Here</button>\n          <br>\n          <button ion-button class="register-btn" block clear [navPush]="forgotpassword">Forgot Password?</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _o || Object])
], WelcomePage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
/*
        if (this.form.value.name.uname!=''&&this.form.value.name.pw!='') {
          
         var link = 'http://riceupfarmers.com/oauth/token';
         var myData = JSON.stringify({grant_type:'password',client_id:'2',client_secret:'uzyd8xUn9UeaQaMB8hfghABzvAFJZE8Djc4JcJlu',usernamei:this.form.value.name.uname,passwowrd:this.form.value.name.pw,username:'windellevega',password:'pass123',scope:''});
      
        let headers = new Headers(
        {
          'Content-Type' : 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({ headers: headers });


         this.http.post(link, myData, options)
         .map(response => response.json())
         .subscribe(data => {
           console.log(data);
             this.GlobalvarsProvider.setgid(data[0]);
             this.createUser(data[0]);
            this.navCtrl.setRoot(PropertyListPage);
             console.log(data[0]);
         }
         , error => {
         alert(error);
         });
       } code...
      else{
        alert("Please input username or password");
      }*/ 
//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dispatch_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the TransactionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransactionsPage = (function () {
    function TransactionsPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
        this.viewMode = "Pending";
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
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/ordersperfarmer/', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                console.log(res);
                _this.orders = res;
                _this.orders1 = res;
                _this.orders2 = res;
                console.log(res);
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
            _this.presentAlert("No Internet Connection!");
        });
    }
    TransactionsPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    TransactionsPage.prototype.ionViewDidLoad = function () {
    };
    TransactionsPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    TransactionsPage.prototype.open = function (list) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dispatch_dispatch__["a" /* DispatchPage */], list);
    };
    TransactionsPage.prototype.dispatch = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Dispatching Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/product/dispatch/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    TransactionsPage.prototype.pack = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Changing status...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/product/pack/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    return TransactionsPage;
}());
TransactionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transactions',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\transactions\transactions.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Transactions</ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-segment [(ngModel)]="viewMode">\n\n        <ion-segment-button value="Pending">Pending\n\n        </ion-segment-button>\n\n        <ion-segment-button value="Packed">Packed\n\n        </ion-segment-button>\n\n        <ion-segment-button value="Delivered">Delivered\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list *ngIf="viewMode===\'Pending\'">\n\n		<ion-item-sliding *ngFor="let list of orders">\n\n            <div ion-item *ngIf="list.current_status.product_status===0">\n\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n\n                <h3>{{list.farmer_product.product_name}}</h3>\n\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n\n                <p>Quantity: {{list.quantity}} </p>\n\n                <p>Stocks available: {{list.farmer_product.stocks_available}} </p>\n\n                <p  *ngIf="list.order.mode_of_shipping===1;">For Shipping</p>\n\n                <p  *ngIf="list.order.mode_of_shipping===0;">For Pick up</p>\n\n                \n\n                <div style="text-align: right;">\n\n\n\n                Total: P{{list.quantity * list.farmer_product.price_per_unit}}\n\n\n\n                </div>\n\n\n\n            </div>\n\n\n\n             <ion-item-options>\n\n                <button danger (click)="open(list)" class="green"> View Product </button>\n\n                <button danger (click)="pack(list.id)" class="blue"> Pack</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n        <!-- <ion-item-sliding>\n\n            <button ion-item>\n\n                <h3></h3>\n\n                <p></p>\n\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n\n            </button>\n\n        </ion-item-sliding> -->\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="viewMode===\'Packed\'">\n\n		<ion-item-sliding *ngFor="let list of orders1">\n\n            <div ion-item *ngIf="list.current_status.product_status===1">\n\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n\n                <h3>{{list.farmer_product.product_name}}</h3>\n\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n\n                <p>Quantity: {{list.quantity}} </p>\n\n                <p>Stocks available: {{list.farmer_product.stocks_available}} </p>\n\n                <p  *ngIf="list.order.mode_of_shipping===0;">For Shipping</p>\n\n                <p  *ngIf="list.order.mode_of_shipping===1;">For Pick up</p>\n\n                \n\n                <div style="text-align: right;">\n\n\n\n                Total: P{{list.quantity * list.farmer_product.price_per_unit}}\n\n\n\n                </div>\n\n\n\n            </div>\n\n\n\n             <ion-item-options>\n\n                <button danger (click)="open(list)" class="green"> View Product </button>\n\n                <button danger (click)="dispatch(list.id)" class="blue"> Dispatch</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n        <!-- <ion-item-sliding>\n\n            <button ion-item>\n\n                <h3></h3>\n\n                <p></p>\n\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n\n            </button>\n\n        </ion-item-sliding> -->\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="viewMode===\'Delivered\'">\n\n		<ion-item-sliding *ngFor="let list of orders2">\n\n            <div ion-item *ngIf="list.current_status.product_status===2">\n\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n\n                <h3>{{list.farmer_product.product_name}}</h3>\n\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n\n                <p>Quantity: {{list.quantity}} </p>\n\n                <p>Stocks available: {{list.farmer_product.stocks_available}} </p>\n\n                <p  *ngIf="list.order.mode_of_shipping===0;">For Shipping</p>\n\n                <p  *ngIf="list.order.mode_of_shipping===1;">For Pick up</p>\n\n                \n\n                <div style="text-align: right;">\n\n\n\n                Total: P{{list.quantity * list.farmer_product.price_per_unit}}\n\n\n\n                </div>\n\n\n\n            </div>\n\n\n\n             <ion-item-options>\n\n                <button danger (click)="open(list)" class="green"> View Product </button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n        <!-- <ion-item-sliding>\n\n            <button ion-item>\n\n                <h3></h3>\n\n                <p></p>\n\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n\n            </button>\n\n        </ion-item-sliding> -->\n\n    </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\transactions\transactions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], TransactionsPage);

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://riceupfarmers.com/api/';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthService.prototype.postData = function (credentials, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(apiUrl + type, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthService);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forgot-password/forgot-password.module": [
		360,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PropertyDetailPage = (function () {
    function PropertyDetailPage(loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.quantity = 1;
        this.timee = Math.random();
        this.property = this.navParams.data;
        console.log(this.property);
    }
    PropertyDetailPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    PropertyDetailPage.prototype.addtocart = function () {
        var _this = this;
        if (this.GlobalvarsProvider.username == 'guest') {
            this.presentAlert("Please Login!");
        }
        else {
            if (this.quantity >= 0 && this.quantity <= this.property.stocks_available) {
                this.loading = this.loadingCtrl.create({
                    content: 'Adding to Cart...',
                });
                this.loading.present();
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
                var body_1 = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                header.append("Authorization", this.GlobalvarsProvider.gettoken());
                var option_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.http.post('http://api.riceupfarmers.com/api/order/new', body_1, option_1)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    var g = res.order_number[0].id;
                    _this.http.post('http://api.riceupfarmers.com/api/cart/add?qty=' + _this.quantity + '&productid=' + _this.property.id + '&orderid=' + g, body_1, option_1)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        console.log(data);
                        if (data.message == "Product successfully added to cart.") {
                            _this.quantity = 1;
                        }
                        _this.presentAlert(data.message);
                        _this.loading.dismissAll();
                    }, function (error) {
                        _this.loading.dismissAll();
                        _this.presentAlert("No Internet Connection!");
                    });
                }, function (error) {
                    _this.loading.dismissAll();
                    _this.presentAlert("No Internet Connection!");
                });
            }
            else {
                if (this.property.stocks_available == 0) {
                    this.presentAlert("Product out of stock!");
                }
                else {
                    this.presentAlert("Quantity must be greater than 0 and less than or equal to " + this.property.stocks_available);
                }
            }
        }
    };
    PropertyDetailPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PropertyDetailPage.prototype.addq = function () {
        this.quantity += 1;
    };
    PropertyDetailPage.prototype.subq = function () {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    };
    return PropertyDetailPage;
}());
PropertyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\property-detail\property-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Product</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="property.id">\n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ property.photo_url }}.jpg?{{timee}}" alt="loading..."    onError="this.src=\'http://riceupfarmers.org/wp-content/system/product.jpg\';" />\n        <ion-card-content>\n            <h2 class="card-title">{{property.product_name}}</h2>\n            <p style="white-space: pre-line">{{property.product_desc}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="ios-archive"></ion-icon>\n                <h3>Stocks</h3>\n                <ion-note item-right>{{property.stocks_available}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n                <ion-icon item-left name="ios-archive"></ion-icon>\n                <h3>Reserved</h3>\n                <ion-note item-right>{{property.reserved}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n                <h3>Unit Type</h3>\n                <ion-note item-right>{{property.unit_type}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Price Per Unit</h3>\n                <ion-note item-right>{{property.price_per_unit}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="md-calendar"></ion-icon>\n                <h3>Date of Harvest</h3>\n                <ion-note item-right>{{property.date_of_harvest}}</ion-note>\n            </ion-item>\n            <button ion-item (click)="openBrokerDetail(property.user)">\n                <ion-avatar item-left>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ property.user.id }}.jpg?{{timee}}"  alt="loading..."   onError="this.src=\'http://riceupfarmers.org/wp-content/system/suser.jpg\';" />\n                </ion-avatar>\n                <h2>{{property.user.lastname }}, {{ property.user.firstname }} {{ property.user.middlename }}</h2>\n                <p>{{ property.user.business_name }}</p>\n            </button>\n        </ion-list>\n        <ion-item>\n                <ion-icon name="cart" item-left ></ion-icon>\n                <h3 item-left >Quantity:</h3>\n                \n                <div item-right>\n                <button ion-button style="width: 40px; height: 40px" (click)="subq()">\n                <ion-icon name="md-remove"></ion-icon></button>\n\n                    <input text-center style="text-align:center;width: 60px; height: 45px;border:none" class="text-center" type="number"  [(ngModel)]="quantity"  min="0"  max="{{property.stocks_available}}">\n                    \n                <button ion-button  style="width: 40px; height: 40px" (click)="addq()">\n                <ion-icon name="md-add"></ion-icon></button>\n                </div>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="cash"></ion-icon>\n                <h3>Total Price:</h3>\n                <ion-note item-right>P{{ ((quantity) * (property.price_per_unit)) | number:\'1.2-2\'}}</ion-note>\n            </ion-item>\n\n        <button ion-button class="submit-btn" block  (click)="addtocart()">Add to Cart</button>\n\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\property-detail\property-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], PropertyDetailPage);

//# sourceMappingURL=property-detail.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmerLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FarmerLocationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FarmerLocationPage = (function () {
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
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.layerGroup([]);
        var marker = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.marker([this.farmer.address_lat, this.farmer.address_long]).on('click', function (event) { return console.log("map marker"); });
        this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
    };
    FarmerLocationPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.map("map").setView([_this.farmer.address_lat, _this.farmer.address_long], 10);
            __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map);
            _this.showMarkers();
            _this.map.locate({ setView: false, maxZoom: 10 });
            _this.map.on('locationfound', function (e) {
                var radius = e.accuracy / 2;
                var popup = __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.popup();
                popup
                    .setLatLng(e.latlng)
                    .setContent("You are currently here!")
                    .openOn(_this.map);
                __WEBPACK_IMPORTED_MODULE_2_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
            });
            function onLocationError(e) {
                alert("Turn on your service location to see your current location!");
                this.viewMode = "list";
            }
            _this.map.on('locationerror', onLocationError);
        });
    };
    return FarmerLocationPage;
}());
FarmerLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-farmer-location',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\farmer-location\farmer-location.html"*/'<!--\n  Generated template for the FarmerLocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Farmer Location</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div style="width:100%;height:100%;" id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\farmer-location\farmer-location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], FarmerLocationPage);

//# sourceMappingURL=farmer-location.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prouduct_detail_prouduct_detail__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var BrokerListPage = (function () {
    function BrokerListPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navCtrl, service, http) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navCtrl = navCtrl;
        this.service = service;
        this.http = http;
        this.counter = 0;
        this.viewMode = "list";
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
        this.loading = this.loadingCtrl.create({
            content: 'Loading farmers...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/users/farmer', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.farmers = res;
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentAlert("Slow internet Connection!");
            _this.loading.dismissAll();
        });
    }
    BrokerListPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    BrokerListPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    BrokerListPage.prototype.openBrokerDetail = function (farmer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__broker_detail_broker_detail__["a" /* BrokerDetailPage */], farmer);
    };
    BrokerListPage.prototype.openBrokerDetail2 = function (farmer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__prouduct_detail_prouduct_detail__["a" /* ProuductDetailPage */], farmer);
    };
    BrokerListPage.prototype.showMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.map("map").setView([17.622021, 121.727625], 12);
            __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                attribution: '&copy; techventures.ph'
            }).addTo(_this.map);
            _this.showMarkers();
            _this.map.locate({ setView: false, maxZoom: 12 });
            _this.map.on('locationfound', function (e) {
                var radius = e.accuracy / 2;
                var popup = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.popup();
                popup
                    .setLatLng(e.latlng)
                    .setContent("You are currently here!")
                    .openOn(_this.map);
                __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
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
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.layerGroup([]);
        this.farmers.forEach(function (property) {
            if (property.address_lat, property.address_long) {
                var marker = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.marker([property.address_lat, property.address_long]).on('click', function (event) { return _this.openBrokerDetail2(event.target.data); });
                marker.data = property;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return BrokerListPage;
}());
BrokerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-broker-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\broker-list\broker-list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Farmers</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n    <ion-list *ngIf="viewMode===\'list\'">\n\n        <button ion-item *ngFor="let farmer of farmers" (click)="openBrokerDetail(farmer)">\n            <ion-avatar item-left>\n                <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ farmer.id }}.jpg" alt="loading..."    onError="this.src=\'http://riceupfarmers.org/wp-content/system/suser.jpg\';" />\n            </ion-avatar>\n            <h2>{{farmer.lastname}}, {{farmer.firstname}} <span *ngIf="farmer.middlename != \'null\'">{{farmer.middlename}}</span></h2>\n            <p>{{farmer.email}}</p>\n        </button>\n\n    </ion-list>\n\n<div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode">\n        <ion-segment-button value="list">\n            <ion-icon name="list"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="map" (ionSelect)="showMap()">\n            <ion-icon name="map"></ion-icon>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\broker-list\broker-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_broker_service_mock__["a" /* BrokerService */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]])
], BrokerListPage);

//# sourceMappingURL=broker-list.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrokerService = (function () {
    function BrokerService(http) {
        var _this = this;
        this.http = http;
        this.http.get('http://localhost/riceup/riceupapi.php?action=getall')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.brokers = res; });
    }
    BrokerService.prototype.findAll = function () {
        return Promise.resolve(this.brokers);
    };
    BrokerService.prototype.findById = function (id) {
        return Promise.resolve(this.brokers[id - 1]);
    };
    return BrokerService;
}());
BrokerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BrokerService);

//# sourceMappingURL=broker-service-mock.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProuductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProuductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProuductDetailPage = (function () {
    function ProuductDetailPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.farmer = this.navParams.data;
        this.timee = Date.now();
    }
    return ProuductDetailPage;
}());
ProuductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-prouduct-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\prouduct-detail\prouduct-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Farmer</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="broker">\n\n    <ion-card>\n\n        <ion-card-content>\n            \n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ farmer.id }}.jpg?{{timee}}"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/user.jpg\';" />\n            <h2>{{farmer.lastname}}, {{farmer.firstname}} {{farmer.middlename}}</h2>\n            <h3>{{farmer.business_name}}</h3>\n        </ion-card-content>\n\n        <ion-list>\n            \n            <a href="tel:{{farmer.mobile_number}}" ion-item>\n                <ion-icon name="text" item-left></ion-icon>\n                <p>Call/Text</p>\n                <h2>{{farmer.mobile_no}}</h2>\n            </a>\n            <a href="mailto:{{farmer.email_address}}" ion-item>\n                <ion-icon name="mail" item-left></ion-icon>\n                <p>Email</p>\n                <h2>{{farmer.email}}</h2>\n            </a>\n            <a href="#" ion-item>\n                <ion-icon name="calendar" item-left></ion-icon>\n                <p>Years in Business</p>\n                <h2>{{farmer.years_in_business}}</h2>\n            </a>\n            <a href="#" ion-item>\n                <ion-icon name="calendar" item-left></ion-icon>\n                <p>Years in Farming</p>\n                <h2>{{farmer.years_in_farming}}</h2>\n            </a>\n            <a href="#" ion-item>\n                <ion-icon name="pin" item-left></ion-icon>\n                <p>Address</p>\n                <h2>{{farmer.address}}</h2>\n            </a>\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\prouduct-detail\prouduct-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProuductDetailPage);

//# sourceMappingURL=prouduct-detail.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartupdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the CartupdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartupdatePage = (function () {
    function CartupdatePage(loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.quantity = 1;
        this.property = this.navParams.data.farmer_product;
        console.log(this.property);
        this.proid = this.navParams.data.id;
        this.quantity = this.navParams.data.quantity;
    }
    CartupdatePage.prototype.addq = function () {
        this.quantity += 1;
    };
    CartupdatePage.prototype.subq = function () {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    };
    CartupdatePage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    CartupdatePage.prototype.updatecart = function () {
        var _this = this;
        if (this.quantity > 0 && this.quantity <= this.property.stocks_available) {
            this.loading = this.loadingCtrl.create({
                content: 'Updating Order...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.patch('http://api.riceupfarmers.com/api/cart/update/' + this.proid + '?qty=' + this.quantity, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.quantity = 1;
                _this.loading.dismissAll();
                _this.presentConfirm();
            }, function (Error) {
                _this.presentAlert("No Internet Connection!");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to " + this.property.stocks_available);
        }
    };
    CartupdatePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CartupdatePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: 'Order Updated!',
            buttons: [
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return CartupdatePage;
}());
CartupdatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-cartupdate',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\cartupdate\cartupdate.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Update Order</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="property.id">\n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ property.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/product.jpg\';" />\n        <ion-card-content>\n            <h2 class="card-title">{{property.product_name}}</h2>\n            <p>{{property.product_desc}}</p>\n        </ion-card-content>\n        <ion-list>\n\n            <ion-item>\n                <ion-icon item-left name="ios-archive"></ion-icon>\n                <h3>Stocks</h3>\n                <ion-note item-right>{{property.stocks_available}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n                <h3>Unit Type</h3>\n                <ion-note item-right>{{property.unit_type}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Price Per Unit</h3>\n                <ion-note item-right>{{property.price_per_unit}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="md-calendar"></ion-icon>\n                <h3>Date of Harvest</h3>\n                <ion-note item-right>{{property.date_of_harvest}}</ion-note>\n            </ion-item>\n            <button ion-item (click)="openBrokerDetail(property.user)">\n                <ion-avatar item-left>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ property.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" />\n                </ion-avatar>\n                <h2>{{property.user.lastname }}, {{ property.user.firstname }} {{ property.user.middlename }}</h2>\n                <p>{{ property.user.business_name }}</p>\n            </button>\n        </ion-list>\n        <ion-item>\n                <ion-icon name="cart" item-left ></ion-icon>\n                <h3 item-left >Quantity:</h3>\n                \n                <div item-right>\n                <button ion-button style="width: 40px; height: 40px" (click)="subq()">\n                <ion-icon name="md-remove"></ion-icon></button>\n\n                    <input text-center style="text-align:center;width: 60px; height: 45px;border:none" class="text-center" type="number"  [(ngModel)]="quantity"  min="0"  max="{{property.stocks_available}}">\n                    \n                <button ion-button  style="width: 40px; height: 40px" (click)="addq()">\n                <ion-icon name="md-add"></ion-icon></button>\n                </div>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="cash"></ion-icon>\n                <h3>Total Price:</h3>\n                <ion-note item-right>P{{ ((quantity) * (property.price_per_unit)) | number:\'1.2-2\'}}</ion-note>\n            </ion-item>\n\n        <button ion-button class="submit-btn" block  (click)="updatecart()">Update Order</button>\n\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\cartupdate\cartupdate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], CartupdatePage);

//# sourceMappingURL=cartupdate.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipping_details_shipping_details__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ShippingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingPage = (function () {
    function ShippingPage(platform, loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        var _this = this;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.addresid = null;
        this.message = null;
        this.myCallbackFunction = function (_params) {
            return new Promise(function (resolve, reject) {
                _this.address = _this.GlobalvarsProvider.activeaddressaddress;
                _this.addresid = _this.GlobalvarsProvider.activeaddressid;
                _this.mobile = _this.GlobalvarsProvider.activeaddressmobile;
                resolve();
            });
        };
        this.address = this.GlobalvarsProvider.activeaddressaddress;
        this.addresid = this.GlobalvarsProvider.activeaddressid;
        this.mobile = this.GlobalvarsProvider.activeaddressmobile;
        this.cart = this.navParams.data;
        this.orders = this.cart.product_order;
        this.gtotal = this.gettotal(this.orders);
        this.orderid = this.cart.id;
        console.log(this.addresid);
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/shippingdetails/', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message != undefined) {
                _this.presentAlert(res.message);
            }
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
    }
    ShippingPage.prototype.ionViewWillEnter = function () {
        this.address = this.GlobalvarsProvider.activeaddressaddress;
        this.addresid = this.GlobalvarsProvider.activeaddressid;
        this.mobile = this.GlobalvarsProvider.activeaddressmobile;
    };
    ShippingPage.prototype.shipdetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__shipping_details_shipping_details__["a" /* ShippingDetailsPage */], {
            id: this.addresid, address: this.address, mobile: this.mobile
        });
    };
    ShippingPage.prototype.ionViewDidLoad = function () {
    };
    ShippingPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    ShippingPage.prototype.checkthisout = function () {
        var _this = this;
        if (this.addresid != null) {
            // code...
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm Checkout',
                message: "Are you sure you want to checkout the items in the cart?",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            var urlSearchParams = new URLSearchParams();
                            urlSearchParams.append("passforpost", 'any');
                            var body = urlSearchParams.toString();
                            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                            header.append("Accept", "application/json");
                            header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                            _this.http.patch('http://api.riceupfarmers.com/api/order/checkout/' + _this.orderid + '?shipping_mode=1&order_status=1&remarks=&sd_id=' + _this.addresid, body, option)
                                .map(function (response) { return response.json(); })
                                .subscribe(function (res) {
                                // this.alertConfirm2(res.message);
                                _this.alertConfirm2(res.message);
                            }, function (Error) {
                                _this.presentAlert("No Internet Connection!");
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else
            this.presentAlert(this.message);
    };
    ShippingPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Checkout',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    ShippingPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return ShippingPage;
}());
ShippingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-shipping',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping\shipping.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Shipping Summary</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n		<ion-card>\n            <p style="padding: 10px">&nbsp;Ship to: {{address}}</p>\n            <p style="padding: 10px">&nbsp;Mobile No: {{mobile}}</p>\n            \n          <button ion-button class="submit-btn" block (click)="shipdetails()">Manage Shipping Details</button>\n		</ion-card>\n        <ion-list>\n        <ion-item-sliding *ngFor="let list of orders">\n            <div ion-item>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n                <h3>{{list.farmer_product.product_name}}</h3>\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n                <p>Quantity: {{list.quantity}} </p>\n                \n                <div style="text-align: right;">\n\n                P{{list.quantity * list.farmer_product.price_per_unit}}\n\n                </div>\n\n            </div>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <button ion-item>\n                <h3></h3>\n                <p></p>\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n            </button>\n        </ion-item-sliding>\n    </ion-list>\n\n        <button ion-button class="submit-btn" block (click)="checkthisout()" >Checkout</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping\shipping.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ShippingPage);

//# sourceMappingURL=shipping.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ShippingDetailsAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingDetailsAddPage = (function () {
    function ShippingDetailsAddPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
        this.mobile_no = "";
        this.address = "";
    }
    ShippingDetailsAddPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingDetailsAddPage.prototype.ionViewDidLoad = function () {
    };
    ShippingDetailsAddPage.prototype.addaddress = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post('http://api.riceupfarmers.com/api/shippingdetail', { 'address': this.address, 'mobile_no': this.mobile_no }, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.presentAlert(res.message);
            _this.pop();
            // this.alertConfirm2(res.message);
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
    };
    ShippingDetailsAddPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    return ShippingDetailsAddPage;
}());
ShippingDetailsAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-shipping-details-add',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping-details-add\shipping-details-add.html"*/'<!--\n  Generated template for the ShippingDetailsAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add Shipping Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n			      <ion-item>\n                  <ion-label  stacked>Mobile Number:</ion-label>\n                  <ion-input [(ngModel)]="mobile_no" ></ion-input>\n                  </ion-item>\n\n			             <ion-item>\n                  <ion-label  stacked>Address:</ion-label>\n                  <ion-input [(ngModel)]="address" ></ion-input>\n                  </ion-item>\n\n        </ion-list>\n            <button ion-button class="submit-btn" block  (click)="addaddress()">Add Address</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping-details-add\shipping-details-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], ShippingDetailsAddPage);

//# sourceMappingURL=shipping-details-add.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailsUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ShippingDetailsUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShippingDetailsUpdatePage = (function () {
    function ShippingDetailsUpdatePage(alertCtrl, loadingCtrl, GlobalvarsProvider, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.address = this.navParams.data;
    }
    ShippingDetailsUpdatePage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShippingDetailsUpdatePage.prototype.updateaddress = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/shippingdetail/' + this.address.id, { 'address': this.address.shipping_address, 'mobile_no': this.address.mobile_no }, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.presentAlert(res.message);
            _this.pop();
            // this.alertConfirm2(res.message);
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
    };
    ShippingDetailsUpdatePage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ShippingDetailsUpdatePage.prototype.ionViewDidLoad = function () {
    };
    return ShippingDetailsUpdatePage;
}());
ShippingDetailsUpdatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-shipping-details-update',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping-details-update\shipping-details-update.html"*/'<!--\n  Generated template for the ShippingDetailsUpdatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update Shipping address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n                <ion-item>\n                  <ion-label  stacked>Address</ion-label>\n                  <ion-input [(ngModel)]="address.shipping_address" type="text"></ion-input>\n                  </ion-item>\n                    \n                  <ion-item>\n                  <ion-label  stacked>Mobile No</ion-label>\n                  <ion-textarea [(ngModel)]="address.mobile_no" ></ion-textarea>\n                  </ion-item>\n\n        </ion-list>\n            <button ion-button class="submit-btn" block  (click)="updateaddress()">Update Address</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\shipping-details-update\shipping-details-update.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ShippingDetailsUpdatePage);

//# sourceMappingURL=shipping-details-update.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the PickupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PickupPage = (function () {
    function PickupPage(loadingCtrl, alertCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.cart = this.navParams.data;
        this.orders = this.cart.product_order;
        this.gtotal = this.gettotal(this.orders);
        this.orderid = this.cart.id;
    }
    PickupPage.prototype.ionViewDidLoad = function () {
    };
    PickupPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    PickupPage.prototype.checkthisout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Checkout',
            message: "Are you sure you want to checkout the items in the cart?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var urlSearchParams = new URLSearchParams();
                        urlSearchParams.append("passforpost", 'any');
                        var body = urlSearchParams.toString();
                        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.http.patch('http://api.riceupfarmers.com/api/order/checkout/' + _this.orderid + '?shipping_mode=0&order_status=1&remarks=', body, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            // this.alertConfirm2(res.message);
                            _this.alertConfirm2(res.message);
                        }, function (Error) {
                            _this.presentAlert("No Internet Connection!");
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PickupPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Checkout',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    PickupPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return PickupPage;
}());
PickupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-pickup',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\pickup\pickup.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Pick Up Summary</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n        <ion-item-sliding *ngFor="let list of orders">\n            <div ion-item>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n                <h3>{{list.farmer_product.product_name}}</h3>\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n                <p>Quantity: {{list.quantity}} </p>\n                \n                <div style="text-align: right;">\n\n                P{{list.quantity * list.farmer_product.price_per_unit}}\n\n                </div>\n\n            </div>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <button ion-item>\n                <h3></h3>\n                <p></p>\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n            </button>\n        </ion-item-sliding>\n    </ion-list>\n\n        <button ion-button class="submit-btn" block (click)="checkthisout()" >Checkout</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\pickup\pickup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], PickupPage);

//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__welcome_welcome__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = (function () {
    function SignupPage(loadingCtrl, navCtrl, authService, GlobalvarsProvider, http, alertCtrl, fb) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.lastImage = null;
        this.long = '';
        this.lat = '';
        this.username = '';
        this.buttonDisabled = true;
        this.form = fb.group({
            name: fb.group({
                username2: '',
                password2: '',
                cpassword: '',
                firstname: '', middlename: '',
                lastname: '',
                email: '',
                mobilenumber: '',
                address: '',
            }),
        });
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.form.value.name.username2 != "" && this.form.value.name.password2 != "" && this.form.value.name.cpassword != "" && this.form.value.name.firstname != "" && this.form.value.name.lastname != "" && this.form.value.name.email != "" && this.form.value.name.address != "" && this.form.value.name.mobilenumber != "") {
            if (this.form.value.name.password2 == this.form.value.name.cpassword) {
                this.loading = this.loadingCtrl.create({
                    content: 'Signing Up...',
                });
                this.loading.present();
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.http.post('http://api.riceupfarmers.com/api/user/register?username=' + this.form.value.name.username2 + "&password=" + this.form.value.name.password2 + "&middlename=" + this.form.value.name.middlename + "&firstname=" + this.form.value.name.firstname + "&lastname=" + this.form.value.name.lastname + "&address=" + this.form.value.name.address + "&mobile_no=" + this.form.value.name.mobilenumber + "&email=" + this.form.value.name.email + "&is_farmer=0" + "&history=", body, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    _this.loading.dismissAll();
                    if (res.message != undefined) {
                        _this.presentAlert(res.message);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__welcome_welcome__["a" /* WelcomePage */]);
                    }
                    else {
                        _this.presentAlert(res[0]);
                    }
                }, function (error) {
                    _this.loading.dismissAll();
                    _this.presentAlert("Something went wrong!");
                });
            }
            else {
                this.presentAlert("confirm password does not match with the password!");
            }
        }
        else {
            this.presentAlert("Please Fill in all the fields!");
        }
    };
    SignupPage.prototype.login = function () {
        //Login page link
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__welcome_welcome__["a" /* WelcomePage */]);
    };
    SignupPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar>\n       \n        <ion-title>Customer Registration</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n <form [formGroup]="form">\n\n      <div formGroupName="name">\n\n      <ion-item>\n      <ion-label  stacked><b>Login Details</b></ion-label>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Username:</ion-label>\n      <ion-input  formControlName="username2" placeholder="RiceUp" type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Password:</ion-label>\n      <ion-input  formControlName="password2" type="password"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label   stacked>Confirm Password:</ion-label>\n      <ion-input  formControlName="cpassword" type="password"></ion-input>\n    </ion-item>\n      <ion-item>\n      <ion-label  stacked><b>General Information</b></ion-label>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>First Name:</ion-label>\n      <ion-input  formControlName="firstname" type="text" placeholder="Juan"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Middle Name:</ion-label>\n      <ion-input  formControlName="middlename" type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Last Name:</ion-label>\n      <ion-input  formControlName="lastname" type="text"  placeholder="Dela Cruz"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Mobile Number:</ion-label>\n      <ion-input  formControlName="mobilenumber" type="text" placeholder="09XXXXXXXXX"></ion-input>\n      </ion-item>\n\n      <ion-item>\n      <ion-label  stacked>Email Address:</ion-label>\n      <ion-input  formControlName="email" type="email"  placeholder="RiceUp@riceupfarmers.org"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Address:</ion-label>\n      <ion-input  formControlName="address" type="text" placeholder="P sherman 42 wallaby way sydney"></ion-input>\n      </ion-item>\n      </div>\n\n  <ion-buttons>\n       <button ion-button block (click)="signup()">\n        <ion-icon name="ion-plus-circled"></ion-icon>Register\n      </button>\n      \n    </ion-buttons>\n    \n    </form>\n<!--<form (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.title" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-textarea [(ngModel)]="todo.address" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contact</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.contact" formControlName="contact"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Price</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.price" formControlName="price"></ion-input>\n      </ion-item>\n  <ion-item>\n        <ion-label>\n          Type\n        </ion-label>\n\n        <ion-select formControlName="option" [(ngModel)]="todo.type">\n          <ion-option value="1">Option 1</ion-option>\n          <ion-option value="2">Option 2</ion-option>\n          <ion-option value="3">Option 3</ion-option>\n          <ion-option value="4">Option 4</ion-option>\n        </ion-select>\n      </ion-item>\n        <button ion-button type="submit" block>Add Todo</button>\n    </form>\n    </div>-->\n    \n  \n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = (function () {
    function AboutPage(navCtrl, platform, statusBar, splashScreen, toast) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
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
    AboutPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>About</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <div class="about-header">\n        \n     <img src="assets/img/logo.png" />\n    </div>\n\n    <div padding class="about-info">\n\n        <h4>Rice Up Application</h4>\n\n        <p>\n          Introducing the RiceUp App! A simpler way to connect the farmer to the consumer. Just search\naround you for local products online!</p>\n\n<p>How to order products:<br>\n&nbsp;&nbsp;1. Go to the “Products” page.<br>\n&nbsp;&nbsp;2. Touch the product you want to order.<br>\n&nbsp;&nbsp;3. Choose the amount<br>\n&nbsp;&nbsp;4. Press add to cart<br>\n&nbsp;&nbsp;5. Go to the “Cart” page and click on the product<br>\n&nbsp;&nbsp;6. Press confirm order.<br>\n&nbsp;&nbsp;7. Contact the seller for pickup/delivery<br>\n&nbsp;&nbsp;8. Enjoy!\n</p>\n<p>\nFounded by students at Brigham Young University - Hawaii, RiceUp Farmers Inc was born out of a strong passion to improve the livelihood of Filipino farmers and to help regenerate agriculture in the Philippines nation. A student-led organization, it seeks to empower the individual farmer by giving farmers access to education, technology, and micro-loans.</p>\n\n<p>Visit us at our website:<br>\n<a href="https://riceupfarmers.org/" target="_blank">Riceupfarmers.org</a><br>\nFB:<br>\nRiceUp Farmers Inc. - <a href="https://www.facebook.com/RiceApp/" target="_blank">Home | Facebook</a></p>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orderinfo_orderinfo__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the OrderListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderListPage = (function () {
    function OrderListPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, menu, http, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.menu = menu;
        this.http = http;
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
        this.loading = this.loadingCtrl.create({
            content: 'Loading Orders...',
        });
        this.loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/orders', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                _this.orders = res;
                console.log(_this.orders);
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        }, function (error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    }
    OrderListPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    OrderListPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    OrderListPage.prototype.callorderinfo = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__orderinfo_orderinfo__["a" /* OrderinfoPage */], val);
    };
    return OrderListPage;
}());
OrderListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-order-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\order-list\order-list.html"*/'<!--\n\n  Generated template for the OrderListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>My Orders</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="property-list">\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let orderlist of orders">\n\n            <button ion-item  (click)="callorderinfo(orderlist.id)" class="blue" *ngIf="orderlist.order_status===2;">\n\n                <h2>Order#: {{orderlist.order_number}}</h2>\n\n                <p>{{orderlist.order_date}} - Completed </p>\n\n            </button>\n\n\n\n\n\n            <button ion-item  (click)="callorderinfo(orderlist.id)" *ngIf="orderlist.order_status===1;">\n\n                <h2>Order#: {{orderlist.order_number}}</h2>\n\n                <p>{{orderlist.order_date}} - Pending</p>\n\n            </button>\n\n\n\n            <button ion-item  (click)="callorderinfo(orderlist.id)" *ngIf="orderlist.order_status===3;">\n\n                <h2>Order#: {{orderlist.order_number}}</h2>\n\n                <p>{{orderlist.order_date}} - Cancelled</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\order-list\order-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], OrderListPage);

//# sourceMappingURL=order-list.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productonly_productonly__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OrderinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OrderinfoPage = (function () {
    function OrderinfoPage(alertCtrl, loadingCtrl, GlobalvarsProvider, http, actionSheetCtrl, navCtrl, navParams, propertyService, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.propertyService = propertyService;
        this.toastCtrl = toastCtrl;
        this.orders = null;
        this.address = null;
        this.mobile = null;
        this.order = this.navParams.data;
        this.loadorders();
    }
    OrderinfoPage.prototype.loadorders = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading Orders...',
        });
        this.loading.present();
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/order/' + this.order, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (rese) {
            console.log(rese);
            _this.orderno = rese.order_number;
            _this.sdid = rese.sd_id;
            _this.s = rese.mode_of_shipping;
            _this.orders = rese.product_order;
            _this.gtotal = _this.gettotal(_this.orders);
            _this.gtotal = "P" + _this.gtotal;
            if (_this.s == 1) {
                var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                var option2 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
                _this.http.get('http://api.riceupfarmers.com/api/shippingdetail/' + _this.sdid, option2)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (rese) {
                    console.log(rese);
                    _this.address = rese[0].shipping_address;
                    _this.mobile = rese[0].mobile_no;
                    _this.loading.dismissAll();
                }, function (error) {
                    _this.loading.dismissAll();
                });
                // code...
            }
        }, function (error) {
            _this.loading.dismissAll();
        });
    };
    OrderinfoPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    OrderinfoPage.prototype.prod = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__productonly_productonly__["a" /* ProductonlyPage */], property);
    };
    OrderinfoPage.prototype.cancelprod = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to cancel this ordered product?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.loading = _this.loadingCtrl.create({
                            content: 'Canceling...',
                        });
                        _this.loading.present();
                        var urlSearchParams = new URLSearchParams();
                        urlSearchParams.append("grant_type", _this.GlobalvarsProvider.grant_type);
                        var body = urlSearchParams.toString();
                        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.http.patch('http://api.riceupfarmers.com/api/product/cancel/' + ids, body, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (data) {
                            if (data.message != undefined) {
                                _this.presentAlert(data.message);
                                _this.loadorders();
                            }
                            else {
                                _this.presentAlert("Something went wrong!");
                            }
                            _this.loading.dismissAll();
                        }, function (Error) {
                            _this.presentAlert("No Internet Connection!");
                            _this.loading.dismissAll();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    OrderinfoPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return OrderinfoPage;
}());
OrderinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-orderinfo',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\orderinfo\orderinfo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Order#: {{orderno}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n        <ion-card *ngIf="s===1;">\n\n           <p style="padding: 10px">&nbsp;Ship to: {{address}}</p>\n\n            <p style="padding: 10px">&nbsp;Mobile No: {{mobile}}</p>\n\n        </ion-card>\n\n        <ion-list>\n\n        <ion-item-sliding *ngFor="let list of orders">\n\n            <button ion-item (click)="prod(list)">\n\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';"  style="width: 20px" style="float: left;margin-right: 5px;"  />\n\n                \n\n                <h3>{{list.farmer_product.product_name}}</h3>\n\n                <p>Price: P{{list.farmer_product.price_per_unit}}</p> \n\n                <p>Quantity: {{list.quantity}} </p> \n\n                <p *ngIf="list.current_status.product_status===0;">Status: Pending </p> \n\n                <p *ngIf="list.current_status.product_status===1;">Status: Packed </p> \n\n                <p *ngIf="list.current_status.product_status===2;">Status: Delivered  </p>\n\n                <p *ngIf="list.current_status.product_status===3;">Status: Cancelled  </p> \n\n                <p *ngIf="list.current_status.product_status===4;">Status: Received  </p> \n\n            <ion-note item-right>P{{(list.farmer_product.price_per_unit)*(list.quantity) | number:\'1.2-2\'}}</ion-note>\n\n            </button>\n\n             <ion-item-options>\n\n                <button danger (click)="cancelprod(list.id)" class="red">Cancel</button>\n\n            </ion-item-options>\n\n\n\n        </ion-item-sliding>\n\n        <ion-item-sliding>\n\n            <button ion-item>\n\n                <h3 *ngIf="s===0;" >For Pick up</h3>\n\n                <h3 *ngIf="s===1;">For Shipping</h3>\n\n                <p></p>\n\n            <ion-note item-right>{{gtotal}}</ion-note>\n\n            </button>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n\n\n\n\n<ion-footer padding>\n\n    <ion-segment>\n\n        <p><b>Note:</b> Options will appear when you swipe left on the product.(for pending products only)</p>\n\n    </ion-segment>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\orderinfo\orderinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], OrderinfoPage);

//# sourceMappingURL=orderinfo.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductonlyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductonlyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProductonlyPage = (function () {
    function ProductonlyPage(http, actionSheetCtrl, navCtrl, navParams) {
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quantity = 1;
        this.property = this.navParams.data.farmer_product;
        console.log(this.property);
        this.proid = this.navParams.data.id;
        this.quantity = this.navParams.data.quantity;
    }
    ProductonlyPage.prototype.openBrokerDetail = function (broker) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__broker_detail_broker_detail__["a" /* BrokerDetailPage */], broker);
    };
    return ProductonlyPage;
}());
ProductonlyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-productonly',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\productonly\productonly.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Product Order</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="property.id">\n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ property.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/product.jpg\';" />\n        <ion-card-content>\n            <h2 class="card-title">{{property.product_name}}</h2>\n            <p>{{property.product_desc}}</p>\n        </ion-card-content>\n        <ion-list>\n            <ion-item>\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n                <h3>Unit Type</h3>\n                <ion-note item-right>{{property.unit_type}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="pricetag"></ion-icon>\n                <h3>Price Per Unit</h3>\n                <ion-note item-right>{{property.price_per_unit}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="md-calendar"></ion-icon>\n                <h3>Date of Harvest</h3>\n                <ion-note item-right>{{property.date_of_harvest}}</ion-note>\n            </ion-item>\n            <button ion-item (click)="openBrokerDetail(property.user)">\n                <ion-avatar item-left>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ property.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" />\n                </ion-avatar>\n                <h2>{{property.user.lastname }}, {{ property.user.firstname }} {{ property.user.middlename }}</h2>\n                <p>{{ property.user.business_name }}</p>\n            </button>\n        </ion-list>\n        <ion-item>\n                <ion-icon name="cart" item-left ></ion-icon>\n                <h3 item-left >Quantity:</h3>\n                \n                <ion-note item-right>{{quantity}}</ion-note>\n            </ion-item>\n            <ion-item>\n                <ion-icon item-left name="cash"></ion-icon>\n                <h3>Total Price:</h3>\n                <ion-note item-right>P{{ ((quantity) * (property.price_per_unit)) | number:\'1.2-2\'}}</ion-note>\n            </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\productonly\productonly.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProductonlyPage);

//# sourceMappingURL=productonly.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userproduct_userproduct__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the AddproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddproductPage = (function () {
    function AddproductPage(GlobalvarsProvider, http, alertCtrl, fb, navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.lastImage = null;
        this.long = '';
        this.lat = '';
        this.username = '';
        this.buttonDisabled = true;
        this.datenow = Date.now();
        this.form = fb.group({
            name: fb.group({
                pname: '',
                desc: '',
                unit: '',
                price: '',
                stocks: '',
                harvest_date: '',
            }),
        });
    }
    AddproductPage.prototype.testform = function () {
        this.uploadImage();
    };
    AddproductPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    AddproductPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (error) {
            _this.presentToast('Error while selecting image.');
        });
    };
    AddproductPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    AddproductPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    AddproductPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    AddproductPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    AddproductPage.prototype.uploadImage = function () {
        //wwew start
        var _this = this;
        if (this.form.value.name.pname != "" && this.form.value.name.desc != "" && this.form.value.name.unit != "" && this.form.value.name.price != "" && this.form.value.name.stocks != "" && this.form.value.name.harvest_date != "") {
            // Destination URL
            if (this.lastImage == null) {
                this.presentAlert("Image selection is required!");
            }
            else {
                var timeInMs = Date.now();
                var url = 'http://riceupfarmers.com/wp-content/system/apiup.php?get=' + this.form.value.name.pname + timeInMs;
                //'http://api.riceupfarmers.com/api/product/add?name='+this.form.value.name.pname+'&desc='+this.form.value.name.desc+'&unit='+this.form.value.name.unit+'&price='+this.form.value.name.price+'&stocks='+this.form.value.name.stocks+'&harvest_date='+this.form.value.name.harvest_date;
                // File for Upload
                var targetPath = this.pathForImage(this.lastImage);
                // File name only
                var filename = this.lastImage;
                var options = {
                    fileKey: "file",
                    fileName: filename,
                    chunkedMode: false,
                    mimeType: "multipart/form-data",
                    params: { 'fileName': filename }
                };
                var fileTransfer = this.transfer.create();
                this.loading = this.loadingCtrl.create({
                    content: 'Adding your Product...',
                });
                this.loading.present();
                // Use the FileTransfer to upload the image
                fileTransfer.upload(targetPath, url, options).then(function (data) {
                    _this.loading.dismissAll();
                    _this.presentToast('product Added...');
                    //start
                    var urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("grant_type", _this.GlobalvarsProvider.grant_type);
                    urlSearchParams.append("desc", _this.form.value.name.desc);
                    var body = urlSearchParams.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.post('http://api.riceupfarmers.com/api/product/add?photo_url=' + _this.form.value.name.pname + timeInMs + '&desc=' + encodeURIComponent(_this.form.value.name.desc) + '&name=' + _this.form.value.name.pname + '&unit=' + _this.form.value.name.unit + '&price=' + _this.form.value.name.price + '&stocks=' + _this.form.value.name.stocks + '&harvest_date=' + _this.form.value.name.harvest_date, { desc: _this.form.value.name.desc }, option)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.presentAlert(data.message);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__userproduct_userproduct__["a" /* UserproductPage */]);
                    });
                    //end
                    _this.form.reset();
                }, function (error) {
                    _this.loading.dismissAll();
                    _this.presentToast('Error while uploading file.');
                });
                this.lastImage = null;
            }
        }
        else {
            this.presentAlert("Fill all the required Fields!");
        }
    };
    AddproductPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return AddproductPage;
}());
AddproductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-addproduct',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\addproduct\addproduct.html"*/'<!--\n  Generated template for the AddstayinnPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button> \n    <ion-title>Add Product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <form [formGroup]="form">\n  \n <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n      <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n    </ion-buttons>\n  </ion-toolbar>\n\n      <div formGroupName="name">\n      <ion-item>\n      <ion-label  stacked>Name:</ion-label>\n      <ion-input  formControlName="pname" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Description:</ion-label>\n      <ion-textarea formControlName="desc" placeholder=""></ion-textarea>\n      </ion-item>\n      <ion-item>\n	    <ion-label   stacked>Unit</ion-label>\n	    <ion-select formControlName="unit" >\n	      <ion-option value="">-Select Unit-</ion-option>\n	      <ion-option value="pcs">pcs</ion-option>\n        <ion-option value="kg">kg</ion-option>\n        <ion-option value="25 kg/sack">25 kg/sack</ion-option>\n        <ion-option value="50 kg/sack">50 kg/sack</ion-option>\n        <ion-option value="750g">750g</ion-option>\n        <ion-option value="250g">250g</ion-option>  \n        <ion-option value="500g">500g</ion-option>\n        <ion-option value="tail">tail</ion-option>  \n	    </ion-select>\n	  </ion-item>\n      <ion-item>\n      <ion-label  stacked>Price:</ion-label>\n      <ion-input  formControlName="price" type="number"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>Stocks:</ion-label>\n      <ion-input  formControlName="stocks" type="number"></ion-input>\n      </ion-item>\n      <ion-item>\n      <ion-label  stacked>harvest Date:</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" formControlName="harvest_date"  max="{{datenow | date: \'yyyy-MM-dd\'}}" ></ion-datetime>\n      </ion-item>\n      </div>\n\n  <ion-buttons>\n       <button ion-button block (click)="testform()">\n        <ion-icon name="ion-plus-circled"></ion-icon>Add Product\n      </button>\n      \n    </ion-buttons>\n    \n    </form>\n<!--<form (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.title" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-textarea [(ngModel)]="todo.address" formControlName="address"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contact</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.contact" formControlName="contact"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Price</ion-label>\n        <ion-input type="text" [(ngModel)]="todo.price" formControlName="price"></ion-input>\n      </ion-item>\n  <ion-item>\n        <ion-label>\n          Type\n        </ion-label>\n\n        <ion-select formControlName="option" [(ngModel)]="todo.type">\n          <ion-option value="1">Option 1</ion-option>\n          <ion-option value="2">Option 2</ion-option>\n          <ion-option value="3">Option 3</ion-option>\n          <ion-option value="4">Option 4</ion-option>\n        </ion-select>\n      </ion-item>\n        <button ion-button type="submit" block>Add Todo</button>\n    </form>\n    </div>-->\n    \n  \n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\addproduct\addproduct.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
], AddproductPage);

//# sourceMappingURL=addproduct.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userproduct_userproduct__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__changepic_changepic__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UpdateproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdateproductPage = (function () {
    function UpdateproductPage(alertCtrl, loadingCtrl, GlobalvarsProvider, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datenow = Date.now();
        this.timee = Date.now();
        this.property = this.navParams.data;
        this.stocks_available = this.property.stocks_available;
        this.product_name = this.property.product_name;
        this.product_desc = this.property.product_desc;
        this.unit_type = this.property.unit_type;
        this.price_per_unit = this.property.price_per_unit;
        this.date_of_harvest = this.property.date_of_harvest;
    }
    UpdateproductPage.prototype.update = function () {
        var _this = this;
        if (this.stocks_available != '' || this.product_name != '' || this.product_desc != '' || this.unit_type != '' || this.price_per_unit != '' || this.date_of_harvest != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Updating Product...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.patch('http://api.riceupfarmers.com/api/product/update/' + this.property.id + '?name=' + this.product_name + '&photo_url=' + this.property.photo_url + '&unit=' + this.unit_type + '&price=' + this.price_per_unit + '&stocks=' + this.stocks_available + '&harvest_date=' + this.date_of_harvest + '&desc=' + encodeURIComponent(this.product_desc), { desc: this.product_desc }, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.loading.dismissAll();
                _this.presentConfirm("Product Updated!!");
            });
        }
        else {
            this.presentAlert("All Fields are required!");
        }
    };
    UpdateproductPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UpdateproductPage.prototype.presentConfirm = function (val) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '',
            message: val,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__userproduct_userproduct__["a" /* UserproductPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateproductPage.prototype.changepic = function (var2) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__changepic_changepic__["a" /* ChangepicPage */], var2);
    };
    return UpdateproductPage;
}());
UpdateproductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-updateproduct',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\updateproduct\updateproduct.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Update Product</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="property.id">\n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ property.photo_url }}.jpg?{{timee}}"  alt="loading..."   onError="this.src=\'http://riceupfarmers.org/wp-content/system/product.jpg\';"  (click)="changepic(property.photo_url)"/>\n        <p> Tap the image to update picture.</p>\n        <ion-list>\n                <ion-item>\n                  <ion-icon item-left name="md-bookmarks"></ion-icon>\n                  <ion-label  stacked>Product Name</ion-label>\n                  <ion-input [(ngModel)]="product_name" type="text"></ion-input>\n                  </ion-item>\n                    \n                  <ion-item>\n                  <ion-icon item-left name="md-list"></ion-icon>\n                  <ion-label  stacked>Description</ion-label>\n                  <ion-textarea [(ngModel)]="product_desc" ></ion-textarea>\n                  </ion-item>\n\n			      <ion-item>\n                  <ion-icon item-left name="ios-archive"></ion-icon>\n                  <ion-label  stacked>Stocks</ion-label>\n                  <ion-input [(ngModel)]="stocks_available" type="number"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                  <ion-icon item-left name="ios-clipboard"></ion-icon>\n                  <ion-label  stacked>Unit Type</ion-label>\n                  <ion-select [(ngModel)]="unit_type">\n                    <ion-option value="pcs">pcs</ion-option>\n                    <ion-option value="kg">kg</ion-option>\n                    <ion-option value="25 kg/sack">25 kg/sack</ion-option>\n                    <ion-option value="50 kg/sack">50 kg/sack</ion-option>\n                    <ion-option value="750g">750g</ion-option>\n                    <ion-option value="250g">250g</ion-option>  \n                    <ion-option value="500g">500g</ion-option>\n                    <ion-option value="tail">tail</ion-option>   \n                    </ion-select>\n                  </ion-item>\n\n                  <ion-item>\n                  <ion-icon item-left name="pricetag"></ion-icon>\n                  <ion-label  stacked>Price Per Unit</ion-label>\n                  <ion-input [(ngModel)]="price_per_unit"  type="number"></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                   <ion-icon item-left name="md-calendar"></ion-icon>\n                  <ion-label  stacked>Date of Harvest</ion-label>\n                  <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="date_of_harvest" max="{{datenow | date: \'yyyy-MM-dd\'}}"></ion-datetime>\n                  </ion-item>\n            \n        </ion-list>\n\n        <button ion-button class="submit-btn" block  (click)="update()">Update Product</button>\n\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\updateproduct\updateproduct.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], UpdateproductPage);

//# sourceMappingURL=updateproduct.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userproduct_userproduct__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ChangepicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepicPage = (function () {
    function ChangepicPage(navParams, GlobalvarsProvider, http, alertCtrl, fb, navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.navParams = navParams;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.lastImage = null;
        this.url = this.navParams.data;
    }
    ChangepicPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ChangepicPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    ChangepicPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ChangepicPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ChangepicPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ChangepicPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ChangepicPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChangepicPage.prototype.testform = function () {
        var _this = this;
        //wwew start
        if (this.lastImage == null) {
            this.presentAlert("Image selection is required!");
        }
        else {
            var url = 'https://riceupfarmers.com/wp-content/system/uploadpro.php?get=' + this.url;
            //'http://api.riceupfarmers.org/api/product/add?name='+this.form.value.name.pname+'&desc='+this.form.value.name.desc+'&unit='+this.form.value.name.unit+'&price='+this.form.value.name.price+'&stocks='+this.form.value.name.stocks+'&harvest_date='+this.form.value.name.harvest_date;
            // File for Upload
            var targetPath = this.pathForImage(this.lastImage);
            // File name only
            var filename = this.lastImage;
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'fileName': filename }
            };
            var fileTransfer = this.transfer.create();
            this.loading = this.loadingCtrl.create({
                content: 'Uploading Image...',
            });
            this.loading.present();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                _this.loading.dismissAll();
                _this.presentToast('Image Uploaded...');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__userproduct_userproduct__["a" /* UserproductPage */]);
            }, function (err) {
                _this.loading.dismissAll();
                _this.presentToast('Error while uploading file.');
            });
            this.lastImage = null;
        }
    };
    return ChangepicPage;
}());
ChangepicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-changepic',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\changepic\changepic.html"*/'<!--\n  Generated template for the ChangepicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Product Picture</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n	<ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n      <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n    </ion-buttons>\n	</ion-card>\n  <ion-buttons>\n       <button ion-button block (click)="testform()">\n        <ion-icon name="ion-plus-circled"></ion-icon>Change Product Picture\n      </button>\n      \n    </ion-buttons>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\changepic\changepic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
], ChangepicPage);

//# sourceMappingURL=changepic.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfpicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the ProfpicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfpicPage = (function () {
    function ProfpicPage(events, navParams, GlobalvarsProvider, http, alertCtrl, fb, navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl) {
        this.events = events;
        this.navParams = navParams;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.lastImage = null;
        this.url = this.GlobalvarsProvider.loggeduser.id;
        console.log(this.url);
    }
    ProfpicPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfpicPage.prototype.editpic = function (user) {
        user = 'none';
        this.events.publish('user:pic', user);
    };
    ProfpicPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (error) {
            _this.presentToast('Error while selecting image.');
        });
    };
    ProfpicPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ProfpicPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ProfpicPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ProfpicPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ProfpicPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ProfpicPage.prototype.testform = function () {
        var _this = this;
        //wwew start
        if (this.lastImage == null) {
            this.presentAlert("Image selection is required!");
        }
        else {
            var url = 'https://riceupfarmers.com/wp-content/system/uploadpro.php?get=' + this.url;
            //'http://api.riceupfarmers.org/api/product/add?name='+this.form.value.name.pname+'&desc='+this.form.value.name.desc+'&unit='+this.form.value.name.unit+'&price='+this.form.value.name.price+'&stocks='+this.form.value.name.stocks+'&harvest_date='+this.form.value.name.harvest_date;
            // File for Upload
            var targetPath = this.pathForImage(this.lastImage);
            // File name only
            var filename = this.lastImage;
            var options = {
                fileKey: "file",
                fileName: filename,
                chunkedMode: false,
                mimeType: "multipart/form-data",
                params: { 'fileName': filename }
            };
            var fileTransfer = this.transfer.create();
            this.loading = this.loadingCtrl.create({
                content: 'Uploading Image...',
            });
            this.loading.present();
            // Use the FileTransfer to upload the image
            fileTransfer.upload(targetPath, url, options).then(function (data) {
                _this.loading.dismissAll();
                _this.presentToast('Image Uploaded...');
                _this.editpic('none');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
            }, function (err) {
                _this.loading.dismissAll();
                _this.presentToast('Error while uploading file.');
            });
            this.lastImage = null;
        }
    };
    return ProfpicPage;
}());
ProfpicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-profpic',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\profpic\profpic.html"*/'<!--\n  Generated template for the ChangepicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Change Profile Picture</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card>\n	<ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>Select Image\n      </button>\n      <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n    </ion-buttons>\n	</ion-card>\n  <ion-buttons>\n       <button ion-button block (click)="testform()">\n        <ion-icon name="ion-plus-circled"></ion-icon>Change Profile Picture\n      </button>\n      \n    </ion-buttons>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\profpic\profpic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */]])
], ProfpicPage);

//# sourceMappingURL=profpic.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepassPage = (function () {
    function ChangepassPage(storage, loadingCtrl, alertCtrl, navCtrl, fb, navParams, http, GlobalvarsProvider) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.temp = '';
        this.form = fb.group({
            name: fb.group({
                oldpw: '',
                newpw: '',
                rnewpw: '',
            }),
        });
    }
    ChangepassPage.prototype.calltoChange = function () {
        var _this = this;
        if (this.form.value.name.rnewpw == '' || this.form.value.name.newpw == '' || this.form.value.name.oldpw == '') {
            this.alertConfirm2("please fill all the inputs");
        }
        else if (this.form.value.name.rnewpw != this.form.value.name.newpw) {
            this.alertConfirm2("New Password and ConfirmPassword does not Match!");
        }
        else {
            this.loading = this.loadingCtrl.create({
                content: 'Changing password...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.patch('http://api.riceupfarmers.com/api/user/changepass?oldpassword=' + this.form.value.name.oldpw + '&newpassword=' + this.form.value.name.newpw, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.temp = _this.form.value.name.rnewpw;
                _this.form.value.name.rnewpw = '';
                _this.form.value.name.newpw = '';
                _this.form.value.name.oldpw = '';
                _this.form.reset();
                _this.loading.dismissAll();
                _this.alertConfirm2(res.message);
            });
        }
    };
    ChangepassPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        if (var2 == "Your password was updated successfully.") {
                            _this.GlobalvarsProvider.password = _this.temp;
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
                            _this.storage.set('password', _this.temp);
                        }
                        _this.form.reset();
                        _this.form.value.name.rnewpw = '';
                        _this.form.value.name.newpw = '';
                        _this.form.value.name.oldpw = '';
                    }
                }
            ]
        });
        alert.present();
    };
    return ChangepassPage;
}());
ChangepassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-changepass',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\changepass\changepass.html"*/'<!--\n  Generated template for the CpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Change Password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n   <form [formGroup]="form">\n    \n  <div formGroupName="name">\n      <ion-list>\n\n        <ion-item>\n          <ion-label  floating>Old Password</ion-label>\n          <ion-input type="password"  formControlName="oldpw"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item>\n          <ion-label  floating>New Password</ion-label>\n          <ion-input type="password" formControlName="newpw"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label  floating>Confirm New Password</ion-label>\n          <ion-input type="password" formControlName="rnewpw"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n      <div padding>\n          <button ion-button block  (click)="calltoChange()">Change</button>\n      </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\changepass\changepass.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
], ChangepassPage);

//# sourceMappingURL=changepass.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipping_details_shipping_details__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the UpdateaccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdateaccountPage = (function () {
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
        console.log(this.user);
        this.isfarmer = this.user.is_farmer;
        this.test = this.user.is_farmer;
        this.tempuser = this.user;
        this.user.address = this.GlobalvarsProvider.activeaddressaddress;
        this.user.mobile_no = this.GlobalvarsProvider.activeaddressmobile;
    }
    UpdateaccountPage.prototype.shipdetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__shipping_details_shipping_details__["a" /* ShippingDetailsPage */], {
            id: 'ss', address: 'ss', mobile: 'ss'
        });
    };
    UpdateaccountPage.prototype.showMarkers = function () {
        if (this.user.address_lat != null) {
            if (this.markersGroup) {
                this.map.removeLayer(this.markersGroup);
            }
            this.markersGroup = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.layerGroup([]);
            var marker = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.marker([this.user.address_lat, this.user.address_long]).on('click', function (event) { return console.log("map marker"); });
            this.markersGroup.addLayer(marker);
            this.map.addLayer(this.markersGroup);
        }
    };
    UpdateaccountPage.prototype.ionViewDidEnter = function () {
        this.user.address = this.GlobalvarsProvider.activeaddressaddress;
        this.user.mobile_no = this.GlobalvarsProvider.activeaddressmobile;
    };
    UpdateaccountPage.prototype.showMap = function () {
        var _this = this;
        if (this.isfarmer == 1) {
            setTimeout(function () {
                if (_this.user.address_lat != null) {
                    _this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map("map2").setView([_this.user.address_lat, _this.user.address_long], 10);
                    __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                        attribution: '&copy; techventures.ph'
                    }).addTo(_this.map);
                }
                else {
                    _this.map = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.map("map2").setView([15.060377, 120.674492], 10);
                    __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                        attribution: '&copy; techventures.ph'
                    }).addTo(_this.map);
                }
                _this.showMarkers();
                _this.map.locate({ setView: false, maxZoom: 10 });
                _this.map.on('locationfound', function (e) {
                    var radius = e.accuracy / 2;
                    var popup = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.popup();
                    popup
                        .setLatLng(e.latlng)
                        .setContent("You are currently here!")
                        .openOn(_this.map);
                    __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
                });
                var popup = __WEBPACK_IMPORTED_MODULE_3_leaflet___default.a.popup();
                _this.map.on('click', function (e) {
                    popup
                        .setLatLng(e.latlng)
                        .setContent("<b>Selected Location</b><br>Coordinates: <br>lat: " + e.latlng.lat.toString() + "<br>lng: " + e.latlng.lng.toString())
                        .openOn(_this.map);
                    _this.user.address_long = e.latlng.lng;
                    console.log(e.latlng.lng);
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
            if (this.user.address == '') {
            }
            else {
                this.loading = this.loadingCtrl.create({
                    content: 'Updating Account Info...',
                });
                this.loading.present();
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                header.append("Authorization", this.GlobalvarsProvider.gettoken());
                this.user.is_farmer = this.isfarmer;
                var option = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: header });
                if (this.user.address_lat == null) {
                    this.user.address_long = 0;
                    this.user.address_lat = 0;
                    this.user.years_in_business = 0;
                    this.user.years_in_farming = 0;
                    this.user.business_name = "";
                }
                if (this.user.address_long == null) {
                    // code...
                }
                this.http.patch('http://api.riceupfarmers.com/api/user/update?firstname=' +
                    this.user.firstname + '&middlename=' + this.user.middlename + '&lastname=' + this.user.lastname +
                    '&address=' + this.user.address + '&address_lat=' + this.user.address_lat +
                    '&address_long=' + this.user.address_long +
                    '&bus_name=' + this.user.business_name +
                    '&mobile_no=' + this.user.mobile_no + '&email=' + this.user.email + '&years_bus=' +
                    this.user.years_in_business + '&is_farmer=' + this.isfarmer + '&history=' + this.user.history +
                    '&years_farm=' + this.user.years_in_farming, body, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (data) {
                    _this.loading.dismissAll();
                    _this.GlobalvarsProvider.loggeduser = _this.user;
                    _this.presentConfirm(data.message);
                    _this.createUser(_this.isfarmer);
                    if (_this.GlobalvarsProvider.activeaddressid2 != undefined) {
                        _this.updateaddress();
                    }
                    console.log(data);
                }, function (error) {
                    console.log(error);
                    _this.presentAlert("No Internet Connection!");
                    _this.loading.dismissAll();
                });
            }
        }
        else {
            this.user = this.tempuser;
            console.log(this.tempuser);
            this.presentAlert("Please Fill the Required Fields!");
        }
    };
    UpdateaccountPage.prototype.updateaddress = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/shippingdetail/' + this.GlobalvarsProvider.activeaddressid2, {
            'address': this.user.address,
            'address_lat': this.user.address_lat,
            'address_long': this.user.address_long,
            'mobile_no': this.user.mobile_no
        }, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.GlobalvarsProvider.activeaddressaddress2 = _this.user.address;
            _this.GlobalvarsProvider.activeaddressmobile2 = _this.user.mobile_no;
            // this.alertConfirm2(res.message);
        }, function (Error) {
            console.log(Error);
            _this.presentAlert("No Internet Connection!");
        });
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateaccountPage.prototype.warn = function () {
        this.presentAlert("tap the manage shipping button to manange shipping details.");
    };
    return UpdateaccountPage;
}());
UpdateaccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-updateaccount',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\updateaccount\updateaccount.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Update Account</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf="viewMode2===\'list\'">\n        <ion-list>\n                <ion-item>\n                  <ion-label  stacked>Username: (Cannot be edited)</ion-label>\n                  <ion-input [(ngModel)]="user.username" disabled="true"></ion-input>\n                  \n                  </ion-item>\n                    \n                  <ion-item>\n                  <ion-label  stacked>First Name:</ion-label>\n                  <ion-input [(ngModel)]="user.firstname" ></ion-input>\n                  </ion-item>\n\n			           <ion-item>\n                  <ion-label  stacked>Middle Name:</ion-label>\n                  <ion-input [(ngModel)]="user.middlename" ></ion-input>\n                  </ion-item>\n\n			           <ion-item>\n                  <ion-label  stacked>Last Name:</ion-label>\n                  <ion-input [(ngModel)]="user.lastname" ></ion-input>\n                  </ion-item>\n\n			            <ion-item *ngIf="user.address!=undefined" (click)=\'warn()\'>\n                  <ion-label  stacked>Address:</ion-label>\n                  <ion-input [(ngModel)]="user.address" readonly></ion-input>\n                  </ion-item>               \n\n                  <ion-item *ngIf="user.address!=undefined" (click)=\'warn()\'>\n                  <ion-label  stacked>Mobile Number:</ion-label>\n                  <ion-input [(ngModel)]="user.mobile_no"  readonly></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <button ion-button class="submit-btn" block (click)="shipdetails()" style="height: 50px">Manage Shipping Details</button>\n                  </ion-item>  \n			             <ion-item>\n                  <ion-label  stacked>Email:</ion-label>\n                  <ion-input [(ngModel)]="user.email" ></ion-input>\n                  </ion-item>\n\n        </ion-list>\n\n        <button ion-button class="submit-btn" block  (click)="update2()">Update General Info</button>\n    </ion-card>\n    <div  *ngIf="viewMode2===\'map\'">\n           <ion-list>\n            <ion-item>\n              <ion-label>Activate/Deactivate being a farmer</ion-label>\n              <ion-toggle [(ngModel)]="test" (ionChange)="g();"></ion-toggle>\n            </ion-item>\n          </ion-list>\n            <div *ngIf="isfarmer===0" style="margin-top: 20px;margin-left: 10px;">\n                        Your farmer Info is not available.\n            </div>\n\n            <div  *ngIf="isfarmer===1">\n                <div style="width:100%;height:300px;" id="map2"></div>\n\n           <ion-item>\n                  <ion-label  stacked>Business Name:</ion-label>\n                <ion-input [(ngModel)]="user.business_name" ></ion-input>\n                  </ion-item>\n            <ion-item>\n                  <ion-label  stacked>Years in Business:</ion-label>\n                <ion-input [(ngModel)]="user.years_in_business" ></ion-input>\n                  </ion-item>\n            <ion-item>\n                  <ion-label  stacked>Years in Farming:</ion-label>\n                <ion-input [(ngModel)]="user.years_in_farming" ></ion-input>\n                  </ion-item>\n\n            </div>\n\n            <button ion-button class="submit-btn" block  (click)="update2()">Update Farmer Info</button>\n    </div>\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode2">\n        <ion-segment-button value="list">\n            General Info\n        </ion-segment-button>\n        <ion-segment-button value="map">\n            Farmer Info\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\updateaccount\updateaccount.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
], UpdateaccountPage);

//# sourceMappingURL=updateaccount.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PrivacyPolicyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrivacyPolicyPage = (function () {
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
    return PrivacyPolicyPage;
}());
PrivacyPolicyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-privacy-policy',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\privacy-policy\privacy-policy.html"*/'<!--\n  Generated template for the TermsandagreementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar><button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Effective date: November 1, 2018</p>\n  <p>\n	RiceUp Farmers Inc ("us", "we", or "our") operates the RiceUp mobile application (the "Service").</p>\n  <p>\n  This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for RiceUp Farmers Inc is managed through <u>Free Privacy Policy</u>.</p>\n  <p>\n  We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.\n</p>\n<h3>Information Collection And Use</h3>\n<p>\n  We collect several different types of information for various purposes to provide and improve our Service to you.\n</p>\n<h4>Types of Data Collected</h4>\n<p>Personal Data<br>\nWhile using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>\n\n<ul>\n  <li>Email address</li>\n  <li>First name and last name</li>\n  <li>Profile picture</li>\n  <li>Phone number</li>\n  <li>Address, State, Province, ZIP/Postal code, City</li>\n  <li>GPS Location</li>\n  <li>Cookies and Usage Data</li>\n</ul><p>\nUsage Data\n<br><br>\nWhen you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").<br><br>\nTracking & Cookies Data<br><br>\nWe use cookies and similar tracking technologies to track the activity on our Service and hold certain information.<br>\nCookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.<br><br>\nYou can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.\n<br><br>\nExamples of Cookies we use:\n</p>\n\n<ul>\n  <li><b>Session Cookies</b>. We use Session Cookies to operate our Service.</li>\n  <li><b>Preference Cookies</b>. We use Preference Cookies to remember your preferences and various settings.</li>\n  <li><b>Security Cookies</b>. We use Security Cookies for security purposes.</li>\n</ul>\n<h3>\n  Use of Data\n</h3>\n<p>\n   RiceUp Farmers Inc uses the collected data for various purposes:\n   \n</p>\n<ul>\n     <li>To provide and maintain the Service</li>\n     <li>To notify you about changes to our Service\n</li>\n     <li>To allow you to participate in interactive features of our Service when you choose to do so\n</li>\n     <li>To provide customer care and support\n</li>\n     <li>To provide analysis or valuable information so that we can improve the Service</li>\n     <li>To monitor the usage of the Service</li>\n     <li>To detect, prevent and address technical issues</li>\n   </ul>\n<h3>Transfer Of Data\n</h3>\n<p>\n  Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.<br><br>\nIf you are located outside the Philippines and choose to provide information to us, please note that we transfer the data, including Personal Data, to the Philippines and process it there.<br><br>\nYour consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.<br><br>\nRiceUp Farmers Inc will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.\n\n</p>\n<h3>\n  Disclosure Of Data\n</h3>\n<p>Legal Requirements<br><br>\nRiceUp Farmers Inc may disclose your Personal Data in the good faith belief that such action is necessary to:\n</p>\n<ul>\n  <li>To comply with a legal obligation</li>\n  <li>To protect and defend the rights or property of RiceUp Farmers Inc</li>\n  <li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n  <li>To protect the personal safety of users of the Service or the public</li>\n  <li>To protect against legal liability</li>\n</ul>\n<h3>Security Of Data</h3>\n<p>\n  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.\n</p>\n<h3>Service Providers</h3>\n<p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.<br>\nThese third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.<br><br>\nAnalytics\n<br><br>We may use third-party Service Providers to monitor and analyze the use of our Service.\n\n</p>\n<ul>\n  <li><b>Google Analytics</b></li>\n  <li>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.\n</li>\n  <li>You may opt-out of certain Google Analytics features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a></li>\n  <li>\n    \n    For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>\n  </li>\n</ul>\n<h3>Links To Other Sites</h3>\n<p>\n  Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit.<br><br>\nWe have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.\n\n</p>\n<h3>\n  Children\'s Privacy\n</h3>\n<p>Our Service does not address anyone under the age of 18 ("Children").<br><br>\nWe do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.\n</p>\n<h3>Changes To This Privacy Policy</h3>\n<p>\n  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.<br><br>\nWe will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.<br><br>\nYou are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.\n\n</p>\n<h3>Contact Us\n</h3>\n<p>If you have any questions about this Privacy Policy, please contact us:</p>\n<ul>\n  <li>By email: <a href="mailto:riceupfilipino@gmail.com">riceupfilipino@gmail.com</a></li>\n  <li>By visiting this page on our website: <a href="https://www.riceupfarmers.org">https://www.riceupfarmers.org</a></li>\n</ul>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\privacy-policy\privacy-policy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], PrivacyPolicyPage);

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__property_list_property_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//https://www.youtube.com/watch?v=fE09dHu6sP0














/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SplashPage = (function () {
    function SplashPage(storage, statusBar, splashScreen, toast, loadingCtrl, alertCtrl, menu, events, GlobalvarsProvider, platform, navCtrl, http) {
        var _this = this;
        this.storage = storage;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.events = events;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.http = http;
        storage.get('username').then(function (val) {
            _this.uname = val;
            storage.get('password').then(function (val2) {
                _this.pw = val2;
                if (val2 != null && val2 != undefined && val2 != '') {
                    _this.calltologin();
                }
                else
                    _this.guestlogin();
            });
        });
        storage.get('first').then(function (val2) {
            if (val2 != null && val2 != undefined && val2 != '') {
            }
            else
                _this.presentAlert2();
        });
    }
    SplashPage.prototype.calltologin = function () {
        var _this = this;
        if (this.uname != '' && this.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = this.uname;
            this.GlobalvarsProvider.password = this.pw;
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            urlSearchParams.append("client_id", this.GlobalvarsProvider.client_id);
            urlSearchParams.append("client_secret", this.GlobalvarsProvider.client_secret);
            urlSearchParams.append("username", this.GlobalvarsProvider.username);
            urlSearchParams.append("password", this.GlobalvarsProvider.password);
            urlSearchParams.append("scope", this.GlobalvarsProvider.scope);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (data.token_type != undefined) {
                    _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                    //wwew start
                    var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.get('http://api.riceupfarmers.com/api/user', option_1)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.uname);
                    _this.storage.set('password', _this.pw);
                    var urlSearchParams_1 = new URLSearchParams();
                    urlSearchParams_1.append("passforpost", 'any');
                    var body_1 = urlSearchParams_1.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option2_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.storage.get('shipaddress').then(function (val2) {
                        if (val2 != null && val2 != undefined && val2 != '') {
                            _this.GlobalvarsProvider.activeaddressaddress = val2;
                            _this.storage.get('shipmobile').then(function (value) {
                                _this.GlobalvarsProvider.activeaddressmobile = value;
                            });
                        }
                        else {
                            _this.http.get('http://api.riceupfarmers.com/api/shippingdetails/', option2_1)
                                .map(function (response) { return response.json(); })
                                .subscribe(function (res) {
                                _this.GlobalvarsProvider.activeaddressaddress = res[0].shipping_address;
                                _this.GlobalvarsProvider.activeaddressmobile = res[0].mobile_no;
                            }, function (Error) {
                                console.log(Error);
                                _this.presentAlert("No Internet Connection!");
                            });
                        }
                    });
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__property_list_property_list__["a" /* PropertyListPage */]);
                }
                else
                    _this.presentAlert("Invalid Username or password");
            }, function (error) {
                console.log(error);
                _this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Input username or password!");
        }
    };
    SplashPage.prototype.guestlogin = function () {
        var _this = this;
        if (this.uname != '' && this.pw != '') {
            this.loading = this.loadingCtrl.create({
                content: 'Logging in...',
            });
            this.loading.present();
            this.GlobalvarsProvider.username = 'guest';
            this.GlobalvarsProvider.password = 'guest123';
            this.uname = 'guest';
            this.pw = 'guest123';
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            urlSearchParams.append("client_id", this.GlobalvarsProvider.client_id);
            urlSearchParams.append("client_secret", this.GlobalvarsProvider.client_secret);
            urlSearchParams.append("username", this.GlobalvarsProvider.username);
            urlSearchParams.append("password", this.GlobalvarsProvider.password);
            urlSearchParams.append("scope", this.GlobalvarsProvider.scope);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                if (data.token_type != undefined) {
                    _this.GlobalvarsProvider.settoken(data.token_type + " " + data.access_token);
                    //wwew start
                    var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option_2 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.get('http://api.riceupfarmers.com/api/user', option_2)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.createUser(data);
                    }, function (error) {
                        _this.presentAlert("Slow internet Connection!");
                        _this.loading.dismissAll();
                    });
                    //wew end
                    _this.loading.dismissAll();
                    _this.storage.set('username', _this.uname);
                    _this.storage.set('password', _this.pw);
                    _this.storage.set('first', _this.uname);
                    var urlSearchParams_2 = new URLSearchParams();
                    urlSearchParams_2.append("passforpost", 'any');
                    var body_2 = urlSearchParams_2.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                    var option2 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.get('http://api.riceupfarmers.com/api/shippingdetails/', option2)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        if (_this.GlobalvarsProvider.activeaddressid != undefined) {
                            _this.GlobalvarsProvider.activeaddressid = res[0].id;
                            _this.GlobalvarsProvider.activeaddressaddress = res[0].shipping_address;
                            _this.GlobalvarsProvider.activeaddressmobile = res[0].mobile_no;
                            _this.GlobalvarsProvider.activeaddressid2 = res[0].id;
                            _this.GlobalvarsProvider.activeaddressaddress2 = res[0].shipping_address;
                            _this.GlobalvarsProvider.activeaddressmobile2 = res[0].mobile_no;
                        }
                    }, function (Error) {
                        console.log(Error);
                        _this.presentAlert("No Internet Connection!");
                    });
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__property_list_property_list__["a" /* PropertyListPage */]);
                }
                else
                    _this.presentAlert("Invalid Username or password");
            }, function (error) {
                console.log(error);
                _this.presentAlert("Failed to login. Make sure you have valid user credentials or you are connected to the internet.");
                _this.loading.dismissAll();
            });
        }
        else {
            this.presentAlert("Input username or password!");
        }
    };
    SplashPage.prototype.createUser = function (user) {
        this.events.publish('user:created', user, this.GlobalvarsProvider.getgid());
    };
    SplashPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SplashPage.prototype.presentAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: 'Welcome',
            subTitle: "You receive a free 3 month trial to upload and sell products! Once the trial is over, you can choose from a future payment system in order to keep selling products.",
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return SplashPage;
}());
SplashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-splash',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\splash\splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content style="background-image:    url(assets/img/splash.png);\n    background-size:     cover;                      /* <------ */\n    background-repeat:   no-repeat;\n    background-position: center center;">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\splash\splash.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_6__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_property_list_property_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_property_detail_property_detail__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_broker_list_broker_list__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_broker_detail_broker_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_broker_service_mock__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_termsandagreement_termsandagreement__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_list_order_list__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_transfer__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_path__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_orderinfo_orderinfo__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_addproduct_addproduct__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_userproduct_userproduct__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_privacy_policy_privacy_policy__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_account_account__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cartupdate_cartupdate__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_farmer_location_farmer_location__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_prouduct_detail_prouduct_detail__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_updateproduct_updateproduct__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_changepic_changepic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_profpic_profpic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_changepass_changepass__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_updateaccount_updateaccount__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_pickup_pickup__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_productonly_productonly__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_shipping_shipping__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_shipping_details_shipping_details__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_shipping_details_update_shipping_details_update__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_shipping_details_add_shipping_details_add__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_transact_packed_transact_packed__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_transac_transac__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_transactions_transactions__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_dispatch_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_network__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_background_mode__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_splash_splash__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_forgot_password_forgot_password__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_property_list_property_list__["a" /* PropertyListPage */], __WEBPACK_IMPORTED_MODULE_47__pages_dispatch_dispatch__["a" /* DispatchPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_property_detail_property_detail__["a" /* PropertyDetailPage */], __WEBPACK_IMPORTED_MODULE_36__pages_changepass_changepass__["a" /* ChangepassPage */], __WEBPACK_IMPORTED_MODULE_37__pages_updateaccount_updateaccount__["a" /* UpdateaccountPage */], __WEBPACK_IMPORTED_MODULE_38__pages_pickup_pickup__["a" /* PickupPage */], __WEBPACK_IMPORTED_MODULE_40__pages_shipping_shipping__["a" /* ShippingPage */], __WEBPACK_IMPORTED_MODULE_45__pages_transac_transac__["a" /* TransacPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_broker_list_broker_list__["a" /* BrokerListPage */], __WEBPACK_IMPORTED_MODULE_32__pages_prouduct_detail_prouduct_detail__["a" /* ProuductDetailPage */], __WEBPACK_IMPORTED_MODULE_34__pages_changepic_changepic__["a" /* ChangepicPage */], __WEBPACK_IMPORTED_MODULE_35__pages_profpic_profpic__["a" /* ProfpicPage */], __WEBPACK_IMPORTED_MODULE_39__pages_productonly_productonly__["a" /* ProductonlyPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */], __WEBPACK_IMPORTED_MODULE_26__pages_addproduct_addproduct__["a" /* AddproductPage */], __WEBPACK_IMPORTED_MODULE_27__pages_userproduct_userproduct__["a" /* UserproductPage */], __WEBPACK_IMPORTED_MODULE_25__pages_orderinfo_orderinfo__["a" /* OrderinfoPage */], __WEBPACK_IMPORTED_MODULE_28__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], __WEBPACK_IMPORTED_MODULE_30__pages_cartupdate_cartupdate__["a" /* CartupdatePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_termsandagreement_termsandagreement__["a" /* TermsandagreementPage */], __WEBPACK_IMPORTED_MODULE_17__pages_order_list_order_list__["a" /* OrderListPage */], __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__["a" /* CartPage */], __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_29__pages_account_account__["a" /* AccountPage */], __WEBPACK_IMPORTED_MODULE_31__pages_farmer_location_farmer_location__["a" /* FarmerLocationPage */], __WEBPACK_IMPORTED_MODULE_33__pages_updateproduct_updateproduct__["a" /* UpdateproductPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_shipping_details_shipping_details__["a" /* ShippingDetailsPage */], __WEBPACK_IMPORTED_MODULE_42__pages_shipping_details_update_shipping_details_update__["a" /* ShippingDetailsUpdatePage */], __WEBPACK_IMPORTED_MODULE_43__pages_shipping_details_add_shipping_details_add__["a" /* ShippingDetailsAddPage */], __WEBPACK_IMPORTED_MODULE_44__pages_transact_packed_transact_packed__["a" /* TransactPackedPage */], __WEBPACK_IMPORTED_MODULE_46__pages_transactions_transactions__["a" /* TransactionsPage */], __WEBPACK_IMPORTED_MODULE_51__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_50__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_47__pages_dispatch_dispatch__["a" /* DispatchPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_property_list_property_list__["a" /* PropertyListPage */], __WEBPACK_IMPORTED_MODULE_36__pages_changepass_changepass__["a" /* ChangepassPage */], __WEBPACK_IMPORTED_MODULE_37__pages_updateaccount_updateaccount__["a" /* UpdateaccountPage */], __WEBPACK_IMPORTED_MODULE_38__pages_pickup_pickup__["a" /* PickupPage */], __WEBPACK_IMPORTED_MODULE_39__pages_productonly_productonly__["a" /* ProductonlyPage */], __WEBPACK_IMPORTED_MODULE_40__pages_shipping_shipping__["a" /* ShippingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_property_detail_property_detail__["a" /* PropertyDetailPage */], __WEBPACK_IMPORTED_MODULE_34__pages_changepic_changepic__["a" /* ChangepicPage */], __WEBPACK_IMPORTED_MODULE_32__pages_prouduct_detail_prouduct_detail__["a" /* ProuductDetailPage */], __WEBPACK_IMPORTED_MODULE_33__pages_updateproduct_updateproduct__["a" /* UpdateproductPage */], __WEBPACK_IMPORTED_MODULE_35__pages_profpic_profpic__["a" /* ProfpicPage */], __WEBPACK_IMPORTED_MODULE_45__pages_transac_transac__["a" /* TransacPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_broker_list_broker_list__["a" /* BrokerListPage */], __WEBPACK_IMPORTED_MODULE_26__pages_addproduct_addproduct__["a" /* AddproductPage */], __WEBPACK_IMPORTED_MODULE_27__pages_userproduct_userproduct__["a" /* UserproductPage */], __WEBPACK_IMPORTED_MODULE_25__pages_orderinfo_orderinfo__["a" /* OrderinfoPage */], __WEBPACK_IMPORTED_MODULE_28__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], __WEBPACK_IMPORTED_MODULE_30__pages_cartupdate_cartupdate__["a" /* CartupdatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_broker_detail_broker_detail__["a" /* BrokerDetailPage */], __WEBPACK_IMPORTED_MODULE_16__pages_termsandagreement_termsandagreement__["a" /* TermsandagreementPage */], __WEBPACK_IMPORTED_MODULE_17__pages_order_list_order_list__["a" /* OrderListPage */], __WEBPACK_IMPORTED_MODULE_18__pages_cart_cart__["a" /* CartPage */], __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */], __WEBPACK_IMPORTED_MODULE_29__pages_account_account__["a" /* AccountPage */], __WEBPACK_IMPORTED_MODULE_31__pages_farmer_location_farmer_location__["a" /* FarmerLocationPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_shipping_details_shipping_details__["a" /* ShippingDetailsPage */], __WEBPACK_IMPORTED_MODULE_42__pages_shipping_details_update_shipping_details_update__["a" /* ShippingDetailsUpdatePage */], __WEBPACK_IMPORTED_MODULE_43__pages_shipping_details_add_shipping_details_add__["a" /* ShippingDetailsAddPage */], __WEBPACK_IMPORTED_MODULE_44__pages_transact_packed_transact_packed__["a" /* TransactPackedPage */], __WEBPACK_IMPORTED_MODULE_46__pages_transactions_transactions__["a" /* TransactionsPage */], __WEBPACK_IMPORTED_MODULE_51__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_property_service_mock__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_13__providers_broker_service_mock__["a" /* BrokerService */], __WEBPACK_IMPORTED_MODULE_19__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_48__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_49__ionic_native_background_mode__["a" /* BackgroundMode */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_termsandagreement_termsandagreement__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_property_list_property_list__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_broker_list_broker_list__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_order_list_order_list__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_userproduct_userproduct__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_privacy_policy_privacy_policy__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_background_mode__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_transactions_transactions__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_splash_splash__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MyApp = (function () {
    function MyApp(storage, backgroundMode, network, toast, alertCtrl, http, events, platform, statusBar, splashScreen, GlobalvarsProvider) {
        var _this = this;
        this.storage = storage;
        this.backgroundMode = backgroundMode;
        this.network = network;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.counter = 0;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_20__pages_splash_splash__["a" /* SplashPage */];
        this.name = null;
        this.group = null;
        this.timee = Math.random();
        this.backgroundMode.enable();
        this.initializeApp();
        this.farmer = [
            {
                id: 1,
                firstname: "Elton Bagne",
                lastname: "Gwapo",
                middlename: "617-244-3672",
                business_name: "617-244-3672"
            }
        ];
        events.subscribe('user:created', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`4
            _this.farmer = user;
            _this.GlobalvarsProvider.setloggeduser(user);
            if (user.is_farmer == 1) {
                _this.accountMenuItems = [
                    { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */], icon: 'ios-contact' },
                    { title: 'My Products', component: __WEBPACK_IMPORTED_MODULE_12__pages_userproduct_userproduct__["a" /* UserproductPage */], icon: 'archive' },
                    { title: 'Transactions', component: __WEBPACK_IMPORTED_MODULE_19__pages_transactions_transactions__["a" /* TransactionsPage */], icon: 'md-done-all' },
                ];
            }
            else {
                _this.accountMenuItems = [
                    { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */], icon: 'ios-contact' },
                ];
            }
        });
        events.subscribe('isfarm:created', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`4
            _this.GlobalvarsProvider.setloggeduser2(user);
            if (user == 1) {
                _this.accountMenuItems = [
                    { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */], icon: 'ios-contact' },
                    { title: 'My Products', component: __WEBPACK_IMPORTED_MODULE_12__pages_userproduct_userproduct__["a" /* UserproductPage */], icon: 'archive' },
                    { title: 'Transactions', component: __WEBPACK_IMPORTED_MODULE_19__pages_transactions_transactions__["a" /* TransactionsPage */], icon: 'md-done-all' },
                ];
            }
            else {
                _this.accountMenuItems = [
                    { title: 'My Account', component: __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */], icon: 'ios-contact' },
                ];
            }
        });
        events.subscribe('user:pic', function (user, time) {
            _this.timee = Math.random();
        });
        this.appMenuItems = [
            { title: 'Products', component: __WEBPACK_IMPORTED_MODULE_5__pages_property_list_property_list__["a" /* PropertyListPage */], icon: 'home' },
            { title: 'Farmers', component: __WEBPACK_IMPORTED_MODULE_6__pages_broker_list_broker_list__["a" /* BrokerListPage */], icon: 'people' },
            { title: 'Cart', component: __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */], icon: 'md-cart' },
            { title: 'My Orders', component: __WEBPACK_IMPORTED_MODULE_10__pages_order_list_order_list__["a" /* OrderListPage */], icon: 'checkmark-circle' },
        ];
        this.helpMenuItems = [
            { title: 'Terms and Conditions', component: __WEBPACK_IMPORTED_MODULE_4__pages_termsandagreement_termsandagreement__["a" /* TermsandagreementPage */], icon: 'bookmark' },
            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_15__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], icon: 'ios-information-outline' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "middle"
        });
        toast.present();
    };
    MyApp.prototype.displayNetworkUpdate = function (connectionState) {
        var networkType = this.network.type;
        this.toast.create({
            message: "You are now " + connectionState + " via " + networkType,
            duration: 3000
        }).present();
    };
    MyApp.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetworkUpdate(data.type);
        }, function (error) { return console.error(error); });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.GlobalvarsProvider.setcredentials();
        console.log(page.title);
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */]);
    };
    MyApp.prototype.alertConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'are you sure you want to Logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.storage.set('username', null);
                        _this.storage.set('password', null);
                        _this.storage.set('shipaddress', null);
                        _this.storage.set('shipmobile', null);
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_splash_splash__["a" /* SplashPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n        <ion-card-content class="mainfarmer"  *ngIf="farmer.username!=\'guest\'">            \n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ farmer.id }}.jpg?{{timee}}"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/user.jpg\';" />\n            <h2>{{farmer.lastname}}, {{farmer.firstname}} {{farmer.middlename}}</h2>\n            <h3>{{farmer.business_name}}</h3>\n        </ion-card-content>\n        <ion-card-content class="mainfarmer"  *ngIf="farmer.username==\'guest\'">            \n         <img src="assets/img/logo.png"  />\n        </ion-card-content>\n   \n    <ion-list>\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Help\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>\n        Account\n      </ion-list-header>\n      <div *ngIf="farmer.username!=\'guest\'">\n      <button menuClose ion-item *ngFor="let menuItem of accountMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n        {{menuItem.title}}\n      </button>\n      </div>\n      <button menuClose ion-item (click)="alertConfirm()" *ngIf="farmer.username!=\'guest\'">\n        <ion-icon item-left  name="log-out"></ion-icon>\n        Logout\n      </button>\n      <button menuClose ion-item (click)="login()" *ngIf="farmer.username===\'guest\'">\n        <ion-icon item-left  name="log-in"></ion-icon>\n        Login\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_18__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_11__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactPackedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dispatch_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the TransactPackedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransactPackedPage = (function () {
    function TransactPackedPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
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
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/ordersperfarmer/', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                _this.orders = res;
                console.log(res);
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
            _this.presentAlert("No Internet Connection!");
        });
    }
    TransactPackedPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    TransactPackedPage.prototype.ionViewDidLoad = function () {
    };
    TransactPackedPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    TransactPackedPage.prototype.open = function (list) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dispatch_dispatch__["a" /* DispatchPage */], list);
    };
    TransactPackedPage.prototype.dispatch = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Dispatching Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/product/dispatch/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    return TransactPackedPage;
}());
TransactPackedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transact-packed',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\transact-packed\transact-packed.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Packed Transactions</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-tabs>\n  <ion-tab >\n        \n        <ion-list>\n        <ion-item-sliding *ngFor="let list of orders">\n            <div ion-item >\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n                <h3>{{list.farmer_product.product_name}}</h3>\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n                <p>Quantity: {{list.quantity}} </p>\n                <p>Stocks available: {{list.farmer_product.stocks_available}} </p>\n                <p  *ngIf="list.order.mode_of_shipping===0;">For Shipping</p>\n                <p  *ngIf="list.order.mode_of_shipping===1;">For Pick up</p>\n                \n                <div style="text-align: right;">\n\n                Total: P{{list.quantity * list.farmer_product.price_per_unit}}\n\n                </div>\n\n            </div>\n\n             <ion-item-options>\n                <button danger (click)="open(list)" class="green"> View Product </button>\n                <button danger (click)="dispatch(list.id)" class="blue"> Dispatch</button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <!-- <ion-item-sliding>\n            <button ion-item>\n                <h3></h3>\n                <p></p>\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n            </button>\n        </ion-item-sliding> -->\n    </ion-list>\n\n\n  </ion-tab>\n  <ion-tab ></ion-tab>\n  <ion-tab ></ion-tab>\n</ion-tabs>\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\transact-packed\transact-packed.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], TransactPackedPage);

//# sourceMappingURL=transact-packed.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransacPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dispatch_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the TransacPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransacPage = (function () {
    function TransacPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
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
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/ordersperfarmer/', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                _this.orders = res;
                console.log(res);
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        }, function (error) {
            _this.loading.dismissAll();
            _this.presentAlert("No Internet Connection!");
        });
    }
    TransacPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    TransacPage.prototype.ionViewDidLoad = function () {
    };
    TransacPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    TransacPage.prototype.open = function (list) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dispatch_dispatch__["a" /* DispatchPage */], list);
    };
    TransacPage.prototype.dispatch = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Dispatching Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/product/dispatch/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    return TransacPage;
}());
TransacPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-transac',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\transac\transac.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Pending Transactions</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n        <ion-item-sliding *ngFor="let list of orders">\n            <div ion-item >\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 20px" style="float: left;margin-right: 5px;" />\n                <h3>{{list.farmer_product.product_name}}</h3>\n                <p>Price: P{{list.farmer_product.price_per_unit}} </p>\n                <p>Quantity: {{list.quantity}} </p>\n                <p>Stocks available: {{list.farmer_product.stocks_available}} </p>\n                <p  *ngIf="list.order.mode_of_shipping===0;">For Shipping</p>\n                <p  *ngIf="list.order.mode_of_shipping===1;">For Pick up</p>\n                \n                <div style="text-align: right;">\n\n                Total: P{{list.quantity * list.farmer_product.price_per_unit}}\n\n                </div>\n\n            </div>\n\n             <ion-item-options>\n                <button danger (click)="open(list)" class="green"> View Product </button>\n                <button danger (click)="dispatch(list.id)" class="blue"> Dispatch</button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <!-- <ion-item-sliding>\n            <button ion-item>\n                <h3></h3>\n                <p></p>\n            <ion-note item-right>Total: P{{gtotal}}</ion-note>\n            </button>\n        </ion-item-sliding> -->\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\transac\transac.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], TransacPage);

//# sourceMappingURL=transac.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(http, loadingCtrl, GlobalvarsProvider, alertCtrl, navCtrl, navParams) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.email = '';
        this.verify = '';
        this.x = 0;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.sendv = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: '',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("email", this.email);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post('http://api.riceupfarmers.com/api/password/forgot/', body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.message != undefined) {
                _this.presentAlert(data.message);
                _this.x = 1;
            }
            else
                _this.presentAlert(data);
            _this.loading.dismissAll();
        }, function (Error) {
            _this.presentAlert("Email address is not valid!");
            _this.loading.dismissAll();
        });
    };
    ForgotPasswordPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n          <br>\n          <br>\n          <div *ngIf="x==0">\n			<ion-item>\n			     <ion-input type="text" placeholder="Email Address" [(ngModel)]="email"></ion-input>\n			</ion-item>\n\n         	<button ion-button class="submit-btn" block (click)="sendv()">Send verification code.</button>\n          </div>\n\n          <div *ngIf="x==1">\n			<ion-item>\n			     <ion-input type="text" placeholder="Enter Verification Code" [(ngModel)]="verify"></ion-input>\n			</ion-item>\n\n          <button ion-button class="submit-btn" block (click)="calltologin()">Recover Account</button>\n          </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\forgot-password\forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _f || Object])
], ForgotPasswordPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PropertyService = (function () {
    function PropertyService(GlobalvarsProvider, http) {
        var _this = this;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.http = http;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.GlobalvarsProvider.setcredentials();
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/products', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.properties = res;
        });
    }
    PropertyService.prototype.findAll = function () {
        return Promise.resolve(this.properties);
    };
    PropertyService.prototype.findById = function (id) {
        return Promise.resolve(this.properties[id - 1]);
    };
    PropertyService.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.properties.filter(function (property) {
            return (property.product_name + ' ' + property.product_desc).toUpperCase().indexOf(key) > -1;
        }));
    };
    PropertyService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    PropertyService.prototype.favorite = function (property) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, property: property });
        return Promise.resolve();
    };
    PropertyService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    return PropertyService;
}());
PropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], PropertyService);

//# sourceMappingURL=property-service-mock.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrokerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__farmer_location_farmer_location__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrokerDetailPage = (function () {
    function BrokerDetailPage(http, navCtrl, navParams) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timee = Math.random();
        this.timee = Math.random();
        this.farmer = this.navParams.data;
        console.log(this.farmer);
    }
    BrokerDetailPage.prototype.openloc = function (farmer) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__farmer_location_farmer_location__["a" /* FarmerLocationPage */], farmer);
    };
    return BrokerDetailPage;
}());
BrokerDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-broker-detail',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\broker-detail\broker-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Farmer</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="broker">\n\n\n\n    <ion-card>\n\n\n\n        <ion-card-content>\n\n            \n\n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ farmer.id }}.jpg?{{timee}}"  alt="loading..."   onError="this.src=\'http://riceupfarmers.org/wp-content/system/user.jpg\';" />\n\n            <h2>{{farmer.lastname}}, {{farmer.firstname}} {{farmer.middlename}}</h2>\n\n            <h3>{{farmer.business_name}}</h3>\n\n        </ion-card-content>\n\n\n\n        <ion-list>\n\n            \n\n            <a href="tel:{{farmer.first_shipping_detail.mobile_no}}" ion-item *ngIf="farmer.first_shipping_detail!=null">\n\n                <ion-icon name="text" item-left></ion-icon>\n\n                <p>Call/Text</p>\n\n                <h2>{{farmer.first_shipping_detail.mobile_no}}</h2>\n\n            </a>\n\n            <a href="mailto:{{farmer.email}}" ion-item>\n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                <p>Email</p>\n\n                <h2>{{farmer.email}}</h2>\n\n            </a>\n\n            <a href="#" ion-item>\n\n                <ion-icon name="calendar" item-left></ion-icon>\n\n                <p>Years in Business</p>\n\n                <h2>{{farmer.years_in_business}}</h2>\n\n            </a>\n\n            <a href="#" ion-item>\n\n                <ion-icon name="calendar" item-left></ion-icon>\n\n                <p>Years in Farming</p>\n\n                <h2>{{farmer.years_in_farming}}</h2>\n\n            </a>\n\n            <a href="#" ion-item  *ngIf="farmer.first_shipping_detail!=null">\n\n                <ion-icon name="pin" item-left></ion-icon>\n\n                <p>Address</p>\n\n                <h2 style="white-space: normal;">{{farmer.first_shipping_detail.shipping_address}}</h2>\n\n            </a>\n\n\n\n            <button ion-button block (click)="openloc(farmer.first_shipping_detail)"  *ngIf="farmer.first_shipping_detail!=null">View Location</button>\n\n        </ion-list>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\broker-detail\broker-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], BrokerDetailPage);

//# sourceMappingURL=broker-detail.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cartupdate_cartupdate__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipping_shipping__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pickup_pickup__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CartPage = CartPage_1 = (function () {
    function CartPage(platform, statusBar, splashScreen, toast, loadingCtrl, alertCtrl, GlobalvarsProvider, menu, http, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.menu = menu;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.counter = 0;
        this.gtotal = 'No Items';
        this.orderid = undefined;
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
        this.loading = this.loadingCtrl.create({
            content: 'Loading Cart...',
        });
        this.loading.present();
    }
    CartPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    CartPage.prototype.addq = function (pid, q, sa) {
        var _this = this;
        q += 1;
        if (q > 0 && q <= sa) {
            this.loading = this.loadingCtrl.create({
                content: 'Updating quantity...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.patch('http://api.riceupfarmers.com/api/cart/update/' + pid + '?qty=' + q, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.loading.dismissAll();
                _this.navCtrl.setRoot(CartPage_1);
            }, function (Error) {
                _this.loading.dismissAll();
                _this.presentAlert("No Internet Connection!");
            });
        }
        else {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to " + sa);
        }
    };
    CartPage.prototype.subq = function (pid, q, sa) {
        var _this = this;
        q -= 1;
        if (q > 0 && q <= sa) {
            this.loading = this.loadingCtrl.create({
                content: 'Updating quantity...',
            });
            this.loading.present();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            header.append("Authorization", this.GlobalvarsProvider.gettoken());
            var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.patch('http://api.riceupfarmers.com/api/cart/update/' + pid + '?qty=' + q, body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this.loading.dismissAll();
                _this.navCtrl.setRoot(CartPage_1);
            }, function (Error) {
                _this.loading.dismissAll();
                _this.presentAlert("No Internet Connection!");
            });
        }
        else {
            this.presentAlert("Quantity must be greater than 0 and less than or equal to " + sa);
        }
    };
    CartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("passforpost", 'any');
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post('http://api.riceupfarmers.com/api/order/new', body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.order_number[0] == undefined) {
                _this.loading.dismissAll();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            }
            else {
                var g = res.order_number[0].id;
                _this.orderid = g;
                _this.http.get('http://api.riceupfarmers.com/api/order/' + g, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (rese) {
                    _this.orders = rese.product_order;
                    if (_this.orders != undefined) {
                        console.log(rese);
                        _this.rese = rese;
                        _this.ord = rese.id;
                        _this.gtotal = _this.gettotal(_this.orders);
                        if (_this.gtotal != 0)
                            _this.gtotal = "P" + _this.gtotal;
                        else
                            _this.gtotal = 'No Items';
                    }
                    else
                        _this.presentAlert("No items in cart!");
                    _this.loading.dismissAll();
                }, function (error) {
                    console.log(error);
                    _this.loading.dismissAll();
                    _this.presentAlert("No Internet Connection!");
                });
            }
        }, function (error) {
            _this.loading.dismissAll();
            _this.presentAlert("No Internet Connection!");
        });
    };
    CartPage.prototype.updatecart = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cartupdate_cartupdate__["a" /* CartupdatePage */], property);
    };
    CartPage.prototype.gettotal = function (gett) {
        var total = 0;
        for (var i = 0; i < gett.length; i++) {
            total += (gett[i].farmer_product.price_per_unit * gett[i].quantity);
        }
        return total;
    };
    CartPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CartPage.prototype.delcart = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to remove the item in the cart?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.http.delete('http://api.riceupfarmers.com/api/cart/remove/' + ids, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    CartPage.prototype.checkthisout = function () {
        var _this = this;
        if (this.gtotal != 'No Items') {
            var alert_1 = this.alertCtrl.create({
                title: 'Confirm Checkout',
                message: "Are you sure you want to checkout the items in the cart?",
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: function () {
                            var urlSearchParams = new URLSearchParams();
                            urlSearchParams.append("passforpost", 'any');
                            var body = urlSearchParams.toString();
                            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            header.append("Accept", "application/json");
                            header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                            var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                            _this.http.patch('http://api.riceupfarmers.com/api/order/checkout/' + _this.orderid + '?shipping_mode=0&order_status=1&remarks=', body, option)
                                .map(function (response) { return response.json(); })
                                .subscribe(function (res) {
                                // this.alertConfirm2(res.message);
                                _this.alertConfirm2(res.message);
                            }, function (Error) {
                                _this.presentAlert("Something went wrong!");
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.presentAlert("No items in cart!");
        }
    };
    CartPage.prototype.codorship = function () {
        var _this = this;
        if (this.gtotal != 'No Items') {
            var prompt_1 = this.alertCtrl.create({
                title: 'Select',
                message: 'Type of acquiring the product',
                inputs: [
                    {
                        type: 'radio',
                        label: 'Pick up',
                        value: 'pick'
                    },
                    {
                        type: 'radio',
                        label: 'Delivery',
                        value: 'ship'
                    }
                ],
                buttons: [
                    {
                        text: "Cancel",
                        handler: function (data) {
                        }
                    },
                    {
                        text: "Ok",
                        handler: function (data) {
                            if (data == 'pick') {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pickup_pickup__["a" /* PickupPage */], _this.rese);
                            }
                            if (data == 'ship') {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__shipping_shipping__["a" /* ShippingPage */], _this.rese);
                            }
                        }
                    }
                ]
            });
            prompt_1.present();
        }
        else {
            this.presentAlert("Cart is Empty");
        }
    };
    CartPage.prototype.alertConfirm2 = function (var2) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Checkout',
            message: var2,
            buttons: [
                {
                    text: 'Dismiss',
                    handler: function () {
                        _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                    }
                }
            ]
        });
        alert.present();
    };
    return CartPage;
}());
CartPage = CartPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\cart\cart.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Cart</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n        <ion-item-sliding *ngFor="let list of orders">\n            <div ion-item>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ list.farmer_product.photo_url }}.jpg"  onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" style="width: 30px" style="float: left;margin-right: 5px;" />\n                <h3>{{list.farmer_product.product_name}}</h3>\n                <p>P{{list.farmer_product.price_per_unit}} </p>\n                \n                <div style="text-align: right;">\n                <button ion-button style="width: 40px; height: 40px" (click)="subq(list.id,list.quantity,list.farmer_product.stocks_available)">\n                <ion-icon name="md-remove"></ion-icon></button>\n\n                {{list.quantity}}\n\n                <button ion-button style="width: 40px; height: 40px" (click)="addq(list.id,list.quantity,list.farmer_product.stocks_available)">\n                <ion-icon name="md-add"></ion-icon></button>\n                </div>\n\n            </div>\n            <ion-item-options>\n                <button danger (click)="updatecart(list)" class="green">View</button>\n                <button danger (click)="delcart(list.id)" class="red">Remove</button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <button ion-item>\n                <h3></h3>\n                <p></p>\n            <ion-note item-right>{{gtotal}}</ion-note>\n            </button>\n        </ion-item-sliding>\n    </ion-list>\n\n        <button ion-button class="submit-btn" block  (click)="codorship()"><ion-icon name="lock"></ion-icon> &nbsp;&nbsp;Place order</button>\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment>\n        <p><b>Note:</b> Options will appear when you swipe left on the product.</p>\n    </ion-segment>\n</ion-footer>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], CartPage);

var CartPage_1;
//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserproductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addproduct_addproduct__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__updateproduct_updateproduct__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the UserproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserproductPage = (function () {
    function UserproductPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, config) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.config = config;
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
        this.timee = Date.now();
        this.pushPage = __WEBPACK_IMPORTED_MODULE_4__addproduct_addproduct__["a" /* AddproductPage */];
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.GlobalvarsProvider.setcredentials();
        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/products/' + this.GlobalvarsProvider.loggeduser.id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.message == undefined) {
                _this.products = res;
            }
            else {
                _this.presentAlert(res.message);
            }
            _this.loading.dismissAll();
        });
    }
    UserproductPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    UserproductPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__updateproduct_updateproduct__["a" /* UpdateproductPage */], property);
    };
    UserproductPage.prototype.delprod = function (ids) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Remove',
            message: 'Are you sure you want to remove your Product?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                        var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.http.delete('http://api.riceupfarmers.com/api/product/remove/' + ids, option)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.presentAlert('Product Deleted!');
                            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    UserproductPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return UserproductPage;
}());
UserproductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-userproduct',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\userproduct\userproduct.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>My Products</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="property-list">\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let property of products">\n            <button ion-item (click)="openPropertyDetail(property)">\n                <ion-thumbnail item-left>\n                   <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ property.photo_url }}.jpg?{{timee}}" alt="loading..."   onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" />\n                </ion-thumbnail>\n                <h2>{{property.product_name}}</h2>\n                <p>{{property.product_desc }}</p>\n            </button>\n             <ion-item-options>\n                <button danger (click)="openPropertyDetail(property)" class="green"> Update </button>\n                <button danger (click)="delprod(property.id)" class="red">Remove</button>\n            </ion-item-options>\n        </ion-item-sliding>\n        <ion-item-sliding>\n            <button ion-item >\n                <ion-thumbnail item-left>\n                </ion-thumbnail>\n                <h2></h2>\n                <p></p>\n            </button>\n        </ion-item-sliding>\n        \n    </ion-list>\n     <ion-fab>\n        <button ion-fab  [navPush]="pushPage" clase="button-f"><ion-icon name="md-add"></ion-icon></button>\n     </ion-fab>\n</ion-content>\n\n\n<ion-footer padding>\n    <ion-segment>\n        <p><b>Note:</b> Options will appear when you swipe left on the product.</p>\n    </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\userproduct\userproduct.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], UserproductPage);

//# sourceMappingURL=userproduct.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profpic_profpic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__changepass_changepass__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__updateaccount_updateaccount__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountPage = (function () {
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
        this.user.address = this.GlobalvarsProvider.activeaddressaddress;
        this.user.mobile_no = this.GlobalvarsProvider.activeaddressmobile;
        this.timee = Math.random();
        this.isfarmer = this.user.is_farmer;
        console.log(this.user);
    }
    AccountPage.prototype.onSelectChange = function (selectedValue, id) {
        if (this.GlobalvarsProvider.username == 'guest') {
            this.presentAlert("Account Setting function is disabled for the guest account");
        }
        else {
            if (selectedValue == 'a1') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__updateaccount_updateaccount__["a" /* UpdateaccountPage */]);
            }
            if (selectedValue == 'a2') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profpic_profpic__["a" /* ProfpicPage */]);
            }
            if (selectedValue == 'a3') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__changepass_changepass__["a" /* ChangepassPage */]);
            }
        }
    };
    AccountPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
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
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.layerGroup([]);
        var marker = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.marker([this.user.address_lat, this.user.address_long]).on('click', function (event) { return console.log("map marker"); });
        this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
    };
    AccountPage.prototype.showMap = function () {
        var _this = this;
        this.map = null;
        if (this.isfarmer == 1) {
            setTimeout(function () {
                _this.map = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.map("map").setView([_this.user.address_lat, _this.user.address_long], 10);
                __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                    attribution: '&copy; techventures.ph'
                }).addTo(_this.map);
                _this.showMarkers();
                _this.map.locate({ setView: false, maxZoom: 10 });
                _this.map.on('locationfound', function (e) {
                    var radius = e.accuracy / 2;
                    var popup = __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.popup();
                    popup
                        .setLatLng(e.latlng)
                        .setContent("You are currently here!")
                        .openOn(_this.map);
                    __WEBPACK_IMPORTED_MODULE_6_leaflet___default.a.circle(e.latlng, radius).addTo(_this.map);
                });
            });
        }
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\account\account.html"*/'<ion-header>\n\n    <ion-navbar>\n        \n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>My Account</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="broker">\n    <ion-fab right edge style="top:0">\n    <button ion-fab mini  style="background-color: #f4f4f4;color:#212121;"><ion-icon name="md-settings" >\n    </ion-icon>\n                    \n    </button>\n                    <ion-select  [(ngModel)]="option" (ionChange)="onSelectChange($event)" style="width: 0 !important">\n                      <ion-option value="a1">Update Account</ion-option>\n                      <ion-option value="a2">Change Picture</ion-option>\n                      <ion-option value="a3">Change Password</ion-option>   \n                    </ion-select>\n  </ion-fab>\n    <ion-card  *ngIf="viewMode2===\'list\'">\n\n        <ion-card-content>\n            \n         <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ user.id }}.jpg?{{timee}}" alt="loading..."  onError="this.src=\'http://riceupfarmers.org/wp-content/system/user.jpg\';" />\n\n            <h2>{{user.lastname}}, {{user.firstname}} {{user.middlename}}<br>({{user.username}})</h2>\n            <h3>{{user.business_name}}</h3>\n        </ion-card-content>\n\n        <ion-list>\n            <a href="tel:{{user.mobile_number}}" ion-item>\n                <ion-icon name="text" item-left></ion-icon>\n                <p>Call/Text</p>\n                <h2>{{user.mobile_no}}</h2>\n            </a>\n            <a href="mailto:{{user.email_address}}" ion-item>\n                <ion-icon name="mail" item-left></ion-icon>\n                <p>Email</p>\n                <h2>{{user.email}}</h2>\n            </a>\n            <a href="#" ion-item>\n                <ion-icon name="pin" item-left></ion-icon>\n                <p>Address</p>\n                <h2>{{user.address}}</h2>\n            </a>\n        </ion-list>\n    </ion-card>\n\n    <div  *ngIf="viewMode2===\'map\'">\n            <div *ngIf="isfarmer===0" style="margin-top: 20px;margin-left: 10px;">\n                        Your farmer Info is not available.\n            </div>\n\n            <div  *ngIf="isfarmer===1">\n                <div style="width:100%;height:300px;" id="map"></div>\n\n            <a href="#" ion-item>\n                <p>Business Name:</p>\n                <h2>{{user.business_name}}</h2>\n            </a>\n            <a href="#" ion-item>\n                <p>Years in Business:</p>\n                <h2>{{user.years_in_business}}</h2>\n            </a>\n            <a href="#" ion-item>\n                <p>Years in Farming:</p>\n                <h2>{{user.years_in_farming}}</h2>\n            </a>\n            </div>\n    </div>\n\n</ion-content>\n\n<ion-footer padding>\n    <ion-segment [(ngModel)]="viewMode2">\n        <ion-segment-button value="list">\n            General Info\n        </ion-segment-button>\n        <ion-segment-button value="map" (click)="showMap()">\n            Farmer Info\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PropertyListPage = (function () {
    function PropertyListPage(platform, statusBar, splashScreen, toast, alertCtrl, loadingCtrl, GlobalvarsProvider, navParams, http, menu, navCtrl, service, config) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navParams = navParams;
        this.http = http;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.now = new Date;
        this.counter = 0;
        this.searchKey = "";
        this.viewMode = "list";
        this.today = this.now.toISOString();
        this.loading = this.loadingCtrl.create({
            content: 'Loading Product...',
        });
        this.loading.present();
        this.timee = Date.now();
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/products', option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res);
            _this.loading.dismissAll();
            if ('2018-11-03' < _this.today) {
                if (res.message == undefined) {
                    _this.properties = res;
                }
                else {
                    _this.presentAlert(res.message);
                }
            }
        }, function (error) {
            _this.presentAlert("Slow internet Connection!");
            _this.loading.dismissAll();
        });
        this.findAll();
        this.menu.enable(true);
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
    PropertyListPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: "Press again to exit",
            duration: 3000,
            position: "bottom"
        });
        toast.present();
    };
    PropertyListPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PropertyListPage.prototype.openPropertyDetail = function (property) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__property_detail_property_detail__["a" /* PropertyDetailPage */], property);
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
    PropertyListPage.prototype.cheapest = function () {
        this.properties = this.properties.sort(function (a, b) { return (a.price_per_unit > b.price_per_unit) ? 1 : -1; });
    };
    PropertyListPage.prototype.newest = function () {
        this.properties = this.properties.sort(function (a, b) { return (a.created_at < b.created_at) ? 1 : -1; });
    };
    PropertyListPage.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    return PropertyListPage;
}());
PropertyListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-property-list',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\property-list\property-list.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="property-list">\n    <ion-list>\n            <ion-item>\n            <button ion-button block item-left (click)="cheapest()" style="width: 45%;">\n                Cheapest\n              </button>\n                        <button ion-button block item-right (click)="newest()" style="width: 90%;">\n                Newest\n              </button>\n            </ion-item>\n        <ion-item-sliding *ngFor="let property of properties" >\n            <button ion-item (click)="openPropertyDetail(property)">\n                <ion-thumbnail item-left>\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ property.photo_url }}.jpg?{{timee}}" alt="loading..."   onError="this.src=\'http://riceupfarmers.org/wp-content/system/sproduct.jpg\';" />\n                </ion-thumbnail>\n                <h2>{{property.product_name}}</h2>\n                <p>{{property.product_desc }}</p>\n            </button>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\property-list\property-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_property_service_mock__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */]])
], PropertyListPage);

//# sourceMappingURL=property-list.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions_transactions__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the DispatchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DispatchPage = (function () {
    function DispatchPage(alertCtrl, http, loadingCtrl, GlobalvarsProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.GlobalvarsProvider = GlobalvarsProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timee = Math.random();
        this.dis = this.navParams.data;
        this.shipadd = 'forpickup';
        this.contact = 'forpickup';
        console.log(this.dis);
        if (this.dis.order.mode_of_shipping == 1) {
            this.shipadd = this.dis.order.shipping_detail.shipping_address;
            this.contact = this.dis.order.shipping_detail.mobile_no;
        }
    }
    DispatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DispatchPage');
    };
    DispatchPage.prototype.dispatch = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Dispatching Product...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/product/dispatch/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__transactions_transactions__["a" /* TransactionsPage */]);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    DispatchPage.prototype.pack = function (id) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Changing Status...',
        });
        this.loading.present();
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.GlobalvarsProvider.grant_type);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Authorization", this.GlobalvarsProvider.gettoken());
        var option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.patch('http://api.riceupfarmers.com/api/product/dispatch/' + id, body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            if (data.message != undefined) {
                _this.presentAlert(data.message);
            }
            else {
                _this.presentAlert("Something went wrong!");
            }
            _this.loading.dismissAll();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__transactions_transactions__["a" /* TransactionsPage */]);
        }, function (Error) {
            _this.presentAlert("No Internet Connection!");
            _this.loading.dismissAll();
        });
    };
    DispatchPage.prototype.presentAlert = function (val) {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: val,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    return DispatchPage;
}());
DispatchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-dispatch',template:/*ion-inline-start:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\dispatch\dispatch.html"*/'<!--\n\n  Generated template for the DispatchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ordered Product</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<ion-list>\n\n\n\n        <ion-item-sliding>\n\n            <button ion-item>\n\n                <ion-thumbnail item-left>\n\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/s{{ dis.farmer_product.photo_url }}.jpg?{{timee}}" alt="loading..."   onError="this.src=\'http://riceupfarmers.org/wp-content/system/product.jpg\';" />\n\n                </ion-thumbnail>\n\n                <h2>{{dis.farmer_product.product_name}}</h2>\n\n                <p text-wrap>{{dis.farmer_product.product_desc}}</p>\n\n            </button>\n\n        </ion-item-sliding>\n\n\n\n            <ion-item>\n\n                <ion-icon item-left name="ios-archive"></ion-icon>\n\n                <h3>Stocks</h3>\n\n                <ion-note item-right>{{dis.farmer_product.stocks_available}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="ios-clipboard"></ion-icon>\n\n                <h3>Unit Type</h3>\n\n                <ion-note item-right>{{dis.farmer_product.unit_type}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="pricetag"></ion-icon>\n\n                <h3>Price Per Unit</h3>\n\n                <ion-note item-right>{{dis.farmer_product.price_per_unit}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="md-calendar"></ion-icon>\n\n                <h3>Date of Harvest</h3>\n\n                <ion-note item-right>{{dis.farmer_product.date_of_harvest}}</ion-note>\n\n            </ion-item>\n\n\n\n    </ion-list>\n\n    <ion-card>\n\n    	<ion-item-sliding>\n\n            <button ion-item>\n\n                <ion-thumbnail item-left>\n\n                    <img src="http://riceupfarmers.org/wp-content/system/uploads/{{ dis.order.user.id }}.jpg?{{timee}}" alt="loading..."  onError="this.src=\'http://riceupfarmers.org/wp-content/system/user.jpg\';"  />\n\n                </ion-thumbnail>\n\n                <h2 text-wrap>Ordered By: <b>{{dis.order.user.firstname}} {{dis.order.user.middlename}} {{dis.order.user.lastname}}</b></h2>\n\n            </button>\n\n        </ion-item-sliding>\n\n                <p>&nbsp;&nbsp;Order #: {{dis.order.order_number}}</p>\n\n                <p>&nbsp;&nbsp;Price: P{{dis.farmer_product.price_per_unit}} </p>\n\n                <p>&nbsp;&nbsp;Quantity: {{dis.quantity}} </p>\n\n                <p>&nbsp;&nbsp;Stocks available: {{dis.farmer_product.stocks_available}} </p>\n\n    	<h3 *ngIf="dis.order.mode_of_shipping===0;" >&nbsp;&nbsp;<b>For Pick up</b></h3>\n\n        <h3 *ngIf="dis.order.mode_of_shipping===1;">&nbsp;&nbsp;<b>For Shipping</b></h3>\n\n            <div *ngIf="dis.order.mode_of_shipping===1;">\n\n                <p>&nbsp;&nbsp;Address: {{dis.order.shipping_detail.shipping_address}}</p>\n\n                <p>&nbsp;&nbsp;Contact #: {{dis.order.shipping_detail.mobile_no}}</p>\n\n            </div>\n\n        <div style="text-align: right;">\n\n\n\n                Total: P{{dis.quantity * dis.farmer_product.price_per_unit}}&nbsp;&nbsp;\n\n\n\n                </div><br>\n\n    </ion-card>\n\n\n\n        <button ion-button class="submit-btn" block  (click)="pack(dis.id)"  *ngIf="dis.current_status.product_status===0">Pack</button>\n\n        <button ion-button class="submit-btn" block  (click)="dispatch(dis.id)"  *ngIf="dis.current_status.product_status===1">Dispatch</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nvidia 720\Desktop\projects\riceup\src\pages\dispatch\dispatch.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_globalvars_globalvars__["a" /* GlobalvarsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], DispatchPage);

//# sourceMappingURL=dispatch.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalvarsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalvarsProvider = (function () {
    function GlobalvarsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.grant_type = 'password';
        this.client_id = '2';
        this.client_secret = 'uzyd8xUn9UeaQaMB8hfghABzvAFJZE8Djc4JcJlu';
        this.username = null;
        this.password = null;
        this.scope = '';
    }
    GlobalvarsProvider.prototype.getgid = function () {
        return this.globalid;
    };
    GlobalvarsProvider.prototype.setloggeduser = function (user) {
        this.loggeduser = user;
    };
    GlobalvarsProvider.prototype.setloggeduser2 = function (user) {
        this.loggeduser.is_farmer = user;
    };
    GlobalvarsProvider.prototype.setgid = function (gid) {
        this.globalid = gid;
    };
    GlobalvarsProvider.prototype.gettoken = function () {
        return this.token;
    };
    GlobalvarsProvider.prototype.settoken = function (token) {
        this.token = token;
    };
    GlobalvarsProvider.prototype.setcredentials = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.grant_type);
        urlSearchParams.append("client_id", this.client_id);
        urlSearchParams.append("client_secret", this.client_secret);
        urlSearchParams.append("username", this.username);
        urlSearchParams.append("password", this.password);
        urlSearchParams.append("scope", this.scope);
        var body = urlSearchParams.toString();
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Accept", "application/json");
        var option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.post('http://api.riceupfarmers.com/oauth/token', body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.settoken(data.token_type + " " + data.access_token);
        }, function (error) {
            alert(error);
        });
    };
    return GlobalvarsProvider;
}());
GlobalvarsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], GlobalvarsProvider);

//# sourceMappingURL=globalvars.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map