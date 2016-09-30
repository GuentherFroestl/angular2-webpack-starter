import { NgModule }       from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddressComponent }   from './address.component';
import { AddressListComponent }   from './address-list.component';
import { AddressDetailComponent }   from './address-detail.component';
import { adrRouting } from './address.routing';

@NgModule({
    imports: [RouterModule,adrRouting],
    exports: [],
    declarations: [AddressComponent,AddressListComponent,AddressDetailComponent],
    providers: [],
})
export class AddressModule { }
