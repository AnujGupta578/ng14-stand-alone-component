import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { AppDialogComponent } from './app-dialog.component';

import { SharedModule } from '../../shared/shared.module';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { ExampleStandaloneComponent } from '../stand-alone-components/app-modal-example.component';

export function createCompiler(compilerFactory: CompilerFactory): Compiler {
  return compilerFactory.createCompiler();
}

@NgModule({
  imports: [
    SharedModule,
    ExampleStandaloneComponent
  ],
  declarations: [
    AppDialogComponent
  ],
  providers: [
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS]
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory]
    }
  ]

})
export class AppDialogModule { }
