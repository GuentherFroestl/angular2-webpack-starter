import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('./app.template.html'),
    styles: [require('./app.template.css')]
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}