import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Headers, RequestOptions} from '@angular/http';
/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalvarsProvider {
  token:string;
  activeaddressid: string;
  activeaddressaddress: string;
  activeaddressmobile: string;
  activeaddressid2: string;
  activeaddressaddress2: string;
  activeaddressmobile2: string;
  globalid: any;
  loggeduser:any;
        grant_type:string;
        client_id:string;
        client_secret:string;
        username:string;
        password:string;
        scope:string;
  constructor(public http: Http) {
        this.grant_type='password';
        this.client_id='2';
        this.client_secret='uzyd8xUn9UeaQaMB8hfghABzvAFJZE8Djc4JcJlu';
        this.username=null;
        this.password=null;
        this.scope='';

  }
    getgid(){
        return this.globalid;
    }
    setloggeduser(user:any){
        this.loggeduser = user;
    }

    setloggeduser2(user:any){
        this.loggeduser.is_farmer = user;
    }
    
    setgid(gid: any)
    {
        this.globalid = gid;
    }

    gettoken(){
        return this.token;
    }
    settoken(token)
    {
        this.token = token;
    }

    setcredentials(){
             let urlSearchParams = new URLSearchParams();
                urlSearchParams.append("grant_type",this.grant_type);
                urlSearchParams.append("client_id",this.client_id);
                urlSearchParams.append("client_secret",this.client_secret);
                urlSearchParams.append("username",this.username);
                urlSearchParams.append("password",this.password);
                urlSearchParams.append("scope",this.scope);
              let body = urlSearchParams.toString()

              var header = new Headers();
              header.append("Content-Type", "application/x-www-form-urlencoded");
              header.append("Accept", "application/json");
              let option = new RequestOptions({ headers: header });
              this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)

               .map(response => response.json())
                  .subscribe(data => {
                   this.settoken(data.token_type+" "+data.access_token);    
               }
               , error => {
               alert(error);
               });
             }
}
