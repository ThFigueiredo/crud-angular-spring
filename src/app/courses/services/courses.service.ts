import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //obtenho apenas a primeira resposta do servidor (lista de json)
      //delay(5000), // testando o spinner
      tap(courses => console.log(courses))
    )
  }

  //.pipe -> antes de retornar a informação final, é possivel manipular essa informação de maneira reativa
  //pode-se usar o subscribe ou pipe
}
