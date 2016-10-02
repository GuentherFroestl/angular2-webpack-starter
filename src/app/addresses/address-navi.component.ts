import { Component, OnInit } from '@angular/core';
import { AddressService, AddressNavi} from './address-service';
import { Address } from './address-model';


@Component({
    selector: 'address-navi',
    template: require('./address-navi.component.html')
})
export class AddressNaviComponent implements OnInit {

navi: AddressNavi;

    constructor(public addressService : AddressService) {
        this.navi = addressService.navi;
     }

    ngOnInit() { }
}