import { Component, OnInit } from '@angular/core';
import { ITeam } from 'src/app/components/table/models/ITeam';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  data: ITeam[] = [];
  constructor(public fireService: FireService) { }

  ngOnInit(): void {
    this.fireService.getTeams().subscribe((res: ITeam[]) => {
      this.data = res;
      this.data.sort((a, b) => {
        return b.pts - a.pts;
      });
    })
    
  }

  test(team: ITeam){
    this.fireService.getPlayersByTeamID(team.id).subscribe( res => {
      console.log(res);
    });
    
  }

}
