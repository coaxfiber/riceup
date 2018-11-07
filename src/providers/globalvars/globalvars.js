var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
/*
  Generated class for the GlobalvarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalvarsProvider = /** @class */ (function () {
    function GlobalvarsProvider(http) {
        this.http = http;
        this.grant_type = 'password';
        this.client_id = '2';
        this.client_secret = 'uzyd8xUn9UeaQaMB8hfghABzvAFJZE8Djc4JcJlu';
        this.username = null;
        this.password = null;
        this.scope = '';
    }
    GlobalvarsProvider.prototype.getgid = function () {
        return this.globalid;
    };
    GlobalvarsProvider.prototype.setloggeduser = function (user) {
        this.loggeduser = user;
    };
    GlobalvarsProvider.prototype.setloggeduser2 = function (user) {
        this.loggeduser.is_farmer = user;
    };
    GlobalvarsProvider.prototype.setgid = function (gid) {
        this.globalid = gid;
    };
    GlobalvarsProvider.prototype.gettoken = function () {
        return this.token;
    };
    GlobalvarsProvider.prototype.settoken = function (token) {
        this.token = token;
    };
    GlobalvarsProvider.prototype.setcredentials = function () {
        var _this = this;
        var urlSearchParams = new URLSearchParams();
        urlSearchParams.append("grant_type", this.grant_type);
        urlSearchParams.append("client_id", this.client_id);
        urlSearchParams.append("client_secret", this.client_secret);
        urlSearchParams.append("username", this.username);
        urlSearchParams.append("password", this.password);
        urlSearchParams.append("scope", this.scope);
        var body = urlSearchParams.toString();
        var header = new Headers();
        header.append("Content-Type", "application/x-www-form-urlencoded");
        header.append("Accept", "application/json");
        var option = new RequestOptions({ headers: header });
        return this.http.post('http://api.riceupfarmers.org/oauth/token', body, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.settoken(data.token_type + " " + data.access_token);
        }, function (error) {
            alert(error);
        });
    };
    GlobalvarsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], GlobalvarsProvider);
    return GlobalvarsProvider;
}());
export { GlobalvarsProvider };
//# sourceMappingURL=globalvars.js.map