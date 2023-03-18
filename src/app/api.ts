import {environment} from "../environments/environment";

export class Api {

  voters = `${environment.baseUrl}voters`;
  candidates = `${environment.baseUrl}candidates`;

}
