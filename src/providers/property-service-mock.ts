import {Injectable} from '@angular/core';
import {Http } from '@angular/http';

import {GlobalvarsProvider} from '../providers/globalvars/globalvars';
import {Headers, RequestOptions} from '@angular/http';
@Injectable()
export class PropertyService {
properties: any;

   constructor(public GlobalvarsProvider:GlobalvarsProvider, private http: Http) {
      this.GlobalvarsProvider.setcredentials();
             var header = new Headers();
                header.append("Accept", "application/json");
                header.append("Authorization",this.GlobalvarsProvider.gettoken());
        let option = new RequestOptions({ headers: header });
        this.http.get('http://api.riceupfarmers.com/api/products',option)
          .map(response => response.json())
          .subscribe(res => {
              this.properties = res;
          });
   }
  favoriteCounter: number = 0;
  favorites: Array<any> = [];

  findAll() {
    return Promise.resolve(this.properties);
  }

  findById(id) {
    return Promise.resolve(this.properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(this.properties.filter((property: any) =>
        (property.product_name +  ' ' + property.product_desc).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }

   

}
