import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { PrimengModule } from './primeng.module';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { LigaComponent } from './pages/liga/liga.component';
import { InfoComponent } from './pages/info/info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { FireService } from './services/fire.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RankingComponent } from './pages/ranking/ranking.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ResultsComponent } from './pages/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LigaComponent,
    InfoComponent,
    NavbarComponent,
    TableComponent,
    RankingComponent,
    TeamsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [FireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
