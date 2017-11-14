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
import { Http, Headers, RequestOptions } from '@angular/http';
import { SERVER_URL } from './config';
var propertiesURL = SERVER_URL + 'properties/', favoritesURL = propertiesURL + 'favorites/';
var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
        this.http = http;
    }
    PropertyService.prototype.findAll = function () {
        return this.http.get(propertiesURL)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    PropertyService.prototype.findByName = function (key) {
        return this.http.get(propertiesURL + "?key=" + key)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    PropertyService.prototype.findById = function (id) {
        return this.http.get(propertiesURL + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    PropertyService.prototype.getFavorites = function () {
        return this.http.get(favoritesURL)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    PropertyService.prototype.favorite = function (property) {
        var body = JSON.stringify(property), headers = new Headers({ 'Content-Type': 'application/json' }), options = new RequestOptions({ headers: headers });
        return this.http.post(favoritesURL, body, options).toPromise();
    };
    PropertyService.prototype.unfavorite = function (favorite) {
        return this.http.delete(favoritesURL + favorite.id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    PropertyService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], PropertyService);
    return PropertyService;
}());
export { PropertyService };
//# sourceMappingURL=property-service-rest.js.map