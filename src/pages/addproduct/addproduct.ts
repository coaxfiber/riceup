import {Component} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import {Http, Headers,RequestOptions} from '@angular/http';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {UserproductPage} from '../userproduct/userproduct';
declare var cordova: any;

/**
 * Generated class for the AddproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {

  form: FormGroup;
  map2;
  lastImage: string = null;
  loading: Loading;
  long:string = '';
  lat:string = '';
  username:string = '';
  buttonDisabled = true;
  userData: any;
  datenow = Date.now();
  constructor(public GlobalvarsProvider:GlobalvarsProvider,private http: Http,private alertCtrl: AlertController,fb: FormBuilder,public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
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
		testform()
		{
		  
		    this.uploadImage();

		}


 public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });
}

private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
 
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}
public uploadImage() {
  //wwew start

  if (this.form.value.name.pname!=""&&this.form.value.name.desc!=""&&this.form.value.name.unit!=""&&this.form.value.name.price!=""&&this.form.value.name.stocks!=""&&this.form.value.name.harvest_date!="") {
  // Destination URL
  if (this.lastImage==null) {
     this.presentAlert("Image selection is required!");
  }else{
     var timeInMs = Date.now();
     var url = 'http://riceupfarmers.org/wp-content/system/apiup.php?get='+this.form.value.name.pname+timeInMs;
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
        params : {'fileName': filename}
      };
     
      const fileTransfer: TransferObject = this.transfer.create();
     
      this.loading = this.loadingCtrl.create({
        content: 'Adding your Product...',
      });
      this.loading.present();
     
      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {
        this.loading.dismissAll();
        this.presentToast('product Added...');
        //start
                 let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
                  let body = urlSearchParams.toString()
                   var header = new Headers();
                      header.append("Accept", "application/json");
                      header.append("Content-Type", "application/x-www-form-urlencoded");
                      header.append("Authorization",this.GlobalvarsProvider.gettoken());
                            
                      let option = new RequestOptions({ headers: header });
                                  
                         this.http.post('http://api.riceupfarmers.org/api/product/add?photo_url='+this.form.value.name.pname+timeInMs+'&name='+this.form.value.name.pname+'&desc='+this.form.value.name.desc+'&unit='+this.form.value.name.unit+'&price='+this.form.value.name.price+'&stocks='+this.form.value.name.stocks+'&harvest_date='+this.form.value.name.harvest_date, body,option)
                         .map(response => response.json())
                        .subscribe(data => {
                          this.presentAlert(data.message);
                          this.navCtrl.setRoot(UserproductPage);
                       });
         //end
        this.form.reset();

      }, err => {
        this.loading.dismissAll()
        this.presentToast('Error while uploading file.');
      });
      this.lastImage=null;
    }
  }
  else
  {
    this.presentAlert("Fill all the required Fields!");
  }
}

 presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
    }

}
