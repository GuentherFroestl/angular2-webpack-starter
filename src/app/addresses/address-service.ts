import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Address } from './address-model';

@Injectable()
export class AddressService {

    private addressListUrl = '/addresslist.json';  // URL to web API

    constructor(private http: Http) { }
    getAddressList(): Observable<Address[]> {
        return this.http.get(this.addressListUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json();
        console.log("received data:",data);
        return data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
