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
import { FormBuilder } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
/**
 * Generated class for the AddproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddproductPage = /** @class */ (function () {
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
        }, function (err) {
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
            var timeInMs = Date.now();
            alert(timeInMs);
            var url = 'http://i-tugue.com/system/apiup.php?get=' + this.form.value.name.pname + timeInMs;
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
                var body = urlSearchParams.toString();
                var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                header.append("Authorization", _this.GlobalvarsProvider.gettoken());
                var option = new RequestOptions({ headers: header });
                _this.http.post('http://api.riceupfarmers.org/api/product/add?photo_url=' + _this.form.value.name.pname + timeInMs + '&name=' + _this.form.value.name.pname + '&desc=' + _this.form.value.name.desc + '&unit=' + _this.form.value.name.unit + '&price=' + _this.form.value.name.price + '&stocks=' + _this.form.value.name.stocks + '&harvest_date=' + _this.form.value.name.harvest_date, urlSearchParams, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (data) {
                    alert(data);
                });
                //end
                _this.form.reset();
            }, function (err) {
                _this.loading.dismissAll();
                _this.presentToast('Error while uploading file.');
            });
            this.lastImage = null;
        }
        else {
            alert("Fill all the required Fields!");
        }
    };
    AddproductPage = __decorate([
        Component({
            selector: 'page-addproduct',
            templateUrl: 'addproduct.html',
        }),
        __metadata("design:paramtypes", [GlobalvarsProvider, Http, AlertController, FormBuilder, NavController, Camera, Transfer, File, FilePath, ActionSheetController, ToastController, Platform, LoadingController])
    ], AddproductPage);
    return AddproductPage;
}());
export { AddproductPage };
//# sourceMappingURL=addproduct.js.map