"use strict";
var router_1 = require('@angular/router');
var address_component_1 = require('./address.component');
var address_list_component_1 = require('./address-list.component');
var address_detail_component_1 = require('./address-detail.component');
var CHILD_ROUTES = [
    { path: '', pathMatch: 'full', component: address_list_component_1.AddressListComponent },
    { path: ':id', component: address_detail_component_1.AddressDetailComponent }
];
exports.MODULE_ROUTES = [
    { path: 'addresses', component: address_component_1.AddressComponent, children: CHILD_ROUTES.slice() }
];
exports.appRoutingProviders = [];
exports.adrRouting = router_1.RouterModule.forChild(exports.MODULE_ROUTES);
//# sourceMappingURL=address.routing.js.map