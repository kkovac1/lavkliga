import { Component, OnInit } from '@angular/core';
import { ITeam } from 'src/app/components/table/models/ITeam';
import { FireService } from 'src/app/services/fire.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public teams: ITeam[] = [];
  public utakmice: any = [];
  constructor(
    public fireService: FireService
  ) {
    this.fireService.getTeams().subscribe((res: ITeam[]) => {
      this.teams = res;
      this.utakmice = this.makeRoundRobinPairings(this.teams);
      console.log(this.utakmice);
      
    })
  }

  ngOnInit(): void {
  }

  makeRoundRobinPairings(teams: ITeam[]) {
    let teamsCopy: ITeam[] = [...teams];
    if (teamsCopy.length % 2 == 1) {
      teamsCopy.push(null);
    }

    const playerCount = teamsCopy.length;
    const rounds = playerCount - 1;
    const half = playerCount / 2;

    const tournamentPairings = [];

    const playerIndexes = teamsCopy.map((_, i) => i).slice(1);

    for (let round = 0; round < rounds; round++) {

      const roundPairings = [];

      const newPlayerIndexes = [0].concat(playerIndexes);

      const firstHalf = newPlayerIndexes.slice(0, half);
      const secondHalf = newPlayerIndexes.slice(half, playerCount).reverse();

      for (let i = 0; i < firstHalf.length; i++) {
        if (teamsCopy[firstHalf[i]] != null && teamsCopy[secondHalf[i]] != null) {
          roundPairings.push({
            white: teamsCopy[firstHalf[i]].team,
            black: teamsCopy[secondHalf[i]].team,
          });
        }
      }

      // rotating the array
      playerIndexes.push(playerIndexes.shift());
      tournamentPairings.push(roundPairings);
    }

    return tournamentPairings;
  }

}
