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
var BrokerService = /** @class */ (function () {
    function BrokerService(http) {
        var _this = this;
        this.http = http;
        this.http.get('http://localhost/riceup/riceupapi.php?action=getall')
            .map(function (response) { return response.json(); })
            .subscribe(function (res) { return _this.brokers = res; });
    }
    BrokerService.prototype.findAll = function () {
        return Promise.resolve(this.brokers);
    };
    BrokerService.prototype.findById = function (id) {
        return Promise.resolve(this.brokers[id - 1]);
    };
    BrokerService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], BrokerService);
    return BrokerService;
}());
export { BrokerService };
//# sourceMappingURL=broker-service-mock.js.map