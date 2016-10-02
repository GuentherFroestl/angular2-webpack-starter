import { ModuleWithProviders } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddressListComponent } from './address-list.component';
import { AddressDetailComponent } from './address-detail.component';
import { AddressNaviComponent } from './address-navi.component';

const NAVI_ROUTE: Route[] = [
  { path: '/navi', component: AddressNaviComponent, outlet: "navi" }
];

const CHILD_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', component: AddressListComponent },
  { path: ':id', component: AddressDetailComponent},
  { path: 'navi', component: AddressNaviComponent, outlet: "navi" }
];

export const MODULE_ROUTES: Route[] = [
  { path: 'addresses', component: AddressComponent , children: [...CHILD_ROUTES] }
 // { path: 'addresses/list', component: AddressListComponent },
 // { path: 'addresses/:id', component: AddressDetailComponent},
  
]
export const appRoutingProviders: any[] = [

];

export const adrRouting: ModuleWithProviders = RouterModule.forChild(MODULE_ROUTES);
