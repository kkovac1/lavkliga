import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from './models/Team';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Player } from './models/Player';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: Team[] = [];
  columns = [
    // {columnDef: 'position', header: '#', cell: (row: Tablica) => `${row.position}`},
    {columnDef: 'team', header: 'Tim', cell: (row: Team) => `${row.team}`},
    {columnDef: 'game', header: 'Utakmice', cell: (row: Team) => `${row.game}`},
    {columnDef: 'win', header: 'Pobjeda', cell: (row: Team) => `${row.win}`},
    {columnDef: 'draw', header: 'Neriješeno', cell: (row: Team) => `${row.draw}`},
    {columnDef: 'lose', header: 'Izgubljeno', cell: (row: Team) => `${row.lose}`},
    {columnDef: 'goalsScored', header: 'G+', cell: (row: Team) => `${row.goalsScored}`},
    {columnDef: 'goalsConceded', header: 'G-', cell: (row: Team) => `${row.goalsConceded}`},
    {columnDef: 'goalDifference', header: 'GR', cell: (row: Team) => `${row.goalDifference}`},
    {columnDef: 'pts', header: 'Bodovi', cell: (row: Team) => `${row.pts}`},
  ];

  items: Observable<Team[]>;


  constructor(public fireService: FireService) {

    fireService.getTeams().subscribe((res: Team[]) => {
      this.data = res;
      this.data.sort((a, b) => {
        return b.pts - a.pts;
      });
    })
    
    // fireService.getPlayersByTeamID("1").subscribe(res => {
    //   console.log(res);
      
    // });
    fireService.getPlayersByTeamID(1).subscribe( res => {
      console.log(res);
    });
    
    
    // db.object("players").valueChanges().subscribe((res: Players[]) => {
    //   console.log(res.filter(x => x.team_id == 1))
      
      
    // });
    
  }

  ngOnInit(): void {
  }

}
