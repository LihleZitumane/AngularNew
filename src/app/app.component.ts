import { Component } from '@angular/core';
import { User } from './address-card//user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  usern: User;
  inputText: string = "new value";

  constructor(private svc: TestService){
    this.usern = new User();
    this.usern.name = "Lihle Zitumane",
    this.usern.address = "1450 Msobomvu Butterworth 4960",
    this.usern.title = "Software Developer",
    this.usern.phone = ["0856321456", "08563214569", "08632145696"]
    svc.printToConsole("Lihle here");
  }
}
