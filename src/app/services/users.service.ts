import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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


  constructor(private http: HttpClient) {
  }

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetUrl}users?page=${page}`)
      .pipe(map(el => el.items))
  }
}
