import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InfoComponent } from './pages/info/info.component';
import { LigaComponent } from './pages/liga/liga.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent, pathMatch: 'full'},
  { path: 'liga', component: LigaComponent, pathMatch: 'full'},
  { path: 'info', component: InfoComponent, pathMatch: 'full'},
  { path: 'ljestvica', component: RankingComponent, pathMatch: 'full'},
  { path: 'ekipe', component: TeamsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }