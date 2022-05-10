import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_binding';
  @Output() orginColor = 'black';

  colors = ['blue', 'red', 'green', 'lightblue'];

  colorChange(newcolor: string): void {
    this.orginColor = newcolor;
  }
}
