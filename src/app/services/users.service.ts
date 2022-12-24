import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";

export interface User {
  name: string
  id: number
  photos: {
    small: string | null,
    large: string | null
  }
  followed: boolean
}

export interface UsersResponse {
  items: User[]
  totalCount: string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpOptions = {
    withCredentials: true,
    headers: new HttpHeaders().append('api-key', environment.apiKey)
  }

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetUrl}users`, this.httpOptions)
      .pipe(map(el=>el.items))
  }
}
