import { NgModule }       from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddressService} from './address-service';

import { AddressComponent }   from './address.component';
import { AddressListComponent }   from './address-list.component';
import { AddressDetailComponent }   from './address-detail.component';
import { adrRouting } from './address.routing';

@NgModule({
    imports: [RouterModule,BrowserModule,adrRouting],
    exports: [],
    declarations: [AddressComponent,AddressListComponent,AddressDetailComponent],
    providers: [AddressService],
})
export class AddressModule { }
