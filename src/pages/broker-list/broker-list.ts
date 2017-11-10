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

    brokers: Array<any>;
    viewMode: string = "list";
    map;
    markersGroup;
    constructor(public navCtrl: NavController, public service: BrokerService,private http: Http) {
    	this.http.get('http://localhost/riceup/riceupapi.php?action=getall')
          .map(response => response.json())
          .subscribe(res => this.brokers = res);
    }

    openBrokerDetail(broker: any) {
        console.log(broker);
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.brokers.forEach(property => {
            if (property.loclat, property.loclng) {
                let marker: any = leaflet.marker([property.loclat, property.loclng]).on('click', event => this.openBrokerDetail(event.target.data));
                marker.data = property;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }
}
