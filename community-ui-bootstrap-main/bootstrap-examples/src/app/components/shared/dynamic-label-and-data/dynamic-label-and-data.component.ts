import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-label-and-data',
  templateUrl: './dynamic-label-and-data.component.html',
  styleUrls: ['./dynamic-label-and-data.component.css']
})
export class DynamicLabelAndDataComponent implements OnInit {

  @Input() label: string = ""
  @Input() data: string = ""
  @Input() reducedSizeMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
