import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialoComponent } from 'src/app/shared/componentes/error-dialo/error-dialo.component';




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category']
  //  displayedColumns = [''nome', 'sigla', 'status'']

  constructor(
      private CoursesService: CoursesService,
      public dialog: MatDialog
    ) {

    this.courses$ = this.CoursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.')
          return of([])
        })
      )
   }

   onError(errorMsg: string) { //metodo onError
    this.dialog.open(ErrorDialoComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
