import { Component, OnInit } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
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

    constructor(
        private addressService: AddressService,
        private router: Router) { }

    ngOnInit() {
        this.getAddressList();
    }

    getAddressList() {
        this.addressService.getAddressList()
            .subscribe(
            addresses => this.addresses = addresses,
            error => this.errorMessage = <any>error);
    }

    fetchList() {
        this.getAddressList();
    }

    goTo(adr: Address) {
        if (adr) {
            this.selectedAddress = adr;
            console.log("goto: ", adr);
            this.router.navigate([
                `/addresses`,
                {
                    outlets: {
                        primary: `${adr.id}`,
                        navi: `navi`
                    }
                }]);
        }
    }
}