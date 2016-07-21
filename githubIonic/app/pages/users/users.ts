import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Githubusers} from '../../providers/githubusers/githubusers';
import {User} from '../../model/user';
import {UserdetailPage} from '../userdetail/userdetail';

/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
templateUrl: 'build/pages/users/users.html',providers:[Githubusers]
})
export class UsersPage {
    users:User[];
    constructor(private nav: NavController,public githubusers:Githubusers) {
        githubusers.load().then(
            /*function(users){
                console.log(users);
            }*/
            users => this.users=users 
        );
        //githubusers.searchDetails('rajan').then(users=>console.log(users));
    }
    goToDetails(event, login) {
        this.nav.push(UserdetailPage, {
            login: login
        });
    }
    search(searchTerm){
        let term = searchTerm.target.value;
        if (term.trim() == '' || term.trim().length < 3) {
            this.githubusers.load().then(users=>this.users=users);
        } else {
            this.githubusers.searchDetails(term).then(users=>this.users=users);
        }

    }
}
