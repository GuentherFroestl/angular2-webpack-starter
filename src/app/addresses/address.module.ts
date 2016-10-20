import { NgModule }       from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AddressService} from './address-service';
import { AddressRestService} from './address-rest-service';

import { AddressComponent }   from './address.component';
import { AddressListComponent }   from './address-list.component';
import { AddressDetailComponent }   from './address-detail.component';
import { AddressNaviComponent }   from './address-navi.component';

import { adrRouting } from './address.routing';

@NgModule({
  imports: [RouterModule, BrowserModule, FormsModule, adrRouting],
  exports: [],
  declarations: [
    AddressComponent,
    AddressListComponent,
    AddressDetailComponent,
    AddressNaviComponent],
  providers: [AddressService, AddressRestService],
})
export class AddressModule { }
