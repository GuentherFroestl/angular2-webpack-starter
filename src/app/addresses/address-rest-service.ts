import {AbstractRestClient} from 'fnt-service-lib';
import { Address } from './address-model';
import { Injectable }     from '@angular/core';
import { Http} from 'fnt-service-lib/node_modules/@angular/http';

const defaultBaseUrl: string = "/addresses";

@Injectable()
export class AddressRestService extends AbstractRestClient<Address>{
      constructor(private myhttp: Http) {
    super(myhttp,defaultBaseUrl);
  }
}

