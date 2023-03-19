import {Component, OnInit} from '@angular/core';
import {VoteService} from "../services/vote.service";
import {CandidateModel} from "../model/candidate.model";
import {switchMap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private voteService: VoteService) {
  }

  candidates?: CandidateModel[];

  ngOnInit(): void {
    this.voteService.getCandidates().subscribe(candidates => {
      this.candidates = candidates;
    })
  }

  form = new FormGroup({
    candidateName: new FormControl('')
  });

  get candidateName(): FormControl {
    return this.form.get('candidateName') as FormControl;
  }

  addCandidate() {
    this.voteService.addCandidate({name: this.candidateName.value})
      .pipe(
        switchMap(() => this.voteService.getCandidates())
      ).subscribe((candidates) => this.candidates = candidates);

    this.form.reset();
  }

}
