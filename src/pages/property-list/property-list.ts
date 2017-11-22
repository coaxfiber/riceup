import {Component} from '@angular/core';
import {Config, NavController, NavParams} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, Response,RequestOptions} from '@angular/http';
@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {

    properties: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;
    constructor(public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController, public service: PropertyService, public config: Config) {
   
         var header = new Headers();
               header.append("Authorization", this.GlobalvarsProvider.gettoken());
                header.append("Content-Type", "application/x-www-form-urlencoded");
                header.append("Accept", "application/json");

        let option = new RequestOptions({ headers: header });
        this.http.get('http://riceupfarmers.org/api/products',option)
          .map(response => response.json())
          .subscribe(res => {
              this.properties = res;
              console.log(res);
          });
          
        this.findAll();
        this.menu.enable(true);       
    }
    
    openPropertyDetail(property: any) {
        this.navCtrl.push(PropertyDetailPage, property);
    }

    onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.properties = data;
              })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => this.properties = data)
            .catch(error => alert(error));
    }

    


}
