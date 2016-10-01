import { Component, OnInit } from '@angular/core';
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: require('./app.template.html'),
    styles: [require('./app.template.css')]
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}