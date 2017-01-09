import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'another exemple2';
  title2 = 'exemplenom';



  constructor() {

  }

  onAppLogout(){
    console.log('ok ça marche très bien');
  }
}
