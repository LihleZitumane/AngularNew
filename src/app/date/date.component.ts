import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  user: any;
  @Input("name") newName: string;
  dateMessage: string;


  constructor() { 
    setInterval(()=>{
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    }, 1000)
  }

  ngOnInit() {
  }

}
