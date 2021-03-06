import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  TS = "1642039962780";
  PUBLIC_KEY = '331e5ce097ae0aa91511db1c31714c0f';
  HASH_MD5 = 'fe51702a106a5fc85904ef3d87a6e2ca';
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH_MD5}` ;

  constructor(private http: HttpClient) { 

  }

  getAllCharacters(): Observable<any>{

    return this.http.get<any>(this.URL_API)
    .pipe( map ( (data: any)=> data.data.results ))
  }

}
