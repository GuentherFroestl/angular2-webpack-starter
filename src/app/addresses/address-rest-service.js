"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var fnt_service_lib_1 = require('fnt-service-lib');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var defaultBaseUrl = "/addresses";
var AddressRestService = (function (_super) {
    __extends(AddressRestService, _super);
    function AddressRestService(myhttp) {
        _super.call(this, myhttp, defaultBaseUrl);
        this.myhttp = myhttp;
    }
    AddressRestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AddressRestService);
    return AddressRestService;
}(fnt_service_lib_1.AbstractRestClient));
exports.AddressRestService = AddressRestService;
var FNTSoftwareCatalogRestClient = (function (_super) {
    __extends(FNTSoftwareCatalogRestClient, _super);
    function FNTSoftwareCatalogRestClient(myhttp) {
        _super.call(this, myhttp, fnt_service_lib_1.EnvironmentType.DEV, fnt_service_lib_1.ServiceId.SOFTWARE_CATALOG);
        this.myhttp = myhttp;
    }
    FNTSoftwareCatalogRestClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FNTSoftwareCatalogRestClient);
    return FNTSoftwareCatalogRestClient;
}(fnt_service_lib_1.AbstractRestClient));
exports.FNTSoftwareCatalogRestClient = FNTSoftwareCatalogRestClient;
//# sourceMappingURL=address-rest-service.js.map