import { Component, OnInit } from '@angular/core';
import { AddressService} from './address-service';
import { Address } from './address-model';

@Component({
    selector: 'address-list',
    template: require('./address-list.component.html')
})
export class AddressListComponent implements OnInit {
    private addresses: Address[] = [];
    private errorMessage: any;

    constructor(private addressService: AddressService) { }

    ngOnInit() {
        this.getAddress();
     }

    getAddress() {
        this.addressService.getAddressList()
            .subscribe(
            addresses => this.addresses = addresses,
            error => this.errorMessage = <any>error);
    }
}