"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var baseUrl = "/addresses";
var addressListUrl = baseUrl + "/list.json"; // URL to web API
var AddressNavi = (function () {
    function AddressNavi() {
    }
    AddressNavi.prototype.getLength = function () {
        if (this.addressList) {
            return this.addressList.length;
        }
        else {
            return 0;
        }
    };
    AddressNavi.prototype.getPosition = function (offset) {
        var res = 0;
        if (this.addressList && this.currentAddress) {
            for (var i in this.addressList) {
                if (this.addressList[i].id === this.currentAddress.id) {
                    res = +i;
                    break;
                }
            }
            return res + offset;
        }
    };
    return AddressNavi;
}());
exports.AddressNavi = AddressNavi;
var AddressService = (function () {
    function AddressService(_http) {
        this._http = _http;
        this.navi = new AddressNavi();
    }
    AddressService.prototype.getAddressList = function () {
        var _this = this;
        return this._http.get(addressListUrl)
            .map(this.extractData)
            .do(function (data) { return _this.navi.addressList = data; })
            .catch(this.handleError);
    };
    AddressService.prototype.getAddress = function (id) {
        var _this = this;
        var url = baseUrl + "/" + id + "/" + id + ".json";
        return this._http.get(url)
            .map(this.extractData)
            .do(function (data) {
            _this.navi.currentAddress = data;
            if (_this.navi.addressList === undefined || _this.navi.addressList.length === 0) {
                _this.navi.addressList = [];
                _this.navi.addressList.push(_this.navi.currentAddress);
            }
        })
            .catch(this.handleError);
    };
    AddressService.prototype.extractData = function (res) {
        var data = res.json();
        console.log("received data:", data);
        return data || {};
    };
    AddressService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AddressService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddressService);
    return AddressService;
}());
exports.AddressService = AddressService;
//# sourceMappingURL=address-service.js.map