import { Component } from '@angular/core';
import { FirstStandaloneComponent } from '../first/first-stand-alone.component';

@Component({
  selector: 'standalone-importing-standalone-component',
  standalone: true,
  imports: [FirstStandaloneComponent],
//   imports: [COLLABORATING_DIRECTIVES],
  
  template: `
    Turtles all the way down:
    <first-standalone-component></first-standalone-component>
  `
})
export class StandaloneImportingStandaloneComponent {} 
