import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailCatPage} from '../detail-cat/detail-cat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

catData = [{catName:'cat1' , age : '10 ปี'},
{catName:'cat2' , age : '9 ปี'},
{catName:'cat3' , age : '12 ปี'},
{catName:'cat4' , age : '11 ปี'},
{catName:'cat5' , age : '5 ปี'},
{catName:'cat6' , age : '3 ปี'}]

  constructor(public navCtrl: NavController) {
   
  }
  openDetail(cat){
    console.log('cat',cat);
    this.navCtrl.push(DetailCatPage ,{ cat : cat });
  }
  

}
