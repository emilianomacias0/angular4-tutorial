import { Component } from '@angular/core';
import { GLOBAL } from './servicios/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Productos';
  header_color = GLOBAL.headColor;
}
