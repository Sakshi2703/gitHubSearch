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
  p:number =1;
  users:any;
  userDetail;
  togglePanel: any = {};
  constructor(private _githubService:GithubService){
      console.log('Github Component Init...');   
  }
  
  showDetails(i){
    this.showDet = false;
    this.togglePanel[i] = true;
    this.hideDet = true;
      
      }
    
      hideDetails(i){
      this.hideDet = false;
      this.togglePanel[i] = false;
      this.showDet = true;
      }

  search(){
      this._githubService.updateUsername(this.username);
      
      this._githubService.getUser().subscribe(user => {
        this.users = user;
        this.userDetail  = this.users.items;
      });
      
      this._githubService.getRepos().subscribe(repos => {
          this.repos = repos;
      });
  }

}
