import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { AddressModule} from './addresses/address.module';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    AddressModule,
    routing
  ],
  declarations: [
    AppComponent, 
  ],
  providers: [appRoutingProviders],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
