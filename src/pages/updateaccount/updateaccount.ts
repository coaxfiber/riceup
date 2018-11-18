  import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController, Loading  } from 'ionic-angular';
import { GlobalvarsProvider } from '../../providers/globalvars/globalvars';
import { AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import {AccountPage} from '../account/account';
import {Http } from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import { Events } from 'ionic-angular';

import {ShippingDetailsPage} from '../shipping-details/shipping-details';
/**
 * Generated class for the UpdateaccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-updateaccount',
  templateUrl: 'updateaccount.html',
})
export class UpdateaccountPage {
      loading: Loading;
    user: any;
    tempuser: any;
	  option: any;
    viewMode: string = "map";
    viewMode2: string = "list";
    isfarmer:any;
    test:any;
    map;
    markersGroup;
   constructor(public events: Events,private http: Http,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,public GlobalvarsProvider:GlobalvarsProvider,) {
  	
    this.user = this.GlobalvarsProvider.loggeduser;
    this.isfarmer = this.user.is_farmer;
    this.test = this.user.is_farmer;
    this.tempuser = this.user;
    this.user.address = this.GlobalvarsProvider.activeaddressaddress;
    this.user.mobile_no = this.GlobalvarsProvider.activeaddressmobile;
  }
shipdetails(){
        this.navCtrl.push(ShippingDetailsPage, {
        id: 'ss',address:'ss',mobile:'ss'
        });
}
  showMarkers() {
      if (this.user.address_lat!=null) {
       if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
                let marker: any = leaflet.marker([this.user.address_lat, this.user.address_long]).on('click', event => console.log("map marker"));
                this.markersGroup.addLayer(marker);
        this.map.addLayer(this.markersGroup);
      }
        
    }
    
    showMap() {
      if (this.isfarmer==1) {
                    setTimeout(() => {
                      if (this.user.address_lat!=null) {
                        this.map = leaflet.map("map2").setView([this.user.address_lat, this.user.address_long], 10);
                          leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                                     attribution: '&copy; techventures.ph'
                                 }).addTo(this.map);
                      }else
                      {
                        this.map = leaflet.map("map2").setView([15.060377, 120.674492], 10);
                          leaflet.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
                                     attribution: '&copy; techventures.ph'
                                 }).addTo(this.map);
                      }
                         
                                 this.showMarkers();
                         this.map.locate({setView: false, maxZoom: 10});
                            this.map.on('locationfound', e => {
                            var radius = e.accuracy / 2;
                            var popup = leaflet.popup();
                            popup
                          .setLatLng(e.latlng)
                          .setContent("You are currently here!")
                          .openOn(this.map); 
                        leaflet.circle(e.latlng, radius).addTo(this.map);
                       });
                             var popup = leaflet.popup();
					           this.map.on('click', e => {
					              popup
					              .setLatLng(e.latlng)
					              .setContent("<b>Selected Location</b><br>Coordinates: <br>lat: " + e.latlng.lat.toString() +"<br>lng: "+ e.latlng.lng.toString())
					              .openOn(this.map); 
					                this.user.address_long =  e.latlng.lng;
					                this.user.address_lat =  e.latlng.lat;
					                //console.log(this.form.value.name.title);
					           });
                     })
            }
        }
        
        createUser(user) {
            this.events.publish('isfarm:created', user, this.GlobalvarsProvider.getgid());
          }

        update2(){
        	if (this.user.firstname!='' && this.user.lastname!='' && this.user.address!='' && this.user.mobile_no!='' && this.user.email!='') {
        		this.loading = this.loadingCtrl.create({
              content: 'Updating Account Info...',
            });
            this.loading.present();
        	let urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("grant_type",this.GlobalvarsProvider.grant_type);
                  let body = urlSearchParams.toString()
                   var header = new Headers();
                      header.append("Accept", "application/json");
                      header.append("Content-Type", "application/x-www-form-urlencoded");
                      header.append("Authorization",this.GlobalvarsProvider.gettoken());
                      this.user.is_farmer = this.isfarmer;
                      let option = new RequestOptions({ headers: header });
                         
                         this.http.patch('http://api.riceupfarmers.org/api/user/update?firstname='+this.user.firstname+'&middlename='+this.user.middlename+'&lastname='+this.user.lastname+'&address='+this.user.address+'&address_lat='+this.user.address_lat+'&address_long='+this.user.address_long+'&bus_name='+this.user.business_name+'&mobile_no='+this.user.mobile_no+'&email='+this.user.email+'&years_bus='+this.user.years_in_business+'&is_farmer='+this.isfarmer+'&history='+this.user.history+'&years_farm='+this.user.years_in_farming, body,option)
                         .map(response => response.json())
                        .subscribe(data => {
                    			this.loading.dismissAll();
                          this.updateaddress();
                          this.GlobalvarsProvider.loggeduser=this.user;
                          this.presentConfirm(data.message);
                          this.createUser(this.isfarmer);
                       }, error => {
                         console.log(error);
                       		this.presentAlert("No Internet Connection!");
                  			this.loading.dismissAll();
                       });
        	}else
        	{    this.user = this.tempuser;
                console.log(this.tempuser);
               this.presentAlert("Please Fill the Required Fields!");
        	}
        }
         updateaddress(){
    let urlSearchParams = new URLSearchParams();
                  urlSearchParams.append("passforpost",'any');
               let body = urlSearchParams.toString()
                 var header = new Headers();
                    header.append("Accept", "application/json");
                    header.append("Authorization",this.GlobalvarsProvider.gettoken());
                let option = new RequestOptions({ headers: header });
               
                        this.http.patch('http://api.riceupfarmers.org/api/shippingdetail/'+this.GlobalvarsProvider.activeaddressid,{'address':this.GlobalvarsProvider.activeaddressaddress,
                          'address_lat':this.GlobalvarsProvider.activeaddressaddress,
                          'address_long':this.GlobalvarsProvider.activeaddressaddress,
                          'mobile_no':this.GlobalvarsProvider.activeaddressmobile},option)
                          .map(response => response.json())
                          .subscribe(res => {
                             this.presentAlert(res.message); 
                            this.pop();
                           // this.alertConfirm2(res.message);

                          },Error => {
                            console.log(Error);
                             this.presentAlert("No Internet Connection!"); 
                          });

  }
        g(){
        	if (this.test==true) {
        		this.isfarmer=1;
        		this.showMap();
        	}else{
        		this.isfarmer=0;
        	}
        }

		 presentAlert(val:any) {
		      let alert = this.alertCtrl.create({
		        title: 'Alert',
		        subTitle: val,
		        buttons: ['Dismiss']
		      });
		      alert.present();
		    } 
		    presentConfirm(val:any) {
			  let alert = this.alertCtrl.create({
			    title: '',
			    message: val,
			    buttons: [
			      {
			        text: 'Dismiss',
			        handler: () => {
			          this.navCtrl.setRoot(AccountPage);
			        }
			      }
			    ]
			  });
			  alert.present();
			}

}
