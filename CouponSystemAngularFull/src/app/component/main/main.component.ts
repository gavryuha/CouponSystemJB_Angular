import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: []
})
export class MainComponent implements OnInit {

     public currentDate: Date;
     public currentDiscount: number;
     public imageWidth: number;

    public constructor(private title: Title) {

     }

    public ngOnInit(): void {

      this.title.setTitle('Home');
      this.currentDiscount = 10;
      this.currentDate = new Date();
      this.imageWidth = 1000;
    }



}
