import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfpicPage} from '../profpic/profpic';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import {ChangepassPage} from '../changepass/changepass';
import {UpdateaccountPage} from '../updateaccount/updateaccount';
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
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
	user: any;
	option: any = '';
    viewMode: string = "map";
    viewMode2: string = "list";
    isfarmer:any;
    map;
    markersGroup;
    timee=Math.random();
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public GlobalvarsProvider:GlobalvarsProvider,) {
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
