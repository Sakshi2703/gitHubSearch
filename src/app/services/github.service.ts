import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class GithubService 
{
  private username = 'bradtraversy';
  
private client_id = 'd9308aacf8b204d361fd';
 
 private client_secret='62551cc02cee983fff0bac41baf170eb5a312c1c';
 
 constructor(private _http: HttpClient) { }

  getUser(){
  
  return this._http.get('https://api.github.com/search/users?q=' + this.username + '&per_page=50' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100')
        .pipe(map(res => res));
}

getRepos(){
    return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .pipe(map(res => res));
}

updateUsername(username:string){
    this.username = username;
}
}
