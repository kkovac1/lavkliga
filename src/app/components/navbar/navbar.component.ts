import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebook = faFacebook;

  items: MenuItem[];
  liga: MenuItem[];
  constructor() { }

  ngOnInit(): void {

    this.liga = [
      { label: 'Ljestvica' },
      { label: 'Rezultati' },
    ]

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ["/homepage"] },
      { label: 'Liga', icon: 'pi pi-fw pi-calendar', routerLink: ["/liga"], routerLinkActiveOptions: { exact: true }, command: (event) => console.log(event) },
      { label: 'O Ligi', icon: 'pi pi-fw pi-pencil', routerLink: ["/info"], routerLinkActiveOptions: {exact: true} }
    ];
  }

  openSite(siteUrl: string) {
    console.log(siteUrl);
    
    window.open(siteUrl, '_blank');
 }

}
