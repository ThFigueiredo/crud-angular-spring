import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialoComponent } from './componentes/error-dialo/error-dialo.component';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [ //declaration colocam-se os components
    ErrorDialoComponent, CategoryPipe
  ],
  imports: [ //imports colocam-se os módulos
    CommonModule,
    AppMaterialModule
  ],
  exports: [ // fazendo este exports pois preciso importá-lo em courses e outros
    ErrorDialoComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
