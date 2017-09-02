import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';

@Injectable()

export class githubservices{


    private username = 'aman9893';

    private client_id='6ef561ffe9ddc0c420f4';
    
    private client_secret='bf67093e8407a7b8e94222f25a97b8661f2164e6';

    constructor(private _http:Http){

   console.log('github servies');
    }

getUser(){

  return  this._http.get('https://api.github.com/users/'+this.username)
       .map(res =>res.json());
}

getRepos(){
    
      return  this._http.get('https://api.github.com/users/'+this.username+'/repos')
           .map(res =>res.json());
    }

    updateUsername(username:string){

        this.username=username;
    }
}