import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-standalone-model',
    standalone: true,
    imports: [CommonModule],
    template: `
      <div [innerHTML]="dynamicTemplate"></div>
    `
})
export class ExampleStandaloneComponent implements OnInit {
    @Input('loginid') loginid!: string;
    constructor() { }

    ngOnInit() {
        console.log(this.loginid, 'loginid');

    }


    get dynamicTemplate(): string {
        return '<p>Hello Dynamic Template, <strong>{{loginid}}</strong> How are you today !!</p>';
    }
}