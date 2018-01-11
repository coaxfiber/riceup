import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
	user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public GlobalvarsProvider:GlobalvarsProvider,) {
  	this.user = this.GlobalvarsProvider.loggeduser;
  }

}
