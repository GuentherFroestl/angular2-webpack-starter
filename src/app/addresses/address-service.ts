import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Address } from './address-model';

const baseUrl: string = "/addresses";
const addressListUrl = `${baseUrl}/list.json`;  // URL to web API

export class AddressNavi {
    addressList: Address[];
    currentAddress: Address;

    getLength(): number {
        if (this.addressList) {
            return this.addressList.length;
        } else {
            return 0;
        }
    }
    getPosition(offset: number) {
        let res: number = 0;
        if (this.addressList && this.currentAddress) {
            for (let i in this.addressList) {
                if (this.addressList[i].id === this.currentAddress.id) {
                    res = +i;
                    break;
                }
            }
            return res + offset;
        }
    }
}

@Injectable()
export class AddressService {

    navi: AddressNavi = new AddressNavi();

    constructor(private _http: Http) { }

    getAddressList(): Observable<Address[]> {
        return this._http.get(addressListUrl)
            .map(this.extractData)
            .do(data => this.navi.addressList = data)
            .catch(this.handleError);
    }

    getAddress(id: number | string): Observable<Address> {
        let url: string = `${baseUrl}/${id}/${id}.json`;
        return this._http.get(url)
            .map(this.extractData)
            .do(data => {
                this.navi.currentAddress = data
                if (this.navi.addressList === undefined || this.navi.addressList.length === 0) {
                    this.navi.addressList = [];
                    this.navi.addressList.push(this.navi.currentAddress);
                }
            })
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json();
        console.log("received data:", data);
        return data || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
