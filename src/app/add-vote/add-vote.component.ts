import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VoteModel, VoterModel} from "../model/voter.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CandidateModel} from "../model/candidate.model";

@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})
export class AddVoteComponent implements OnInit {

  @Input() set voters(voters: VoterModel[]){
    this.filteredVoters = voters.filter(voter => !voter.hasVoted);
  }

  @Input() candidates?: CandidateModel[];

  @Output()
  eventTask = new EventEmitter<VoteModel>();

  filteredVoters?: VoterModel[];

  ngOnInit(): void {
  }

  form = new FormGroup({
    candidateId: new FormControl('', Validators.required),
    voterId: new FormControl('', Validators.required)
  });

  get candidateId(): FormControl {
    return this.form.get('candidateId') as FormControl;
  }

  get voterId(): FormControl {
    return this.form.get('voterId') as FormControl;
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.eventTask.emit(this.form.value);
    this.candidateId.setValue("");
    this.voterId.setValue("");
  }

}
