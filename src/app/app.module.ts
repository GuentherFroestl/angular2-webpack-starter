import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { AddressListComponent } from './addresses/address-list.component';
import { AddressDetailComponent } from './addresses/address-detail.component';


@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    routing
  ],
  declarations: [
    AppComponent,
    AddressListComponent,
    AddressDetailComponent
  ],
  providers: [appRoutingProviders],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
