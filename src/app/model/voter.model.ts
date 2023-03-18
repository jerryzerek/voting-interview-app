export interface VoterModel {
  id?: string;
  name: string;
  hasVoted?: boolean;
}

export interface VoteModel {
  candidateId: string;
  voterId: string;
}
