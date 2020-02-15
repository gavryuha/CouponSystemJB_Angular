import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

  @Input()
  public imageSource: string;

  // tslint:disable-next-line: no-input-rename
  @Input('width')
  public imageWidth = 100;

  // tslint:disable-next-line: no-input-rename
  @Input('height')
  public imageHeight = 100;


  constructor() { }

  ngOnInit() {
  }

}
