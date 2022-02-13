import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended',
  templateUrl: './extended.component.html',
  styleUrls: ['./extended.component.css']
})
export class ExtendedComponent implements OnInit {

  splitScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  viewMOTsClicked() {
    this.splitScreen = true;
  }

  closeButtonClicked(response: boolean) {
    this.splitScreen = false;
  }
}
