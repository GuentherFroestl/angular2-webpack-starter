import { Component, OnInit } from '@angular/core';
import { AddressService} from './address-service';
import { Address } from './address-model';

@Component({
    selector: 'address-list',
    template: require('./address-list.component.html')
})
export class AddressListComponent implements OnInit {
    private addresses: Address[] = [];
    private selectedAddress: Address;
    private errorMessage: any;

    constructor(private addressService: AddressService) { }

    ngOnInit() {
        this.getAddressList();
    }

    getAddressList() {
        this.addressService.getAddressList()
            .subscribe(
            addresses => this.addresses = addresses,
            error => this.errorMessage = <any>error);
    }

    getAddress(id: string | number) {
        this.addressService.getAddress(id)
            .subscribe(
            address => this.selectedAddress = address,
            error => this.errorMessage = <any>error);
    }
    fetchList() {
        this.getAddressList();
    }
    selectAddress(adr: Address) {
        if (adr) {
            this.selectedAddress = adr;
            console.log("Address selected: ", adr);
            this.getAddress(adr.id);
        }
    }
}