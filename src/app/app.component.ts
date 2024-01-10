import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Send Data from parent to child Component';
  data=10;

  updateChild(){
    this.data=Math.floor(Math.random()*10);
  }
}
