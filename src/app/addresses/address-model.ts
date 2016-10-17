import {BaseDomainModel} from 'fnt-service-lib';
export class Address extends BaseDomainModel{
    id: number;
    name: string;
    firstName: string;
    type: string;
    gender: string;
}