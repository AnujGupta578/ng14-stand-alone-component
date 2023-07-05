import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'using-ce-component',
  standalone: true,
  template: `<custom-element></custom-element>`,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UsingCustomElementsComponent {  
}