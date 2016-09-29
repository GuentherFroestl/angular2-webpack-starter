import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressListComponent } from './addresses/address-list.component';
import { AddressDetailComponent } from './addresses/address-detail.component';

const appRoutes: Routes = [

  {
    path: 'addresses',
    component: AddressListComponent,
    data: {
      title: 'Addresses List'
    }
  },
    { path: 'addresses/:id', component: AddressDetailComponent },
  { path: '', component: AddressListComponent },
  { path: '**', component: AddressListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
