import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ["/homepage"] },
      { label: 'Liga', icon: 'pi pi-fw pi-calendar', routerLink: ["/liga"], routerLinkActiveOptions: { exact: true }, command: (event) => console.log(event) },
      { label: 'O Ligi', icon: 'pi pi-fw pi-pencil', routerLink: ["/info"], routerLinkActiveOptions: {exact: true} }
  ];
  }

}
