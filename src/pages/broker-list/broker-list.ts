import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';
import {BrokerDetailPage} from '../broker-detail/broker-detail';

import leaflet from 'leaflet';
import {Http } from '@angular/http';
@Component({
    selector: 'page-broker-list',
    templateUrl: 'broker-list.html'
})
export class BrokerListPage {

    farmers: Array<any>;
    viewMode: string = "list";
    map;
    markersGroup;
    constructor(public navCtrl: NavController, public service: BrokerService,private http: Http) {
    	this.http.get('http://127.0.0.1:8000/api/users/farmer')
          .map(response => response.json())
          .subscribe(res => this.farmers = res);
    }

    openBrokerDetail(farmer: any) {
        this.navCtrl.push(BrokerDetailPage, farmer);
    }

    showMap() {
        if (this.map==null) {
           setTimeout(() => {
            this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();

        })
        }
        this.map=null;
        
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
