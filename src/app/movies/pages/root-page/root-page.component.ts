import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styles: [],
})
export class RootPageComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: [''],
    },
    {
      label: 'My Favourites',
      routerLink: ['favourites'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
