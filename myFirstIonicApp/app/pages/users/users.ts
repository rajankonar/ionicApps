import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyCustomService} from '../../providers/my-custom-service/my-custom-service';
import {UserdetailPage} from '../userdetail/userdetail';



/*
  Generated class for the UsersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/users/users.html',
  providers: [MyCustomService]
})
export class UsersPage {
public people : any;
constructor(public myCustomService:MyCustomService,public nav: NavController ) {
    this.loadPeople();
     this.nav = nav;
}
loadPeople(){
    this.myCustomService.load()
    .then(data => {
        this.people = data;
    });
}
    
    getDetails(username){
        //console.log(username);
        this.nav.push(UserdetailPage, {
            username: username
        });
    }
    
} 



