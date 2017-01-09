import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  newtitle = 'my navbar';

  @Input() appName:string;
  @Input() currentUserName:string;
  @Output() onlogout:EventEmitter<null> = new EventEmitter();
  constructor() {
   }

  logout() {
    console.log('ça marche');
    this.onlogout.emit();
  }

  ngOnInit() {
  }

}
