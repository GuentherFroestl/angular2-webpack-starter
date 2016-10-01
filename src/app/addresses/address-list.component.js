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
var address_service_1 = require('./address-service');
var AddressListComponent = (function () {
    function AddressListComponent(addressService) {
        this.addressService = addressService;
        this.addresses = [];
    }
    AddressListComponent.prototype.ngOnInit = function () {
        this.getAddress();
    };
    AddressListComponent.prototype.getAddress = function () {
        var _this = this;
        this.addressService.getAddressList()
            .subscribe(function (addresses) { return _this.addresses = addresses; }, function (error) { return _this.errorMessage = error; });
    };
    AddressListComponent = __decorate([
        core_1.Component({
            selector: 'address-list',
            template: require('./address-list.component.html')
        }), 
        __metadata('design:paramtypes', [address_service_1.AddressService])
    ], AddressListComponent);
    return AddressListComponent;
}());
exports.AddressListComponent = AddressListComponent;
//# sourceMappingURL=address-list.component.js.map