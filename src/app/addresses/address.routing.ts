import { ModuleWithProviders } from '@angular/core';
import { Route,Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddressListComponent } from './address-list.component';
import { AddressDetailComponent } from './address-detail.component';


const CHILD_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', component: AddressListComponent },
  { path: ':id', component: AddressDetailComponent }
];

export const MODULE_ROUTES: Route[] = [
  { path: 'addresses', component: AddressComponent, children: [ ...CHILD_ROUTES ] }
]
export const appRoutingProviders: any[] = [

];

export const adrRouting: ModuleWithProviders = RouterModule.forChild(MODULE_ROUTES);
