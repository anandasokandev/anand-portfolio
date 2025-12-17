import { Component } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  imports: [],
  templateUrl: './under-construction.html',
  styleUrl: './under-construction.css',
})
export class UnderConstruction {
  readonly year = new Date().getFullYear();
}
