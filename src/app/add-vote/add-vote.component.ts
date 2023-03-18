import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {VoteModel, VoterModel} from "../model/voter.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-vote',
  templateUrl: './add-vote.component.html',
  styleUrls: ['./add-vote.component.css']
})
export class AddVoteComponent implements OnInit {

  @Input() set voters(voters: VoterModel[]){
    this.filteredVoters = voters.filter(voter => !voter.hasVoted);
  }

  @Input() candidates: null | any;

  @Output()
  eventTask = new EventEmitter<VoteModel>();

  filteredVoters: any | null;

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    candidateId: new FormControl('', Validators.required),
    voterId: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.eventTask.emit(this.form.value);
    this.form.get('candidateId')?.setValue("");
    this.form.get('voterId')?.setValue("");
  }

}
