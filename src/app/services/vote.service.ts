import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Api} from "../api";
import {Observable} from "rxjs";
import {VoterModel} from "../model/voter.model";
import {CandidateModel} from "../model/candidate.model";

@Injectable()
export class VoteService {

  constructor(private httpClient: HttpClient, private api: Api) {
  }

  getVoters(): Observable<VoterModel[]> {
    return this.httpClient.get<VoterModel[]>(this.api.voters);
  }

  getCandidates(): Observable<CandidateModel[]> {
    return this.httpClient.get<CandidateModel[]>(this.api.candidates);
  }

  addVoter(voter: VoterModel): Observable<VoterModel> {
    return this.httpClient.post<VoterModel>(this.api.voters, voter)
  }

  addCandidate(candidate: CandidateModel): Observable<CandidateModel> {
    return this.httpClient.post<CandidateModel>(this.api.candidates, candidate)
  }

  setVote(candidateId: string, voterId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.api.voters}/${voterId}/candidates/${candidateId}`);
  }



}
