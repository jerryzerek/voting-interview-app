import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VoterComponent} from './voter/voter.component';
import {CandidateComponent} from './candidate/candidate.component';
import {Api} from "./api";
import {VoteService} from "./services/vote.service";
import {HttpClientModule} from "@angular/common/http";
import {AddVoteComponent} from './add-vote/add-vote.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    CandidateComponent,
    AddVoteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Api,
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
