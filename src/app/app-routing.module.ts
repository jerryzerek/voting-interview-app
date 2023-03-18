import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CandidateComponent} from "./candidate/candidate.component";
import {VoterComponent} from "./voter/voter.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/voters', pathMatch: 'full' },
  { path: 'voters', component: VoterComponent},
  { path: 'candidates', component: CandidateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
