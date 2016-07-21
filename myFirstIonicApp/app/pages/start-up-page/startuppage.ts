import {Component} from '@angular/core';
import {Page} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {UsersPage} from '../users/users';

@Page({
  templateUrl: 'build/pages/start-up-page/startuppage.html'
})
 /*   @Component({
        templateUrl: 'build/pages/start-up-page/startuppage.html'
        })*/

export class StartUpPage{
    
    Start=TabsPage;
    getRandowmUsers=UsersPage;
    
    constructor(){
      
    }   
}
