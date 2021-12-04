import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addDiscord(code: string){
    return this.http.post<{ token: string }>(`${environment.apiUrl}/user/discord`, {code, callback: environment.discordCallbackUrl});
  }
}
