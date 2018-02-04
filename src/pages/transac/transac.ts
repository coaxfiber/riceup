import {Component} from '@angular/core';
import {Config, NavController, NavParams,LoadingController, Loading} from 'ionic-angular';
import {Http } from '@angular/http';
import {  MenuController } from 'ionic-angular';
import {GlobalvarsProvider} from '../../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
import { AlertController } from 'ionic-angular';

import {DispatchPage} from '../dispatch/dispatch';
/**
 * Generated class for the TransacPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-transac',
  templateUrl: 'transac.html',
})
export class TransacPage {
    orders:any;
      loading: Loading;
 constructor(private alertCtrl: AlertController, public loadingCtrl: LoadingController,public GlobalvarsProvider:GlobalvarsProvider, public navParams: NavParams,private http: Http,private menu : MenuController,public navCtrl: NavController,  public config: Config) {
  	this.loading = this.loadingCtrl.create({
        content: 'Loading Product...',
      });
      this.loading.present();
    this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
              
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.org/api/fordispatch',option)
          .map(response => response.json())
          .subscribe(res => {
             if (res.message==undefined) {
               console.log(res);
               this.orders = res;
            }else
            {
              this.presentAlert(res.message);
            }
              this.loading.dismissAll();
          },error=>{

              this.loading.dismissAll();this.presentAlert("No Internet Connection!");
          });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransacPage');
  }
presentAlert(val:any) {
      let alert = this.alertCtrl.create({
        title: 'Alert',
        subTitle: val,
        buttons: ['Dismiss']
      });
      alert.present();
    }
    open(list:any){
        this.navCtrl.push(DispatchPage, list);
    }
    dispatch(id){
      this.loading = this.loadingCtrl.create({
              content: 'Dispatching Product...',
            });
            this.loading.present();
             let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
              let body = urlSearchParams.toString()
               var header = new Headers();
                  header.append("Accept", "application/json");
                  header.append("Content-Type", "application/x-www-form-urlencoded");
                  header.append("Authorization",this.GlobalvarsProvider.gettoken());
                        
                  let option = new RequestOptions({ headers: header });
                  
                this.http.patch('http://api.riceupfarmers.org/api/product/dispatch/'+id,body,option)
                     .map(response => response.json())
                    .subscribe(data => {
                      if (data.message!=undefined) {
                       this.presentAlert(data.message);
                      }else
                      {
                       this.presentAlert("Something went wrong!");

                      }
                      this.loading.dismissAll();
                      this.navCtrl.setRoot(this.navCtrl.getActive().component);
                   },Error=>{
                     this.presentAlert("No Internet Connection!");
                      this.loading.dismissAll();
                   });
    }
}
