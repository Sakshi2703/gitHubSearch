import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent  {

  user:any;
  repos:any;
  username:string;
  showRepo:boolean = false;
  showDet:boolean = true;
  hideDet:boolean = false;
  constructor(private _githubService:GithubService){
      console.log('Github Component Init...');   
  }
  
  showDetails(){
    this.showRepo = true;
    this.showDet= false;
    this.hideDet = true;
  }

  hideDetails(){
    this.showRepo = false;
    this.showDet= true;
    this.hideDet = false;
  }
  search(){
      this._githubService.updateUsername(this.username);
      
      this._githubService.getUser().subscribe(user => {
          //console.log(user);
          this.user = user;
      });
      
      this._githubService.getRepos().subscribe(repos => {
          this.repos = repos;
      });
  }

}
