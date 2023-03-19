import {Component, OnInit} from '@angular/core';
import {VoteService} from "../services/vote.service";
import {VoteModel, VoterModel} from "../model/voter.model";
import {switchMap} from "rxjs";
import {CandidateModel} from "../model/candidate.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor(private voteService: VoteService) {
  }

  voters: VoterModel[] | undefined;
  candidates: CandidateModel[] | undefined;

  ngOnInit(): void {
    this.voteService.getVoters().subscribe(voters => {
      this.voters = voters;
    })

    this.voteService.getCandidates().subscribe(candidates => {
      this.candidates = candidates;
    })
  }

  form = new FormGroup({
    voterName: new FormControl('')
  });

  get voterName(): FormControl {
    return this.form.get('voterName') as FormControl;
  }

  addVoter() {
    this.voteService.addVoter({name: this.voterName.value})
      .pipe(
        switchMap(() => this.voteService.getVoters()))
      .subscribe((voters) => this.voters = voters);

    this.form.reset();
  }

  setVote(vote: VoteModel) {
    this.voteService.setVote(vote.candidateId, vote.voterId)
      .pipe(
        switchMap(() => this.voteService.getVoters()))
      .subscribe((voters) => this.voters = voters);
  }
}
