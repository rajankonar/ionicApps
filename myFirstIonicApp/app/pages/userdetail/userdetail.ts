import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Showdata} from '../../providers/showdata/showdata';


 

/*
  Generated class for the UserdetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
templateUrl: 'build/pages/userdetail/userdetail.html',
providers:[Showdata]
})
export class UserdetailPage {
    public seedGet:any;
    public userData:any;
    constructor(private nav: NavController , navParams: NavParams,public showdata:Showdata) {
          this.seedGet=navParams.get("username");
       // alert(this.usernameGet );
       // this.getData(this.seedGet);
    }
   /* getData(this.seedGet){
        
        this.showdata.load(seedGet)
        .then(data =>{
            this.userData=data;
        console.log(this.userData);
        });
    }  */
}
