
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-extended-left',
  templateUrl: './extended-left.component.html',
  styleUrls: ['./extended-left.component.css']
})
export class ExtendedLeftComponent implements OnInit {

  @Input() splitScreen : boolean = false;
  @Output() viewMOTs = new EventEmitter();
  
  data: any = [];

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getCarData().subscribe({
      next: (res: any) => {
        this.data.push(res);
      }
    });
  }

  motClicked() {
    this.viewMOTs.emit();
  }

}
