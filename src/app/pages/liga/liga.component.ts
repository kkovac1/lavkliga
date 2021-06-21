import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Team } from 'src/app/components/table/models/Team';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.scss']
})
export class LigaComponent implements OnInit {


  data: Team[] = [];
  columns = [
    // {columnDef: 'position', header: '#', cell: (row: Tablica) => `${row.position}`},
    {columnDef: 'team', header: 'T', cell: (row: Team) => `${row.team}`},
    {columnDef: 'game', header: 'U', cell: (row: Team) => `${row.game}`},
    {columnDef: 'goalDifference', header: 'GR', cell: (row: Team) => `${row.goalDifference}`},
    {columnDef: 'pts', header: 'B', cell: (row: Team) => `${row.pts}`},
  ];

  items: MenuItem[];
  activeItem: MenuItem;

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  images: any[] = [
    {
      "previewImageSrc": "assets/gallery/1.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/gallery/2.jpg",
      "alt": "Description for Image 1",
      "title": "2"
    },
    {
      "previewImageSrc": "assets/gallery/3.jpg",
      "alt": "Description for Image 1",
      "title": "3"
    },
    {
      "previewImageSrc": "assets/gallery/4.jpg",
      "alt": "Description for Image 1",
      "title": "4"
    },
    {
      "previewImageSrc": "assets/gallery/5.jpg",
      "alt": "Description for Image 1",
      "title": "5"
    },
    {
      "previewImageSrc": "assets/gallery/6.jpg",
      "alt": "Description for Image 1",
      "title": "6"
    },
  ];

  constructor(public fireService: FireService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ["/homepage"] },
      { label: 'Liga', icon: 'pi pi-fw pi-calendar', routerLink: ["/liga"], routerLinkActiveOptions: { exact: true }, command: (event) => console.log(event) },
      { label: 'O Ligi', icon: 'pi pi-fw pi-pencil', routerLink: ["/info"], routerLinkActiveOptions: { exact: true } }
    ];

    this.fireService.getTeams().subscribe((res: Team[]) => {
      this.data = res;
      this.data.sort((a, b) => {
        return b.pts - a.pts;
      });
      this.data = this.data.slice(0,4)
    })

    this.activeItem = this.items[0];
  }

  

}
