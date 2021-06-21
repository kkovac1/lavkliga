import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/components/table/models/Team';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  data: Team[] = [];
  constructor(public fireService: FireService) { }

  ngOnInit(): void {
    this.fireService.getTeams().subscribe((res: Team[]) => {
      this.data = res;
      this.data.sort((a, b) => {
        return b.pts - a.pts;
      });
    })
    
  }

  test(team: Team){
    this.fireService.getPlayersByTeamID(team.id).subscribe( res => {
      console.log(res);
    });
    
  }

}
