import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import leaflet from 'leaflet';
import {Http } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})

export class BrokerListPage {

    farmers: Array<any>;
    viewMode: string = "list";
    map;
    markersGroup;
    constructor(public GlobalvarsProvider:GlobalvarsProvider,public navCtrl: NavController, public service: BrokerService,private http: Http) {
        this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              console.log(this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/users/farmer',option)
          .map(response => response.json())
          .subscribe(res => {
              this.farmers = res;
              console.log(res);
          });

    }

    openBrokerDetail(farmer: any) {
        this.navCtrl.push(BrokerDetailPage, farmer);
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
                let marker: any = leaflet.marker([property.address_lat, property.address_long]).on('click', event => this.openBrokerDetail(event.target.data));
                marker.data = property;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }
}
