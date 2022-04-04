import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GhRep } from '../models/ghRep';
import { GhUser } from '../models/ghUser';




@Injectable()

export class GhApiService {

  private readonly baseUrl: string = 'http://api.github.com/users' //declara propriedade de leitura

  constructor(
    private http: HttpClient // dependencia HttpCliente
  ) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findUserRepositorio(username: string) : Observable<GhRep[]>{
    return this.http.get<GhRep[]>(`${this.baseUrl}/${username}/repos`)
  }
}
