import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalvarsProvider {

  globalid: any;
  constructor(public http: Http) {
  }
  getgid(){
        return this.globalid;
    }
    setgid(gid: any)
    {
        this.globalid = gid;
    }
}
