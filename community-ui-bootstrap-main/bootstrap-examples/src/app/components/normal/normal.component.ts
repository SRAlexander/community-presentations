import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.css']
})
export class NormalComponent implements OnInit {

  data: any = [];

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.demoService.getCarData().subscribe({
      next: (res: any) => {
        this.data.push(res);
      }
    });

  }

}
