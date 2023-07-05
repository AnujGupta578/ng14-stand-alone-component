import { Directive, NgModule, Pipe, PipeTransform } from "@angular/core";

@Directive({
    selector: '[blueBorder]',
    standalone: true,
    host: {
      style: 'border: 2px dashed blue'
    }
  })
  export class BlueBorderDirective {}
  
  @Pipe({
    name: 'blackHole',
    standalone: true
  })
  export class BlackHolePipe implements PipeTransform {
    transform(value: any) {
      return '';
    }
  }
  
  // backward-compatibility NgModule
  @NgModule({  
    // exports: [BlueBorderDirective, BlackHolePipe]
  })
  export class LibModule {}