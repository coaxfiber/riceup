import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfpicPage} from '../profpic/profpic';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {ChangepassPage} from '../changepass/changepass';
import {UpdateaccountPage} from '../updateaccount/updateaccount';
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';


import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';
/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
    public counter=0;
	user: any;
	option: any = '';
    viewMode: string = "map";
    viewMode2: string = "list";
    isfarmer:any;
    map;
    markersGroup;
    timee=Math.random();
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public GlobalvarsProvider:GlobalvarsProvider,public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController) {
  	platform.ready().then(() => {
          statusBar.styleDefault();
          splashScreen.hide();
     
          platform.registerBackButtonAction(() => {
            if (this.counter == 0) {
              this.counter++;
              this.presentToast();
              setTimeout(() => { this.counter = 0 }, 3000)
            } else {
              // console.log("exitapp");
              platform.exitApp();
            }
          }, 0)
        });
    this.user = this.GlobalvarsProvider.loggeduser;
    this.timee=Math.random();
    this.isfarmer = this.user.is_farmer;
    console.log(this.user);
  }
 onSelectChange(selectedValue: any,id:any) {
    if (selectedValue == 'a1') {
        this.navCtrl.push(UpdateaccountPage);
    }if (selectedValue == 'a2') {
        this.navCtrl.push(ProfpicPage);
    }if (selectedValue == 'a3') {
        this.navCtrl.push(ChangepassPage);
    }
  } 

 presentToast() {
    let toast = this.toast.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }
  showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
                let marker: any = leaflet.marker([this.user.address_lat, this.user.address_long]).on('click', event => console.log("map marker"));
                this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
    }
    
    showMap() {
      this.map = null;
      if (this.isfarmer==1) {
                    setTimeout(() => {
                         this.map = leaflet.map("map").setView([this.user.address_lat, this.user.address_long], 10);
                          leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                                     attribution: '&copy; techventures.ph'
                                 }).addTo(this.map);
                                 this.showMarkers();
                         this.map.locate({setView: false, maxZoom: 10});
                            this.map.on('locationfound', e => {
                            var radius = e.accuracy / 2;
                            var popup = leaflet.popup();
                            popup
                          .setLatLng(e.latlng)
                          .setContent("You are currently here!")
                          .openOn(this.map); 
                        leaflet.circle(e.latlng, radius).addTo(this.map);
                       });
                     })
            }
        }
}
