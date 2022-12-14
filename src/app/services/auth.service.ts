import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

export interface AuthMeResponse {
  resultCode: number
  messages: string[]
  data: {
    id: number
    email: string
    login: string
  }
}

enum resultCode {
  success,
  error
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  isAuth = false

  authMe() {
    return this.http
      .get<AuthMeResponse>(`${environment.baseNetUrl}auth/me`).subscribe((res) => {
        if (res.resultCode === resultCode.success) this.isAuth = true
      })
  }
}
