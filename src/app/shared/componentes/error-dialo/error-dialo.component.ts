import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialo',
  templateUrl: './error-dialo.component.html',
  styleUrls: ['./error-dialo.component.scss']
})
export class ErrorDialoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {} //injetando o tipo do MAT_D no nome "data"

  ngOnInit(): void {
  }

}
