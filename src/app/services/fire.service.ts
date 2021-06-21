import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Player } from '../components/table/models/Player';
import { Team } from '../components/table/models/Team';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private fireDb: AngularFireDatabase) { }

  getTeams(){
    return this.fireDb.object<Team[]>("teams").valueChanges();
  }

  getPlayersByTeamID(uid: number): Observable<Player[]>{
    return this.fireDb.list<Player>('/players', ref => ref.orderByChild("team_id").equalTo(uid)).valueChanges();
  }
}
