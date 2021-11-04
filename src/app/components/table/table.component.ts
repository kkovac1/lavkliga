import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITeam } from './models/ITeam';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { IPlayer } from './models/IPlayer';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  data: ITeam[] = [];
  columns = [
    // {columnDef: 'position', header: '#', cell: (row: Tablica) => `${row.position}`},
    { columnDef: 'team', header: 'Tim', cell: (row: ITeam) => `${row.team}` },
    { columnDef: 'game', header: 'Utakmice', cell: (row: ITeam) => `${row.game}` },
    { columnDef: 'win', header: 'Pobjeda', cell: (row: ITeam) => `${row.win}` },
    { columnDef: 'draw', header: 'Neriješeno', cell: (row: ITeam) => `${row.draw}` },
    { columnDef: 'lose', header: 'Izgubljeno', cell: (row: ITeam) => `${row.lose}` },
    { columnDef: 'goalsScored', header: 'G+', cell: (row: ITeam) => `${row.goalsScored}` },
    { columnDef: 'goalsConceded', header: 'G-', cell: (row: ITeam) => `${row.goalsConceded}` },
    { columnDef: 'goalDifference', header: 'GR', cell: (row: ITeam) => `${row.goalDifference}` },
    { columnDef: 'pts', header: 'Bodovi', cell: (row: ITeam) => `${row.pts}` },
  ];

  items: Observable<ITeam[]>;


  constructor(public fireService: FireService) {

    this.fireService.getTeams().subscribe((res: ITeam[]) => {
      this.data = res;
      this.data.sort((a, b) => {
        return b.pts - a.pts;
      });
      console.log(this.data);
    })

    // fireService.getPlayersByTeamID("1").subscribe(res => {
    //   console.log(res);

    // });
    this.fireService.getPlayersByTeamID(1).subscribe(res => {
      console.log(res);
    });


    // db.object("players").valueChanges().subscribe((res: Players[]) => {
    //   console.log(res.filter(x => x.team_id == 1))


    // });
  }

  ngOnInit(): void {
  }

}
