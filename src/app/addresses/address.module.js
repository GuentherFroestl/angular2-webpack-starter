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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var address_service_1 = require('./address-service');
var address_component_1 = require('./address.component');
var address_list_component_1 = require('./address-list.component');
var address_detail_component_1 = require('./address-detail.component');
var address_routing_1 = require('./address.routing');
var AddressModule = (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, platform_browser_1.BrowserModule, address_routing_1.adrRouting],
            exports: [],
            declarations: [address_component_1.AddressComponent, address_list_component_1.AddressListComponent, address_detail_component_1.AddressDetailComponent],
            providers: [address_service_1.AddressService],
        }), 
        __metadata('design:paramtypes', [])
    ], AddressModule);
    return AddressModule;
}());
exports.AddressModule = AddressModule;
//# sourceMappingURL=address.module.js.map