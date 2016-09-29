"use strict";
var router_1 = require('@angular/router');
var address_list_component_1 = require('./addresses/address-list.component');
var address_detail_component_1 = require('./addresses/address-detail.component');
var appRoutes = [
    {
        path: 'addresses',
        component: address_list_component_1.AddressListComponent,
        data: {
            title: 'Addresses List'
        }
    },
    { path: 'addresses/:id', component: address_detail_component_1.AddressDetailComponent },
    { path: '', component: address_list_component_1.AddressListComponent },
    { path: '**', component: address_list_component_1.AddressListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map