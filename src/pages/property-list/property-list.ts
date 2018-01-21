import {Component} from '@angular/core';
import {Config, NavController, NavParams,LoadingController, Loading } from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';
@Component({
    selector: 'page-property-list',
    templateUrl: 'property-list.html'
})
export class PropertyListPage {

      loading: Loading;
    properties: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;timee:any;
    constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController, public service: PropertyService, public config: Config) {
       this.loading = this.loadingCtrl.create({
        content: 'Loading Product...',
      });
      this.loading.present();this.timee = Date.now();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/products',option)
          .map(response => response.json())
          .subscribe(res => {
              this.loading.dismissAll();
              console.log(res);
            if (res.message==undefined) {
               this.properties = res;
            }else
            {
              this.presentAlert(res.message);
            }
          }, error => {
                         this.presentAlert("Slow internet Connection!");
                         this.loading.dismissAll();
                         });
          
        this.findAll();
        this.menu.enable(true);       
    }
     presentAlert(val:any) {
            let alert = this.alertCtrl.create({
              title: 'Alert',
              subTitle: val,
              buttons: ['Dismiss']
            });
            alert.present();
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
