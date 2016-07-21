import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Githubusers} from '../../providers/githubusers/githubusers';
import {User} from '../../model/user'
/*
  Generated class for the UserdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/userdetail/userdetail.html',providers: [Githubusers]
})
export class UserdetailPage {
login:string;
user: User = new User;
constructor(private nav: NavController,navParams:NavParams,githubusers:Githubusers) {
    this.login=navParams.get('login');
    //console.log(this.login);
    var zz = githubusers.loadDetails(this.login).then(user=>this.user=user);
    
    console.log(zz);
    
  }
}
