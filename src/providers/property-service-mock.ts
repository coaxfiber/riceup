import {Injectable} from '@angular/core';
import {Http } from '@angular/http';

@Injectable()
export class PropertyService {
properties: any;

   constructor(private http: Http) {
     this.http.get('http://localhost/riceup/riceupapi.php?action=getproall')
          .map(response => response.json())
          .subscribe(res => this.properties = res);
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
        (property.name +  ' ' + property.description ).toUpperCase().indexOf(key) > -1));
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
