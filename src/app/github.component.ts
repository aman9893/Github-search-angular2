import { Component } from '@angular/core';
import { githubservices} from './github.service';
import { NgForm } from '@angular/forms';
@Component({

moduleId:module.id,
 selector: 'github',
  templateUrl: "./github.html",

  providers:[githubservices]
})

export class githubcomponent  {

    user:any;
    repos:any;
    username:any;
 constructor(private _githubservice:githubservices){

        console.log("this is my application");

        this._githubservice.getUser().subscribe(user =>{
  // console.log(users);

      this.user = user;
        });
        this._githubservice.getRepos().subscribe(repos =>{
          // console.log(users);
        
              this.repos = repos;
                });
              }



        search(){
        this._githubservice.updateUsername(this.username);


        this._githubservice.getUser().subscribe(user =>{
          // console.log(users);
        
              this.user = user;
                });
                this._githubservice.getRepos().subscribe(repos =>{
                  // console.log(users);
                
                      this.repos = repos;
                        });


              }
    }

  