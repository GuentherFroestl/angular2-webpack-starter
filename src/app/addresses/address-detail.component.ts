import { Component, OnInit } from '@angular/core';
import { Route, Routes, Router, ActivatedRoute, Params } from '@angular/router';
import { AddressService} from './address-service';
import { Address } from './address-model';


@Component({
    selector: 'address-detail',
    template: require('./address-detail.component.html')
})
export class AddressDetailComponent implements OnInit {

    private selectedId: number;
    private selectedAddress: Address;
    private errorMessage: any;

    constructor(
        private route: ActivatedRoute,
        private addressService: AddressService
    ) { }

    ngOnInit() {
        this.registerRouteListener();
    }

    registerRouteListener(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id']) {
                this.selectedId = +params['id'];
                this.getAddress(this.selectedId);
            }
        });
    }

    getAddress(id: string | number) {
        this.addressService.getAddress(id)
            .subscribe(
            address => this.selectedAddress = address,
            error => this.errorMessage = <any>error);
    }
}