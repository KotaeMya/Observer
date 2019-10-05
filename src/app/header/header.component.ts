import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: boolean;
  userCabinet: boolean;
  notifications: boolean;

  constructor() { }

  ngOnInit() {
    this.userCabinet = this.notifications = this.language = false;
  }

  languageReverse(): void {
    this.language = !this.language;
    console.log(this.language);
  }

  userCabinetReverse(): void {
    this.userCabinet = !this.userCabinet;
  }

  notificationsReverse(): void {
    this.notifications = !this.notifications;
  }

}
