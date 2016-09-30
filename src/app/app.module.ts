import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { AddressModule} from './addresses/address.module'

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    AddressModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [appRoutingProviders],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
