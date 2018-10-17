import {Component} from '@angular/core';
import {NavController,LoadingController, Loading } from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {ProuductDetailPage} from '../prouduct-detail/prouduct-detail';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import leaflet from 'leaflet';
import {Http } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AlertController } from 'ionic-angular';

import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import { ToastController } from 'ionic-angular';


@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})

export class BrokerListPage {
  public counter=0;
      loading: Loading;
    farmers: Array<any>;
    viewMode: string = "list";
    map;
    markersGroup;
    constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen,private toast: ToastController,private alertCtrl: AlertController, public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider,public navCtrl: NavController, public service: BrokerService,private http: Http) {
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
      this.loading = this.loadingCtrl.create({
        content: 'Loading farmers...',
      });
      this.loading.present();
        this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/users/farmer',option)
          .map(response => response.json())
          .subscribe(res => {
              this.farmers = res;
              this.loading.dismissAll();
          }, error => {
                         this.presentAlert("Slow internet Connection!");
                         this.loading.dismissAll();
                         });

    }
    
 presentToast() {
    let toast = this.toast.create({
      message: "Press again to exit",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }
     presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
          }
    openBrokerDetail(farmer: any) {
        this.navCtrl.push(BrokerDetailPage, farmer);
    }openBrokerDetail2(farmer: any) {
        this.navCtrl.push(ProuductDetailPage, farmer);
    }

    showMap() {
                setTimeout(() => {

                     this.map = leaflet.map("map").setView([17.622021, 121.727625], 12);

                      leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                                 attribution: '&copy; techventures.ph'
                             }).addTo(this.map);
                             this.showMarkers();
                        
                     this.map.locate({setView: false, maxZoom: 12});
                        this.map.on('locationfound', e => {
                        var radius = e.accuracy / 2;
                        var popup = leaflet.popup();
                        popup
                      .setLatLng(e.latlng)
                      .setContent("You are currently here!")
                      .openOn(this.map); 
                    
                    leaflet.circle(e.latlng, radius).addTo(this.map);

                     
                   });

                    function onLocationError(e) {
                        alert("Turn on your service location to see your current location!");
                         this.viewMode = "list";
                        }
                     this.map.on('locationerror', onLocationError);
                                
                 })
        
        
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.farmers.forEach(property => {
            if (property.address_lat, property.address_long) {
                let marker: any = leaflet.marker([property.address_lat, property.address_long]).on('click', event => this.openBrokerDetail2(event.target.data));
                marker.data = property;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
