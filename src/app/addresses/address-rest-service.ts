import {AbstractRestClient, EnvironmentType, ServiceId} from 'fnt-service-lib';
import { Address } from './address-model';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

const defaultBaseUrl: string = "/addresses";

@Injectable()
export class AddressRestService extends AbstractRestClient<Address>{
      constructor(private myhttp: Http) {
    super(myhttp,defaultBaseUrl);
  }
}

@Injectable()
export class FNTSoftwareCatalogRestClient extends AbstractRestClient<Address>{
      constructor(private myhttp: Http) {
        super(myhttp, EnvironmentType.DEV, ServiceId.SOFTWARE_CATALOG);
  }
}

