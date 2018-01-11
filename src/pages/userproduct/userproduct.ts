import {Component} from '@angular/core';
import {Config, NavController, NavParams,LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {AddproductPage} from '../addproduct/addproduct';
import {PropertyDetailPage} from '../property-detail/property-detail';


/**
 * Generated class for the UserproductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-userproduct',
  templateUrl: 'userproduct.html',
})
export class UserproductPage {
      loading: Loading;
 products:any;pushPage: any;
  constructor( public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController,  public config: Config) {
  	this.pushPage=AddproductPage;
    this.loading = this.loadingCtrl.create({
        content: 'Loading Product...',
      });
      this.loading.present();
    this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/products/'+this.GlobalvarsProvider.loggeduser.id,option)
          .map(response => response.json())
          .subscribe(res => {
              this.products = res;
              this.loading.dismissAll();
          });
  }
openPropertyDetail(property: any) {
        this.navCtrl.push(PropertyDetailPage, property);
    }

}
