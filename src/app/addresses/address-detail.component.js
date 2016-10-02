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
var address_service_1 = require('./address-service');
var AddressDetailComponent = (function () {
    function AddressDetailComponent(route, addressService) {
        this.route = route;
        this.addressService = addressService;
    }
    AddressDetailComponent.prototype.ngOnInit = function () {
        this.registerRouteListener();
    };
    AddressDetailComponent.prototype.registerRouteListener = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id']) {
                _this.selectedId = +params['id'];
                _this.getAddress(_this.selectedId);
            }
        });
    };
    AddressDetailComponent.prototype.getAddress = function (id) {
        var _this = this;
        this.addressService.getAddress(id)
            .subscribe(function (address) { return _this.selectedAddress = address; }, function (error) { return _this.errorMessage = error; });
    };
    AddressDetailComponent = __decorate([
        core_1.Component({
            selector: 'address-detail',
            template: require('./address-detail.component.html')
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, address_service_1.AddressService])
    ], AddressDetailComponent);
    return AddressDetailComponent;
}());
exports.AddressDetailComponent = AddressDetailComponent;
//# sourceMappingURL=address-detail.component.js.map