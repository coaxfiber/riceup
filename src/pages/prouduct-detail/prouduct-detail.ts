import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http } from '@angular/http';
/**
 * Generated class for the ProuductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-prouduct-detail',
  templateUrl: 'prouduct-detail.html',
})
export class ProuductDetailPage {

	 farmer: any;
	 timee: any;
    constructor(private http: Http,public navCtrl: NavController, public navParams: NavParams) {
        this.farmer = this.navParams.data;this.timee = Date.now();
    }
}
