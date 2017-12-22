import {Component} from '@angular/core';
import {Config, NavController, NavParams} from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import {AddproductPage} from '../addproduct/addproduct';


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
 products:any;pushPage: any;
  constructor(public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController,  public config: Config) {
  	this.pushPage=AddproductPage;
    this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/products/'+this.GlobalvarsProvider.loggeduser.id,option)
          .map(response => response.json())
          .subscribe(res => {
              this.products = res;
          });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserproductPage');
  }

}
