import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialoComponent } from './componentes/error-dialo/error-dialo.component';



@NgModule({
  declarations: [ //declaration colocam-se os components
    ErrorDialoComponent
  ],
  imports: [ //imports colocam-se os módulos
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialoComponent] // fazendo este exports pois preciso importá-lo em courses e outros
})
export class SharedModule { }
