import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IPlayer } from '../components/table/models/IPlayer';
import { ITeam } from '../components/table/models/ITeam';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private fireDb: AngularFireDatabase) { }

  getTeams(){
    return this.fireDb.object<ITeam[]>("teams").valueChanges();
  }

  getPlayersByTeamID(uid: number): Observable<IPlayer[]>{
    return this.fireDb.list<IPlayer>('/players', ref => ref.orderByChild("team_id").equalTo(uid)).valueChanges();
  }
}
