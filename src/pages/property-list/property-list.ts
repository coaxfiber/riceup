import {Component} from '@angular/core';
import {Config, NavController, NavParams} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import { Events } from 'ionic-angular';
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
    constructor(public events: Events,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController, public service: PropertyService, public config: Config) {
      
        this.http.get('http://localhost/riceup/riceupapi.php?action=getproall')
          .map(response => response.json())
          .subscribe(res => this.properties = res);
        this.findAll();
        this.menu.enable(true);
        console.log(this.GlobalvarsProvider.getgid()+"this");

this.createUser(this.GlobalvarsProvider.getgid());
       
    }
    createUser(user) {
      console.log('User created!')
      this.events.publish('user:created', user, Date.now());
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
