import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';


@Component({
  selector: 'app-extended-right',
  templateUrl: './extended-right.component.html',
  styleUrls: ['./extended-right.component.css']
})
export class ExtendedRightComponent implements OnInit {

  @Input() splitScreen: boolean = false;
  @Output() closeClicked = new EventEmitter();

  data: any = [];

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getCarMOTData().subscribe({
      next: (res: any) => {

        this.data.push(res);
      }
    });
  }
  closeButtonClicked(): void {
    this.closeClicked.emit(true);
  }

}
