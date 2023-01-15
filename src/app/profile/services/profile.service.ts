import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

export interface ProfileResponse  {
  userId: number
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  fullName?: string
  contacts?: string
  github?: string
  vk?: string
  facebook?: string
  instagram?: string
  twitter?: string
  website?: string
  youtube?: string
  mainLink?: string
  photos: {
    small: string | null
    large: string | null
  }
}


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private http: HttpClient) {
  }

  getUsersProfile(userId: number): Observable<ProfileResponse> {
    return this.http
      .get<ProfileResponse>(`${environment.baseNetUrl}profile/${userId}`)
  }
}
