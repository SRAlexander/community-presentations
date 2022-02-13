import { Component, OnInit } from '@angular/core';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  showCollapsed: boolean = false;
  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  onShowCollapsed() {
    this.showCollapsed = !this.showCollapsed;
  }

}
